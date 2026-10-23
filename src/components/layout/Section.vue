<script setup lang="ts">
/**
 * A full-width band of a page with a centred, max-width container.
 *
 * tone: default (white) · muted (light grey) · inverse (black) · accent (black with amber headings)
 * narrow: a ~880px column for text-led sections
 * tight: less vertical padding (for supporting strips such as ProjectFacts)
 */
import { computed } from "vue";

export type SectionTone = "default" | "muted" | "inverse" | "accent"

const props = withDefaults(defineProps<{ tone?: SectionTone; narrow?: boolean; tight?: boolean }>(), {
  tone: "default",
});

const dark = computed(() => props.tone === "inverse" || props.tone === "accent");
</script>

<template>
  <v-theme-provider :theme="dark ? 'brandInverse' : 'brand'">
    <section class="section" :class="[`section--${tone}`, { 'section--tight': tight }]">
      <div class="section__container" :class="{ 'is-narrow': narrow }">
        <slot />
      </div>
    </section>
  </v-theme-provider>
</template>

<style>
@layer site {
  .section {
    --heading: inherit;
    padding-block: var(--section-y);
    overflow-x: clip;
    background: var(--white);
    color: var(--black);
  }
  .section--tight {
    padding-block: calc(var(--section-y) * 0.55);
  }
  .section--muted {
    background: var(--mist);
  }
  .section--inverse,
  .section--accent {
    background: var(--black);
    color: var(--white);
  }
  .section--accent {
    --heading: var(--amber);
  }
  .section__container {
    width: 100%;
    max-width: calc(1200px + 2 * var(--gutter));
    margin-inline: auto;
    padding-inline: var(--gutter);
  }
  .section__container.is-narrow {
    max-width: calc(880px + 2 * var(--gutter));
  }
  /* Space between stacked rows inside a section */
  .section__container > * + * {
    margin-top: clamp(2rem, 1.2rem + 3vw, 3.5rem);
  }
}
</style>
