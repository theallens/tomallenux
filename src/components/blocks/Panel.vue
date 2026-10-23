<script setup lang="ts">
/**
 * A padded card of rich text, e.g. a key finding or a step in a process.
 * It contrasts with the section it sits in; `tone="dark"` makes it graphite.
 */
withDefaults(defineProps<{ tone?: "auto" | "dark" }>(), { tone: "auto" });
</script>

<template>
  <v-card class="panel" :class="`panel--${tone}`">
    <Prose wide>
      <slot />
    </Prose>
  </v-card>
</template>

<style>
@layer site {
  /* Alone in a grid column, match the height of its neighbours */
  .v-col > .panel.v-card:only-child {
    height: 100%;
  }
  .panel.v-card {
    padding: clamp(1.25rem, 1rem + 1vw, 2rem);
    background: var(--mist);
    color: inherit;
  }
  .section--muted .panel.v-card {
    background: var(--white);
  }
  .section--inverse .panel.v-card,
  .section--accent .panel.v-card {
    background: #1f1f22;
  }
  .panel--dark.v-card,
  .section .panel--dark.v-card {
    background: var(--graphite);
    color: var(--white);
  }
}
</style>
