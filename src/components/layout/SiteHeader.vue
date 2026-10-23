<script setup lang="ts">
/**
 * Site header: hides when scrolling down, returns when scrolling up.
 * Below 960px the links move into a drawer opened from the menu button.
 */
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { mdiClose, mdiMenu } from "@mdi/js";
import { navigation } from "@/data/site.ts";
import { imageInfo } from "@/lib/images.ts";

const route = useRoute();
const drawer = ref(false);
const logo = imageInfo("/images/shared/logo-second-try.webp");

function isActive(to: string) {
  return route.path === to || route.path.startsWith(`${to}/`);
}

watch(() => route.fullPath, () => (drawer.value = false));
</script>

<template>
  <v-app-bar flat scroll-behavior="hide" :height="88" class="site-header">
    <div class="site-header__inner">
      <RouterLink to="/" class="site-header__logo" aria-label="Tom Allen, home">
        <img
          src="/images/shared/logo-second-try.webp"
          :srcset="logo.srcset"
          sizes="56px"
          :width="logo.width"
          :height="logo.height"
          alt=""
        />
      </RouterLink>

      <nav class="site-header__nav d-none d-md-flex" aria-label="Main">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="site-header__link"
          :class="{ 'is-active': isActive(item.to) }"
          :aria-current="isActive(item.to) ? 'page' : undefined"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <v-btn
        class="d-md-none"
        :icon="drawer ? mdiClose : mdiMenu"
        variant="text"
        size="default"
        :aria-label="drawer ? 'Close menu' : 'Open menu'"
        :aria-expanded="drawer"
        aria-controls="site-drawer"
        @click="drawer = !drawer"
      />
    </div>
  </v-app-bar>

  <v-navigation-drawer id="site-drawer" v-model="drawer" temporary location="right" width="300" class="site-drawer">
    <nav aria-label="Main">
      <v-list nav class="pt-6">
        <v-list-item
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          :title="item.label"
          :active="isActive(item.to)"
          rounded="lg"
          class="site-drawer__link"
        />
      </v-list>
    </nav>
  </v-navigation-drawer>
</template>

<style>
@layer site {
  .site-header.v-app-bar {
    border-bottom: 3px solid var(--amber);
    background: rgb(255 255 255 / 0.92);
    backdrop-filter: saturate(1.4) blur(10px);
  }
  .site-header .v-toolbar__content {
    height: var(--header-h) !important;
  }
  .site-header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: calc(1200px + 2 * var(--gutter));
    margin-inline: auto;
    padding-inline: var(--gutter);
  }
  .site-header__logo {
    display: block;
    line-height: 0;
  }
  .site-header__logo img {
    width: auto;
    height: 40px;
  }
  .site-header__nav {
    gap: 2.25rem;
  }
  .site-header__link {
    position: relative;
    padding: 0.35rem 0;
    color: var(--black);
    font-weight: 500;
    text-decoration: none;
  }
  .site-header__link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
  }
  .site-header__link:hover::after,
  .site-header__link.is-active::after {
    transform: scaleX(1);
  }
  .site-drawer__link .v-list-item-title {
    font-size: 1.375rem;
    font-weight: 500;
  }
  @media (min-width: 960px) {
    .site-header__logo img {
      height: 56px;
    }
  }
}
</style>
