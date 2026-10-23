<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";
import { projects } from "@/data/projects.ts";

usePageMeta({
  title: "Product design",
  description: "Product design case studies by Tom Allen, a Senior Product Designer from Bristol, UK.",
});

const [first, ...rest] = projects;
</script>

<template>
  <Section tone="muted">
    <p class="eyebrow">My work</p>
    <h1 class="display mywork__title"><strong>Product Design Case Studies</strong></h1>
    <ProjectCard :project="first" featured eager />
    <v-row>
      <v-col v-for="project in rest" :key="project.title" cols="12" md="6">
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </Section>
</template>

<style>
@layer site {
  .mywork__title {
    max-width: 14em;
  }
  .mywork__title strong {
    font-weight: 600;
  }
}
</style>
