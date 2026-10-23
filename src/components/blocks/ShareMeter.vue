<script setup lang="ts">
/**
 * A headline share: the first item's percentage as a hero figure, a meter showing it
 * against the total, and a legend with every value. Use for "x of y said …" results.
 * (A meter rather than a pie: one ratio reads faster as a length than as an angle.)
 */
import { computed } from "vue";

const props = defineProps<{ data: { label: string; value: number }[]; caption?: string }>();

const total = computed(() => props.data.reduce((n, d) => n + d.value, 0));
const pct = (v: number) => Math.round((v / total.value) * 100);
const headline = computed(() => props.data[0]);
</script>

<template>
  <figure class="share-meter">
    <p class="share-meter__hero">
      <span class="share-meter__figure">{{ pct(headline.value) }}%</span>
      <span class="share-meter__label">{{ headline.label.toLowerCase() }}</span>
    </p>
    <div
      class="share-meter__track"
      role="img"
      :aria-label="data.map((d) => `${d.label}: ${d.value} (${pct(d.value)}%)`).join(', ')"
    >
      <div class="share-meter__fill" :style="{ width: `${pct(headline.value)}%` }" :title="`${headline.label}: ${headline.value} (${pct(headline.value)}%)`" />
    </div>
    <ul class="share-meter__legend">
      <li v-for="(d, i) in data" :key="d.label" :title="`${d.label}: ${d.value} (${pct(d.value)}%)`">
        <span class="share-meter__key" :class="{ 'is-rest': i > 0 }" aria-hidden="true" />
        {{ d.label }}
        <span class="share-meter__value">{{ d.value }} ({{ pct(d.value) }}%)</span>
      </li>
    </ul>
    <figcaption v-if="caption" class="share-meter__caption">{{ caption }}</figcaption>
  </figure>
</template>

<style>
@layer site {
  .share-meter {
    --fill: var(--amber);
    --track: #fde7b9;
    margin: 0;
    padding: clamp(1.25rem, 1rem + 1vw, 2rem);
    border-radius: var(--radius);
    background: var(--mist);
  }
  .section--muted .share-meter {
    background: var(--white);
  }
  .share-meter__hero {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    margin: 0 0 1rem;
  }
  .share-meter__figure {
    font-size: clamp(3rem, 2.4rem + 2.4vw, 4.5rem);
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.03em;
  }
  .share-meter__label {
    font-size: var(--fs-lead);
    font-weight: 500;
  }
  .share-meter__track {
    height: 14px;
    overflow: hidden;
    border-radius: 999px;
    background: var(--track);
  }
  .share-meter__fill {
    height: 100%;
    border-radius: 999px;
    background: var(--fill);
  }
  .share-meter__legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
    font-size: var(--fs-small);
  }
  .share-meter__legend li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .share-meter__key {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background: var(--fill);
  }
  .share-meter__key.is-rest {
    background: var(--track);
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.15);
  }
  .share-meter__value {
    color: var(--ink-soft);
    font-variant-numeric: tabular-nums;
  }
  .share-meter__caption {
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid rgb(0 0 0 / 0.1);
    font-size: var(--fs-small);
    font-style: italic;
    color: var(--ink-soft);
  }
}
</style>
