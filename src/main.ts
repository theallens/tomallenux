import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./routes.ts";
import { registerComponents } from "./components/index.ts";
import { createAppVuetify } from "./plugins/vuetify.ts";

import "./styles/tokens.css";
import "./styles/base.css";

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, saved) {
      if (saved) return saved;
      if (to.hash) return { el: to.hash };
      return { top: 0 };
    },
  },
  ({ app }) => {
    app.use(createAppVuetify());
    registerComponents(app);
  },
);
