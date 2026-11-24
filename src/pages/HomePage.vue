<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";
import { linkedProjects } from "@/data/projects.ts";

usePageMeta({
  title: "Tom Allen",
  description: "Tom Allen is a Senior Product Designer from Bristol, UK, who specialises in big, complex and strategic problems.",
});

const featured = linkedProjects.slice(0, 3);
</script>

<template>
  <Section class="home-hero">
    <v-row align="center">
      <v-col cols="12" md="7" order="2" order-md="1" class="pe-md-12">
        <p class="eyebrow">Hi, I’m Tom 👋</p>
        <h1 class="display">I’m a <strong>Senior Product Designer</strong> <span
          class="home-hero__title-sub"> specialising in
          <strong>big, complex and strategic</strong> problems.</span></h1>
        <p class="lead home-hero__sub">I’m just as comfortable leading ideation sessions or
          presenting to stakeholders as I am wireframing.</p>
        <div class="home-hero__actions">
          <CtaButton to="/mywork">View my work</CtaButton>
          <CtaButton to="/about" variant="outlined" :arrow="false">About me</CtaButton>
        </div>
        <div class="home-hero__proof">
          <p class="eyebrow">I’ve built my career at major household brands</p>
          <div class="home-hero__logos">
            <Figure src="/images/home/logos/confused-com.webp" alt="Confused.com" :max-width="64" />
            <Figure src="/images/home/logos/just-eat.webp" alt="Just Eat" :max-width="64" />
            <div class="home-hero__logo-card">
              <Figure src="/images/home/logos/uswitch.webp" alt="Uswitch" :max-width="44" />
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5" order="1" order-md="2">
        <div class="home-hero__portrait">
          <Figure src="/images/home/ta-headshot-2-copy.webp" alt="Tom Allen" eager sizes="(max-width: 959px) 80vw, 460px" />
        </div>
      </v-col>
    </v-row>
  </Section>

  <Section tone="accent" narrow class="home-statement">
    <p class="eyebrow">How I work</p>
    <p class="home-statement__text">Good interfaces are the easy part. The hard part is untangling
      the strategic problem underneath, aligning a room of stakeholders on the right one, and
      backing that decision with research instead of opinion.</p>
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
  .section.home-hero {
    padding-block: calc(var(--section-y) * 1.2);
  }
  .home-hero .display strong {
    font-weight: 700;
    background: linear-gradient(transparent 68%, rgb(251 175 23 / 0.55) 68%);
  }
  .home-hero__title-sub {
    display: block;
    margin-top: 0.35em;
    font-size: var(--fs-h3);
    font-weight: 600;
  }
  .home-hero__sub {
    max-width: 34em;
    margin: 1.75rem 0 2.5rem;
    color: var(--ink-soft);
  }
  .home-hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .home-hero__proof {
    margin-top: 3.5rem;
  }
  .home-hero__proof .eyebrow {
    margin-bottom: 1.25rem;
  }
  .home-hero__logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }
  .home-hero__logos .figure {
    width: 64px;
    opacity: 0.85;
  }
  .home-hero__logo-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: calc(var(--radius) * 0.5);
    background: var(--mist);
  }
  .home-hero__logo-card .figure {
    width: auto;
    opacity: 1;
  }
  .home-statement__text {
    margin: 0;
    font-size: var(--fs-h2);
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.015em;
    color: var(--heading);
    text-wrap: balance;
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
