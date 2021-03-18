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
        if (this.options.dev) {
          this.options.watch.push(dicoConfigPath);
        }

        const dicoConfig = JSONC.parse(
          fs.readFileSync(dicoConfigPath, { encoding: "utf8" })
        );

        const parseDicoConfig = config => {
          const result = {};
          for (const key in config) {
            if (Object.hasOwnProperty.call(config, key)) {
              const element = config[key];

              if (typeof element === "string") {
                if (element === "string") {
                  result[key] = `dico.${key}`;
                }
              } else {
                result[key] = parseDicoConfig(element);
              }
            }
          }
          return result;
        };

        const dicoParsed = parseDicoConfig(dicoConfig);

        this.addPlugin({
          src: path.resolve(__dirname, "plugin.js"),
          fileName: "dico.js",
          options: { dicoParsed }
        });
      }
    }
  ]
};
