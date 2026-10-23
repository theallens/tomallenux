import { defineComponent, h, type Component } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import { createHead } from "@unhead/vue/client";
import { VApp } from "vuetify/components";
import { createAppVuetify } from "@/plugins/vuetify.ts";
import { registerComponents } from "@/components/index.ts";
import { routes } from "@/routes.ts";

/**
 * Mount a component the way the site renders it: real Vuetify (inside a v-app),
 * the real router and head, and the globally registered page blocks.
 */
export async function renderWithApp(component: Component, { props = {}, path = "/" } = {}) {
  const router = createRouter({ history: createMemoryHistory(), routes });
  await router.push(path);
  await router.isReady();

  const Host = defineComponent({ render: () => h(VApp, () => h(component, props)) });
  const wrapper = mount(Host, {
    attachTo: document.body,
    global: {
      plugins: [createAppVuetify(), router, createHead(), { install: registerComponents }],
    },
  });
  await flushPromises();
  return wrapper;
}
