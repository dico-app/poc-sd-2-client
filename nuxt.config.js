import fs from "fs";
import path from "path";
import JSONC from "comment-json";
import tailwindForm from "@tailwindcss/forms";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Typeful",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/tailwindcss",
      {
        viewer: false,
        jit: true,
        config: {
          plugins: [tailwindForm]
        }
      }
    ],
    function() {
      const dicoConfigPath = path.join(__dirname, "dico.config.jsonc");

      if (fs.existsSync(dicoConfigPath)) {
        const dicoConfig = JSONC.parse(
          fs.readFileSync(dicoConfigPath, { encoding: "utf8" })
        );

        console.log(dicoConfig);
      }
    }
  ]
};
