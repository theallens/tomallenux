<script setup lang="ts">
/**
 * The body of a case study section, column or panel, as written in Sanity. Each block maps
 * onto the same global block a hand-written page would use; runs of text share a Prose.
 */
import { computed } from "vue";
import type { PortableTextBlock } from "@portabletext/types";
import type { Column, ColumnsBlock, GalleryBlock, SectionItem } from "@/types/cms.ts";
import EmbedFrame from "../EmbedFrame/EmbedFrame.vue";
import RichText from "../RichText/RichText.vue";

const props = defineProps<{
  content?: SectionItem[];
  sizes?: string;
  /** Inside a column or panel */
  nested?: boolean;
  /** Text without its own Prose, because a panel already provides one */
  bare?: boolean;
}>();

type TextRun = { _type: "text"; _key: string; blocks: PortableTextBlock[] };

const isText = (item: SectionItem): item is PortableTextBlock => item._type === "block";

function groupText(content: SectionItem[] = []) {
  return content.reduce<(Exclude<SectionItem, PortableTextBlock> | TextRun)[]>((result, item) => {
    if (!isText(item)) return [...result, item as Exclude<SectionItem, PortableTextBlock>];
    const last = result[result.length - 1];
    if (last?._type === "text") last.blocks.push(item);
    else result.push({ _type: "text", _key: item._key!, blocks: [item] });
    return result;
  }, []);
}

const items = computed(() => groupText(props.content));

/** Centred text is centred against the whole column, so it can't be limited to a line length. */
const isCentred = (run: TextRun) => run.blocks.some((block) => block.style === "h3center");

const space = (step?: number) => (step ? `mt-${step}` : undefined);

/** Keeps text clear of its neighbour in a two-column row. */
function gutter(block: ColumnsBlock, index: number) {
  const [first, second] = block.columns;
  if (block.columns.length !== 2 || (props.nested && !props.bare)) return undefined;
  const textFirst = first.content?.some(isText);
  if (index === 0 && textFirst && props.bare) return "pe-md-8";
  if (index === 0 && textFirst) return block.flip ? "ps-md-10" : "pe-md-10";
  const hasRows = second.content?.some((item) => item._type === "columns");
  return index === 1 && !textFirst && hasRows ? "ps-md-8" : undefined;
}

function order(block: ColumnsBlock, index: number) {
  if (!block.flip) return undefined;
  return index === 0 ? "order-md-2" : "order-md-1";
}

/**
 * Stacks a column's blocks with a gap. Only when there's something to stack, because
 * a flex column stops margins collapsing and changes the spacing of text alone in a column.
 */
function stack(column: Column) {
  const size = column.gap ?? (column.content?.some(isText) ? 4 : 6);
  if (groupText(column.content).length < 2 || size === 0) {
    return column.center ? "d-flex flex-column" : undefined;
  }
  return `d-flex flex-column ga-${size}`;
}

function imageSizes(column: Column) {
  const percent = (width: number) => Math.round((width / 12) * 100);
  return `(max-width: 959px) ${percent(column.mobileWidth ?? 12)}vw, ${percent(column.width)}vw`;
}

const galleryItems = (block: GalleryBlock) =>
  block.items.flatMap(({ image, alt, caption }) =>
    image?.url ? [{ src: image.url, alt, caption }] : []
  );
</script>

<template>
  <template v-for="item in items" :key="item._key">
    <template v-if="item._type === 'text'">
      <RichText v-if="bare" :value="item.blocks" />
      <Prose v-else :wide="isCentred(item)">
        <RichText :value="item.blocks" />
      </Prose>
    </template>

    <v-row
      v-else-if="item._type === 'columns'"
      :align="item.align"
      :class="[space(item.spaceAbove), { 'flex-grow-0': nested }]"
    >
      <v-col
        v-for="(column, index) in item.columns"
        :key="column._key"
        :cols="column.mobileWidth ?? 12"
        :sm="column.tabletWidth"
        :md="column.width"
        :class="[
          stack(column),
          order(item, index),
          gutter(item, index),
          { 'justify-center': column.center },
        ]"
      >
        <div v-if="column.sticky" class="position-sticky case-sticky">
          <RichContent :content="column.content" :sizes="imageSizes(column)" :bare="bare" nested />
        </div>
        <RichContent
          v-else
          :content="column.content"
          :sizes="imageSizes(column)"
          :bare="bare"
          nested
        />
      </v-col>
    </v-row>

    <template v-else-if="item._type === 'figure'">
      <Figure
        v-if="item.image?.url"
        :src="item.image.url"
        :alt="item.alt"
        :square="item.square"
        :shadow="item.shadow"
        :max-width="item.maxWidth"
        :sizes="sizes"
        :class="space(item.spaceAbove)"
      >
        <template v-if="item.caption?.length" #default>
          <RichText :value="item.caption" />
        </template>
      </Figure>
    </template>

    <Panel v-else-if="item._type === 'panel'" :tone="item.tone">
      <RichContent :content="item.content" :sizes="sizes" nested bare />
    </Panel>

    <v-divider v-else-if="item._type === 'divider'" class="my-8" />

    <EmbedFrame
      v-else-if="item._type === 'embed'"
      :url="item.url"
      :title="item.title"
      :aspect="item.aspect"
    />

    <GalleryMasonry v-else-if="item._type === 'gallery'" :items="galleryItems(item)" />

    <Accordion v-else-if="item._type === 'accordion'" :items="item.items">
      <template #body="{ index }">
        <Prose wide>
          <RichText v-if="item.items[index].content" :value="item.items[index].content!" />
        </Prose>
      </template>
    </Accordion>

    <QuoteCard v-else-if="item._type === 'quote'">
      <p class="text-large">
        <strong
          ><em>“{{ item.text }}”</em></strong
        >
      </p>
      <p v-if="item.attribution">
        <strong
          ><em>- {{ item.attribution }}</em></strong
        >
      </p>
    </QuoteCard>

    <ShareMeter v-else-if="item._type === 'shareMeter'" :data="item.data" :caption="item.caption" />

    <div v-else-if="item._type === 'cta' && item.intro" class="d-flex flex-wrap align-center ga-4">
      <Prose>
        <h4>{{ item.intro }}</h4>
      </Prose>
      <CtaButton :to="item.url" :new-window="item.newWindow">{{ item.label }}</CtaButton>
    </div>

    <CtaButton
      v-else-if="item._type === 'cta'"
      :to="item.url"
      :new-window="item.newWindow"
      class="align-self-start"
    >
      {{ item.label }}
    </CtaButton>
  </template>
</template>
