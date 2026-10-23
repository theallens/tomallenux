<script setup lang="ts">
import { mdiOpenInNew } from "@mdi/js";
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "CV",
  description: "The CV of Tom Allen, Senior Product Designer.",
});
</script>

<template>
  <Section tone="muted">
    <v-row>
      <v-col cols="12" md="4" class="cv__aside">
        <div class="cv__sticky">
          <Figure src="/images/pagecv/ta-headshot-2.webp" alt="Tom Allen" circle class="cv__portrait" sizes="240px" />
          <p class="eyebrow mt-6">Curriculum vitae</p>
          <h1 class="cv__name">Tom Allen</h1>
          <p class="lead">Senior Product Designer, Bristol UK</p>
          <div class="d-flex flex-wrap ga-3 mt-6">
            <v-btn href="/images/pagecv/tallen-cv-1.webp" target="_blank" rel="noopener" color="primary" :append-icon="mdiOpenInNew">
              Open full size
            </v-btn>
            <CtaButton to="/contact" variant="outlined" :arrow="false">Get in touch</CtaButton>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="cv__sheet">
          <Figure src="/images/pagecv/tallen-cv-1.webp" alt="Tom Allen’s CV" square eager sizes="(max-width: 959px) 100vw, 800px" />
        </v-card>
      </v-col>
    </v-row>
  </Section>
</template>

<style>
@layer site {
  .cv__portrait {
    max-width: 180px;
  }
  .cv__name {
    margin: 0;
    font-size: var(--fs-h1);
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  .cv__aside .lead {
    margin: 0.25rem 0 0;
    color: var(--ink-soft);
  }
  .cv__sheet.v-card {
    padding: clamp(0.5rem, 0.2rem + 1vw, 1.25rem);
    box-shadow: 0 18px 40px -24px rgb(0 0 0 / 0.3);
  }
  @media (min-width: 960px) {
    .cv__sticky {
      position: sticky;
      top: calc(var(--header-h) + 2rem);
    }
  }
}
</style>
