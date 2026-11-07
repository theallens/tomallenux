<script setup lang="ts">
/**
 * Text written in Sanity, as the plain elements Prose styles. Wrap it in Prose
 * (or a block that already does) for spacing and same-site link handling.
 */
import { h } from "vue";
import { PortableText, type PortableTextComponents } from "@portabletext/vue";
import type { PortableTextBlock } from "@portabletext/types";

defineProps<{ value: PortableTextBlock[] }>();

const components: PortableTextComponents = {
  block: {
    normal: (_, { slots }) => h("p", { class: "text-large" }, slots.default?.()),
    plain: (_, { slots }) => h("p", slots.default?.()),
    small: (_, { slots }) => h("p", { class: "text-small" }, slots.default?.()),
  },
  listItem: (_, { slots }) => h("li", h("p", { class: "text-large" }, slots.default?.())),
  marks: {
    highlight: (_, { slots }) => h("span", { class: "highlight" }, slots.default?.()),
    link: ({ value }, { slots }) =>
      h(
        "a",
        {
          href: value?.href,
          target: value?.newWindow ? "_blank" : undefined,
          rel: value?.newWindow ? "noopener" : undefined,
        },
        slots.default?.()
      ),
  },
};
</script>

<template>
  <PortableText :value="value" :components="components" />
</template>
