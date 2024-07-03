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
  integrations: [qwik(), compress()],
});