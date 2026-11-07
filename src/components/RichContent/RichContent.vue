<script setup lang="ts">
/**
 * The body of a case study section or column, as written in Sanity. Each block
 * maps onto the same global block a hand-written page would use; runs of text share a Prose.
 */
import { computed } from "vue";
import type { PortableTextBlock } from "@portabletext/types";
import type { Column, ColumnsBlock, SectionItem } from "@/types/cms.ts";
import RichText from "../RichText/RichText.vue";

const props = defineProps<{ content?: SectionItem[]; sizes?: string }>();

type TextRun = { _type: "text"; _key: string; blocks: PortableTextBlock[] };

const isText = (item: SectionItem): item is PortableTextBlock => item._type === "block";

const items = computed(() =>
  (props.content ?? []).reduce<(Exclude<SectionItem, PortableTextBlock> | TextRun)[]>(
    (result, item) => {
      if (!isText(item)) return [...result, item as Exclude<SectionItem, PortableTextBlock>];
      const last = result[result.length - 1];
      if (last?._type === "text") last.blocks.push(item);
      else result.push({ _type: "text", _key: item._key!, blocks: [item] });
      return result;
    },
    []
  )
);

/** Keeps text clear of its neighbour in a two-column row. */
function gutter(block: ColumnsBlock, index: number) {
  const textFirst = block.columns[0].content?.some(isText);
  if (block.columns.length !== 2 || index !== 0 || !textFirst) return undefined;
  return block.flip ? "ps-md-10" : "pe-md-10";
}

function order(block: ColumnsBlock, index: number) {
  if (!block.flip) return undefined;
  return index === 0 ? "order-md-2" : "order-md-1";
}

function imageSizes(column: Column) {
  const percent = (width: number) => Math.round((width / 12) * 100);
  return `(max-width: 959px) ${percent(column.mobileWidth ?? 12)}vw, ${percent(column.width)}vw`;
}
</script>

<template>
  <template v-for="item in items" :key="item._key">
    <Prose v-if="item._type === 'text'">
      <RichText :value="item.blocks" />
    </Prose>

    <v-row v-else-if="item._type === 'columns'" :align="item.align">
      <v-col
        v-for="(column, index) in item.columns"
        :key="column._key"
        :cols="column.mobileWidth ?? 12"
        :md="column.width"
        class="d-flex flex-column"
        :class="[
          column.content?.some(isText) ? 'ga-4' : 'ga-6',
          order(item, index),
          gutter(item, index),
          { 'justify-center': column.center },
        ]"
      >
        <div v-if="column.sticky" class="position-sticky case-sticky">
          <RichContent :content="column.content" :sizes="imageSizes(column)" />
        </div>
        <RichContent v-else :content="column.content" :sizes="imageSizes(column)" />
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
      >
        <template v-if="item.caption?.length" #default>
          <RichText :value="item.caption" />
        </template>
      </Figure>
    </template>

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
