<script setup lang="ts">
/**
 * The opening of a case study: eyebrow, title and intro (slot) beside the lead image.
 * Put the intro paragraphs in the default slot as plain HTML.
 */
import type { SectionTone } from "../layout/Section.vue";

withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    image: string
    imageAlt?: string
    /** Square corners on the image (e.g. phone mockups with their own shape) */
    imageSquare?: boolean
    tone?: SectionTone
  }>(),
  { eyebrow: "Product design project", imageAlt: "", tone: "default" },
);
</script>

<template>
  <Section :tone="tone" class="case-hero">
    <v-row align="center" class="ga-0">
      <v-col cols="12" md="6" class="pe-md-10">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1 class="display">{{ title }}</h1>
        <Prose v-if="$slots.default" class="case-hero__intro">
          <slot />
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure :src="image" :alt="imageAlt" :square="imageSquare" eager />
      </v-col>
    </v-row>
  </Section>
</template>

<style>
@layer site {
  .case-hero__intro {
    margin-top: 1.5rem;
  }
}
</style>
