<script setup lang="ts">
/**
 * An image at its natural proportions, with an optional caption (slot).
 * Uses the responsive variants from `npm run images` and reserves its space while loading.
 */
import { computed } from "vue";
import { imageInfo } from "@/lib/images.ts";
import { isInternal } from "@/lib/links.ts";

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    /** Largest width the image is shown at, in px */
    maxWidth?: number
    /** Crop to this shape: height as a percentage of width (e.g. 75 for 4:3) */
    aspect?: number
    /** Crop to a circle */
    circle?: boolean
    /** Square corners (for images with their own shape, e.g. phone mockups) */
    square?: boolean
    /** Soft shadow, for screenshots on a plain background */
    shadow?: boolean
    /** Optional link */
    to?: string
    /** Load immediately (use for images visible on page load) */
    eager?: boolean
    sizes?: string
  }>(),
  { alt: "", sizes: "(max-width: 959px) 100vw, 50vw" },
);

const info = computed(() => imageInfo(props.src));
const link = computed(() => {
  if (!props.to) return { is: "div", attrs: {} };
  return isInternal(props.to) ? { is: "RouterLink", attrs: { to: props.to } } : { is: "a", attrs: { href: props.to } };
});
</script>

<template>
  <figure class="figure" :class="{ 'is-circle': circle, 'is-square': square, 'has-shadow': shadow }">
    <component
      :is="link.is"
      v-bind="link.attrs"
      class="figure__frame"
      :class="{ 'is-cropped': aspect || circle }"
      :style="{ maxWidth: maxWidth ? `${maxWidth}px` : undefined, aspectRatio: circle ? '1' : aspect ? `100 / ${aspect}` : undefined }"
    >
      <img
        :src="src"
        :srcset="info.srcset"
        :sizes="sizes"
        :width="info.width"
        :height="info.height"
        :alt="alt"
        :loading="eager ? 'eager' : 'lazy'"
        :fetchpriority="eager ? 'high' : undefined"
        decoding="async"
      />
    </component>
    <figcaption v-if="$slots.default" class="figure__caption prose">
      <slot />
    </figcaption>
  </figure>
</template>

<style>
@layer site {
  .figure {
    margin: 0;
  }
  .figure__frame {
    display: block;
    overflow: hidden;
    margin-inline: auto;
    border-radius: var(--radius);
  }
  .figure.is-square .figure__frame {
    border-radius: 0;
  }
  .figure.is-circle .figure__frame {
    border-radius: 50%;
  }
  .figure.has-shadow .figure__frame {
    box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 12px 32px -8px rgb(0 0 0 / 0.18);
  }
  .figure__frame img {
    display: block;
    width: 100%;
    height: auto;
  }
  .figure__frame.is-cropped img {
    height: 100%;
    object-fit: cover;
  }
  a.figure__frame {
    transition: transform 0.2s ease;
  }
  a.figure__frame:hover {
    transform: translateY(-2px);
  }
  .figure__caption {
    margin: 0.85rem auto 0;
    font-size: var(--fs-small);
    opacity: 0.8;
    text-align: center;
  }
}
</style>
