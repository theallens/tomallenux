<script setup lang="ts">
/** The "Project type / My role / Tools / Duration" strip under a case study's hero. */
defineProps<{ items: { label: string; value: string }[] }>();
</script>

<template>
  <Section tone="muted" tight>
    <v-row tag="dl" class="facts">
      <v-col v-for="item in items" :key="item.label" cols="12" sm="6" md class="facts__item">
        <dt class="facts__label">{{ item.label }}</dt>
        <dd class="facts__value">{{ item.value }}</dd>
      </v-col>
    </v-row>
  </Section>
</template>

<style>
@layer site {
  .facts {
    margin-block: 0;
  }
  .facts__item {
    border-top: 2px solid var(--amber);
    padding-top: 1rem;
  }
  .facts__label {
    margin-bottom: 0.4rem;
    font-size: var(--fs-small);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .facts__value {
    margin: 0;
    font-size: var(--fs-lead);
    line-height: 1.45;
  }
}
</style>
