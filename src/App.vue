<script setup lang="ts">
import SiteHeader from "./components/layout/SiteHeader.vue";
import SiteFooter from "./components/layout/SiteFooter.vue";
</script>

<template>
  <v-app>
    <a class="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <v-main id="main" tabindex="-1">
      <RouterView />
    </v-main>
    <SiteFooter />
  </v-app>
</template>
