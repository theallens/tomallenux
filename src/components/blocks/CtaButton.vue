<script setup lang="ts">
/**
 * A call-to-action link styled as a button. Primary is black on light sections
 * and amber on dark ones (the Vuetify theme handles this).
 */
import { computed } from "vue";
import { mdiArrowRight } from "@mdi/js";
import { isInternal } from "@/lib/links.ts";

const props = withDefaults(
  defineProps<{ to: string; newWindow?: boolean; variant?: "flat" | "outlined" | "text"; arrow?: boolean }>(),
  { variant: "flat", arrow: true },
);

const link = computed(() =>
  isInternal(props.to) && !props.newWindow
    ? { to: props.to }
    : { href: props.to, target: props.newWindow ? "_blank" : undefined, rel: props.newWindow ? "noopener" : undefined },
);
</script>

<template>
  <v-btn v-bind="link" :active="false" color="primary" :variant="variant" :append-icon="arrow ? mdiArrowRight : undefined" class="cta">
    <slot />
  </v-btn>
</template>

<style>
@layer site {
  .cta.v-btn {
    letter-spacing: 0.005em;
  }
  .cta .v-btn__append {
    transition: transform 0.2s ease;
  }
  .cta:hover .v-btn__append {
    transform: translateX(3px);
  }
}
</style>
