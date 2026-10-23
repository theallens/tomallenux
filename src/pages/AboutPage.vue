<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "About",
  description: "A product designer from Bristol with a background in content design and UX writing.",
});
</script>

<template>
  <Section>
    <v-row align="center">
      <v-col cols="12" md="7" class="pe-md-12">
        <Prose>
          <p class="text-large eyebrow"><em>About</em></p>
          <h3 class="about__title"><em>Hi, I’m Tom</em></h3>
          <p class="text-large">A product designer from Bristol with a background in content design and UX writing.</p>
          <p class="text-large">In 2019, I made the decision to swap my career in digital marketing for a role in UX. After completing a year training in UX design I started as a content designer at Confused.com and my role quickly changed to product designer – and I haven’t looked back since. </p>
          <p class="text-large">I’m a process-driven designer that will advocate for the user and make data-led decisions. </p>
          <p class="text-large">But it’s not all work, I am also an amateur artist, photographer and footballer.</p>
        </Prose>
        <div class="mt-8">
          <CtaButton to="/pagecv">See my CV</CtaButton>
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <Figure src="/images/pagecv/ta-headshot-2.webp" alt="Tom Allen" sizes="(max-width: 959px) 100vw, 460px" eager />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <p class="eyebrow">Away from work</p>
    <GalleryMasonry
      :items="[
        { src: '/images/about/45e0a690-a20f-4817-906d-3d8584279d24.webp', caption: 'A shot from the President\'s cup final in 2019... don\'t ask about the result.' },
        { src: '/images/about/img-2120.webp', caption: 'Painting from 2019.' },
        { src: '/images/about/dsc-0279.webp', caption: 'Ankor Wat, Cambodia' },
        { src: '/images/about/dsc-1106.webp', caption: 'Phu Quoc, Vietnam' },
        { src: '/images/about/8a79d4c0-bd81-4b65-bac3-79f6fc27df74.webp' },
      ]"
    />
  </Section>
</template>

<style>
@layer site {
  .prose h3.about__title {
    margin-top: 0;
    font-size: var(--fs-h1);
    letter-spacing: -0.02em;
  }
  .prose .eyebrow em {
    font-style: normal;
  }
}
</style>
