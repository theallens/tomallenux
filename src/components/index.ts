import type { App } from "vue";

import Section from "./layout/Section.vue";
import Prose from "./blocks/Prose.vue";
import Figure from "./blocks/Figure.vue";
import CaseHero from "./blocks/CaseHero.vue";
import ProjectFacts from "./blocks/ProjectFacts.vue";
import QuoteCard from "./blocks/QuoteCard.vue";
import Panel from "./blocks/Panel.vue";
import Accordion from "./blocks/Accordion.vue";
import CtaButton from "./blocks/CtaButton.vue";
import ShareMeter from "./blocks/ShareMeter.vue";
import GalleryMasonry from "./blocks/GalleryMasonry.vue";
import ContactForm from "./blocks/ContactForm.vue";
import ProjectCard from "./ProjectCard.vue";
import NextProject from "./NextProject.vue";

/**
 * Building blocks available in every page template without importing them.
 * Vuetify components (v-row, v-col, v-divider, …) are available too.
 */
export const pageComponents = {
  Section,
  Prose,
  Figure,
  CaseHero,
  ProjectFacts,
  QuoteCard,
  Panel,
  Accordion,
  CtaButton,
  ShareMeter,
  GalleryMasonry,
  ContactForm,
  ProjectCard,
  NextProject,
};

export function registerComponents(app: App) {
  for (const [name, component] of Object.entries(pageComponents)) app.component(name, component);
}

type PageComponents = typeof pageComponents

declare module "vue" {
  export interface GlobalComponents extends PageComponents {}
}
