<script setup lang="ts">
/**
 * Rich text. Write plain HTML in the slot: h1–h4, p, ul/ol, blockquote, strong, em, a.
 * Paragraph classes: text-large, text-small. Inline: <span class="text-white">, <span class="highlight">.
 * Same-site links (<a href="/about">) navigate without a page reload.
 * Text is limited to a comfortable line length unless `wide` is set.
 */
import { useRouter } from "vue-router";
import { isInternal } from "@/lib/links.ts";

defineProps<{ wide?: boolean }>();

const router = useRouter();
function onClick(e: MouseEvent) {
  const a = (e.target as HTMLElement).closest("a");
  const href = a?.getAttribute("href");
  if (!a || !href || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || !isInternal(href)) return;
  e.preventDefault();
  router.push(href);
}
</script>

<template>
  <div class="prose" :class="{ 'is-wide': wide }" @click="onClick">
    <slot />
  </div>
</template>
