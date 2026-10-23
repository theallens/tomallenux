<script setup lang="ts">
import { navigation, site } from "@/data/site.ts";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <Section tone="inverse">
      <v-row align="center">
        <v-col cols="12" md="8">
          <h2 class="site-footer__title">Let’s work together! ✌️</h2>
          <p class="lead">I’d love to hear from you.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-md-end">
          <CtaButton to="/contact">Contact</CtaButton>
        </v-col>
      </v-row>
      <v-divider class="site-footer__rule" />
      <div class="site-footer__meta">
        <span>© {{ year }} {{ site.name }}</span>
        <nav aria-label="Footer">
          <RouterLink v-for="item in navigation" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </nav>
      </div>
    </Section>
  </footer>
</template>

<style>
@layer site {
  .site-footer__title {
    margin: 0 0 0.5rem;
    font-size: var(--fs-h2);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.018em;
  }
  .site-footer .lead {
    margin: 0;
    opacity: 0.85;
  }
  .site-footer__rule.v-divider {
    opacity: 0.25;
  }
  .site-footer__meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    font-size: var(--fs-small);
    opacity: 0.8;
  }
  .site-footer__meta nav {
    display: flex;
    gap: 1.5rem;
  }
  .site-footer__meta a {
    color: inherit;
    text-decoration: none;
  }
  .site-footer__meta a:hover {
    text-decoration: underline;
    text-decoration-color: var(--amber);
  }
}
</style>
