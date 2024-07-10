import qwik from "@qwikdev/astro";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  integrations: [
    qwik(),
    compress({
      // JavaScript: false,
      // html compression is causing the issue, uncommment to see resolution
      // HTML: false,
      HTML: {
        "html-minifier-terser": {
          // single setting that resolves the issue
          removeComments: false,
        },
      },
    }),
  ],
});
