<script setup lang="ts">
/**
 * Expandable list; one item open at a time. `body` is HTML.
 * Closed panels are still rendered (eager) so their text is in the prerendered page.
 */
import { ref } from "vue";

const props = withDefaults(defineProps<{ items: { title: string; body: string }[]; firstOpen?: boolean }>(), {
  firstOpen: true,
});

const open = ref<number | undefined>(props.firstOpen ? 0 : undefined);
</script>

<template>
  <v-expansion-panels v-model="open" class="accordion" flat>
    <v-expansion-panel v-for="(item, i) in items" :key="i" :value="i" eager>
      <v-expansion-panel-title class="accordion__title">{{ item.title }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <!-- A plain element: v-html on a component is dropped when prerendering -->
        <div class="prose is-wide" v-html="item.body" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style>
@layer site {
  .accordion .v-expansion-panel {
    background: transparent;
    color: inherit;
    border-bottom: 1px solid currentColor;
    border-radius: 0 !important;
  }
  .accordion .v-expansion-panel:first-child {
    border-top: 1px solid currentColor;
  }
  .accordion .v-expansion-panel::after {
    display: none;
  }
  .accordion__title {
    padding-inline: 0;
    font-size: var(--fs-h4);
    font-weight: 600;
  }
  .accordion .v-expansion-panel-text__wrapper {
    padding: 0 0 1.25rem;
  }
}
</style>
