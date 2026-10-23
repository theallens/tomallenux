<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Car insurance landing page",
  description: "A complete rewrite and redesign of the most visited SEO page on Confused.com.",
});
</script>

<template>
  <CaseHero
    eyebrow="Content design project"
    title="Car insurance landing page rewrite and redesign"
    image="/images/car-insurancelanding-page/2roup-13043.webp"
    image-square
  >
    <p class="text-large">A complete rewrite and redesign of the most visited SEO page on Confused.com.</p>
  </CaseHero>

  <Section tone="muted" narrow>
    <Prose>
      <h2>My role</h2>
      <p class="text-large">I worked as the sole content designer on the project. Collaborating closely with the SEO team and front-end developers to ensure the page hit our conversion goals and accessibility guidelines.</p>
    </Prose>
  </Section>

  <Section>
    <v-row>
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Project goals</h2>
          <ol>
            <li>
              <p class="text-large"><strong>Redesign the page and the content</strong>. Using our new design patterns and language styles.</p>
            </li>
            <li>
              <p class="text-large"><strong>Improve the lighthouse score</strong> of the page by focusing on accessibility, SEO &amp; the presentation of information.</p>
            </li>
            <li>
              <p class="text-large"><strong>Increase conversion</strong> and follow SEO best practices to optimise the page in the eyes of Google.</p>
            </li>
          </ol>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Prose>
          <h2>Key considerations</h2>
          <p class="text-large">The data showed 90% of users would not scroll further than 25% of the page. And 60% of users would click on the main CTA in the hero. </p>
          <p class="text-large">Users primarily value the time taken to get a quote &amp; the price the quote. These points should dictate the order of the content.</p>
          <p class="text-large">We should also prioritise trust and brand familiarity.</p>
        </Prose>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>The redesign</h2>
    </Prose>
    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column ga-4 align-start">
        <Prose>
          <h4>The old design</h4>
        </Prose>
        <Figure
          src="/images/car-insurancelanding-page/before-car-insurance-screencapture-confused-car-insurance-2021-06-23-17-44-30.webp"
          :aspect="80"
          shadow
          class="crop-top w-100"
        />
        <CtaButton to="">View full old page</CtaButton>
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column ga-4 align-start">
        <Prose>
          <h4>The redesign</h4>
        </Prose>
        <Figure
          src="/images/car-insurancelanding-page/before-car-insurance-screencapture-confused-car-insurance-2021-06-23-17-44-30.webp"
          :aspect="80"
          shadow
          class="crop-top w-100"
        />
        <CtaButton to="">View full redesign page</CtaButton>
      </v-col>
    </v-row>
  </Section>

  <Section narrow>
    <Prose>
      <h2>Key improvements</h2>
      <h4>Hero section</h4>
    </Prose>
  </Section>

  <Section tone="muted" narrow>
    <Prose>
      <h2>Impact</h2>
      <h4>Lighthouse score</h4>
      <p class="text-large">Moving the page into the new design style has resulted in the lighthouse score improving by 14% on mobile &amp; 25% on desktop. </p>
      <h3>SHOUT OUT TO THE OTHER TEAMS?!</h3>
    </Prose>
  </Section>

  <NextProject />
</template>

<style scoped>
/* Show the top of the very long page screenshots rather than their middle */
.crop-top :deep(img) {
  object-position: top;
}
</style>
