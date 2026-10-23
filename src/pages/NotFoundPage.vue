<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({ title: "Page not found" });
</script>

<template>
  <Section narrow class="not-found">
    <p class="eyebrow">404</p>
    <Prose>
      <h2>Page not found</h2>
      <p class="text-large">Sorry, we couldn’t find the page you were looking for.</p>
    </Prose>
    <div class="d-flex flex-wrap ga-3">
      <CtaButton to="/">Back to home</CtaButton>
      <CtaButton to="/mywork" variant="outlined" :arrow="false">See my work</CtaButton>
    </div>
  </Section>
</template>

<style>
@layer site {
  .not-found {
    min-height: 60vh;
  }
}
</style>
