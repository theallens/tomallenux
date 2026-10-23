<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";
import { linkedProjects } from "@/data/projects.ts";

usePageMeta({
  title: "Tom Allen",
  description: "Tom Allen is a Senior Product Designer from Bristol, UK, with experience in UX, UI and content design.",
});

const featured = linkedProjects.slice(0, 3);
</script>

<template>
  <Section class="home-hero">
    <v-row align="center">
      <v-col cols="12" md="7" order="2" order-md="1" class="pe-md-12">
        <p class="eyebrow">Hi, I’m Tom 👋</p>
        <h1 class="display">I’m a <strong>Senior</strong> <strong>Product Designer</strong> from Bristol, UK.</h1>
        <p class="lead home-hero__sub">I’m a user focused designer with experience in <strong>UX, UI </strong>and <strong>content design</strong>.</p>
        <div class="home-hero__actions">
          <CtaButton to="/mywork">View my work</CtaButton>
          <CtaButton to="/about" variant="outlined" :arrow="false">About me</CtaButton>
        </div>
      </v-col>
      <v-col cols="12" md="5" order="1" order-md="2">
        <div class="home-hero__portrait">
          <Figure src="/images/home/ta-headshot-2-copy.webp" alt="Tom Allen" eager sizes="(max-width: 959px) 80vw, 460px" />
        </div>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <div class="d-flex flex-wrap align-end justify-space-between ga-4">
      <div>
        <p class="eyebrow">Selected work</p>
        <h2 class="home-section-title">Case studies</h2>
      </div>
      <CtaButton to="/mywork" variant="text">See all work</CtaButton>
    </div>
    <v-row>
      <v-col v-for="project in featured" :key="project.slug" cols="12" md="4">
        <ProjectCard :project="project" :heading-level="3" />
      </v-col>
    </v-row>
  </Section>
</template>

<style>
@layer site {
  .home-hero .display strong {
    font-weight: 700;
    background: linear-gradient(transparent 68%, rgb(251 175 23 / 0.55) 68%);
  }
  .home-hero__sub {
    max-width: 34em;
    margin: 1.5rem 0 2rem;
    color: var(--ink-soft);
  }
  .home-hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .home-hero__portrait {
    position: relative;
    max-width: 460px;
    margin-inline: auto;
  }
  .home-hero__portrait::before {
    content: '';
    position: absolute;
    inset: 8% -6% -6% 8%;
    border-radius: calc(var(--radius) * 1.5);
    background: var(--amber);
  }
  .home-hero__portrait .figure {
    position: relative;
  }
  .home-hero__portrait .figure__frame {
    border-radius: calc(var(--radius) * 1.5);
  }
  .home-section-title {
    margin: 0;
    font-size: var(--fs-h2);
    font-weight: 600;
    letter-spacing: -0.018em;
  }
}
</style>
