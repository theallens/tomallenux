<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";
import RichContent from "@/components/RichContent/RichContent.vue";
import RichText from "@/components/RichText/RichText.vue";
import type { CaseStudy } from "@/types/cms.ts";

const props = defineProps<{ study: CaseStudy }>();

usePageMeta({
  title: props.study.seoTitle || props.study.title,
  description: props.study.seoDescription,
});
</script>

<template>
  <CaseHero
    :eyebrow="study.eyebrow"
    :title="study.title"
    :image="study.heroImage?.url ?? ''"
    :image-alt="study.heroImageAlt"
    :image-square="study.heroImageSquare"
  >
    <RichText v-if="study.heroIntro?.length" :value="study.heroIntro" />
  </CaseHero>

  <ProjectFacts v-if="study.facts?.length" :items="study.facts" />

  <Section v-for="section in study.sections" :key="section._key" :tone="section.tone" :narrow="section.narrow">
    <RichContent :content="section.body" />
  </Section>

  <NextProject />
</template>
