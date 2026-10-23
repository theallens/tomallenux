<script setup lang="ts">
/**
 * A project on the My work / Home pages. The whole card links to the case study;
 * "coming soon" projects show a chip instead. `featured` lays it out side by side on wide screens.
 */
import { computed } from "vue";
import { mdiArrowRight } from "@mdi/js";
import type { Project } from "@/data/projects.ts";

const props = defineProps<{ project: Project; featured?: boolean; eager?: boolean; headingLevel?: 2 | 3 }>();
const linked = computed(() => !!props.project.slug && !props.project.comingSoon);
</script>

<template>
  <v-card
    :to="linked ? `/${project.slug}` : undefined"
    class="project-card"
    :class="{ 'is-featured': featured, 'is-linked': linked }"
    :ripple="false"
  >
    <div class="project-card__media">
      <Figure
        :src="project.image"
        square
        :eager="eager"
        :sizes="featured ? '(max-width: 959px) 100vw, 640px' : '(max-width: 959px) 100vw, 560px'"
      />
    </div>
    <div class="project-card__body">
      <v-chip v-if="project.comingSoon" size="small" color="secondary" variant="flat" class="mb-3">Coming soon</v-chip>
      <component :is="`h${headingLevel ?? 2}`" class="project-card__title" v-html="project.title" />
      <p class="project-card__summary" v-html="project.summary" />
      <span v-if="linked" class="project-card__cta">
        {{ project.buttonLabel ?? 'View project' }}
        <v-icon :icon="mdiArrowRight" size="20" />
      </span>
    </div>
  </v-card>
</template>

<style>
@layer site {
  .project-card.v-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    border: 1px solid rgb(0 0 0 / 0.08);
    background: var(--white);
    color: var(--black);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .project-card.is-linked:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px -16px rgb(0 0 0 / 0.25);
  }
  .project-card .v-card__overlay {
    display: none;
  }
  .project-card__media {
    position: relative;
    aspect-ratio: 16 / 10;
    background: var(--mist);
  }
  /* Thumbnails come in many shapes; fit each inside the same box so cards line up */
  .project-card__media .figure {
    position: absolute;
    inset: clamp(1rem, 0.5rem + 2vw, 2rem);
  }
  .project-card__media .figure__frame {
    height: 100%;
  }
  .project-card__media img {
    height: 100%;
    object-fit: contain;
  }
  .project-card__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    padding: clamp(1.25rem, 1rem + 1vw, 2rem);
  }
  .project-card__title {
    margin: 0 0 0.6rem;
    font-size: var(--fs-h3);
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.01em;
    text-wrap: balance;
  }
  .project-card__title strong {
    font-weight: 700;
  }
  .project-card__summary {
    margin: 0 0 1.5rem;
    color: var(--ink-soft);
  }
  .project-card__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: auto;
    font-weight: 600;
    border-bottom: 2px solid var(--amber);
  }
  .project-card.is-linked:hover .project-card__cta .v-icon {
    transform: translateX(3px);
  }
  .project-card__cta .v-icon {
    transition: transform 0.2s ease;
  }

  @media (min-width: 960px) {
    .project-card.is-featured {
      flex-direction: row;
    }
    .project-card.is-featured .project-card__media {
      flex: 0 0 55%;
      aspect-ratio: auto;
      min-height: 380px;
    }
    .project-card.is-featured .project-card__body {
      justify-content: center;
      padding: 3rem;
    }
    .project-card.is-featured .project-card__title {
      font-size: var(--fs-h2);
    }
  }
}
</style>
