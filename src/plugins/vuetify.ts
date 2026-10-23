import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

/** Brand colours, carried over from the original site. */
export const brand = {
  black: "#000000",
  white: "#ffffff",
  amber: "#fbaf17",
  mist: "#f3f3f4",
  graphite: "#38383b",
};

/**
 * Vuetify for the site. A factory so the app (one per prerendered page) and
 * tests each get a fresh instance.
 */
export function createAppVuetify() {
  return createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "brand",
      themes: {
        brand: {
          dark: false,
          colors: {
            background: brand.white,
            surface: brand.white,
            "surface-variant": brand.mist,
            "on-surface-variant": brand.black,
            primary: brand.black,
            secondary: brand.amber,
            "on-secondary": brand.black,
            graphite: brand.graphite,
            "on-graphite": brand.white,
            error: "#b3261e",
            success: "#1e6b3a",
          },
        },
        /** For black sections: amber actions, white text. */
        brandInverse: {
          dark: true,
          colors: {
            background: brand.black,
            surface: "#141416",
            "surface-variant": "#1f1f22",
            "on-surface-variant": brand.white,
            primary: brand.amber,
            "on-primary": brand.black,
            secondary: brand.amber,
            "on-secondary": brand.black,
            graphite: brand.graphite,
            "on-graphite": brand.white,
            error: "#f2b8b5",
            success: "#8fd9a8",
          },
        },
      },
    },
    icons: { defaultSet: "mdi", aliases, sets: { mdi } },
    defaults: {
      VBtn: {
        rounded: "pill", variant: "flat", size: "large", class: "text-none font-weight-medium",
      },
      VCard: { rounded: "lg", variant: "flat" },
      VTextField: { variant: "outlined", density: "comfortable" },
      VTextarea: { variant: "outlined", density: "comfortable" },
      VExpansionPanels: { variant: "accordion" },
    },
  });
}
