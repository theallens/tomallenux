<script setup lang="ts">
/** A user quote. Put the quote and attribution paragraphs in the slot as plain HTML. */
</script>

<template>
  <v-card tag="blockquote" class="quote-card">
    <Prose wide>
      <slot />
    </Prose>
  </v-card>
</template>

<style>
@layer site {
  .quote-card.v-card {
    position: relative;
    margin: 0;
    padding: 2.25rem 1.75rem 1.5rem;
    border-left: 4px solid var(--amber);
    background: var(--mist);
    color: inherit;
  }
  /* Alone in a grid column, match the height of its neighbours */
  .v-col > .quote-card.v-card:only-child {
    height: 100%;
  }
  .section--muted .quote-card.v-card {
    background: var(--white);
  }
  .section--inverse .quote-card.v-card,
  .section--accent .quote-card.v-card {
    background: #1f1f22;
  }
  .quote-card::before {
    content: "“";
    position: absolute;
    top: 0.35rem;
    left: 1.6rem;
    color: var(--amber);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1;
  }
}
</style>
