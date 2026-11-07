<script setup lang="ts">
/** A video or prototype from a share link. Links from unsupported sites render nothing. */
import { computed } from "vue";
import { embedSrc } from "@/lib/embeds.ts";

const props = withDefaults(defineProps<{ url: string; title: string; aspect?: string }>(), {
  aspect: "16 / 9",
});

const src = computed(() => embedSrc(props.url));
</script>

<template>
  <iframe
    v-if="src"
    class="embed-frame"
    :src="src"
    :title="title"
    :style="{ aspectRatio: aspect }"
    loading="lazy"
    allowfullscreen
  />
</template>

<style>
@layer site {
  .embed-frame {
    display: block;
    width: 100%;
    border: 0;
    border-radius: var(--radius);
  }
}
</style>
