import { createApp } from "vue";
import { createVuetify } from "vuetify";

import { greenGoblin } from "./themes/green";

export default createVuetify({
  theme: {
    defaultTheme: "greenGoblin",
    themes: {
      greenGoblin,
    },
  },
});
