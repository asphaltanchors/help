// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Asphalt Anchors",
      customCss: [
        './src/styles/custom.css',
      ],
      // social: [
      //   {
      //     icon: "github",
      //     label: "GitHub",
      //     href: "https://github.com/withastro/starlight",
      //   },
      // ],
      sidebar: [
        {
          label: "Installation",
          autogenerate: { directory: "installation" },
        },
        {
          label: "Orders",
          autogenerate: { directory: "orders" },
        },
        {
          label: "Testing",
          autogenerate: { directory: "testing" },
        },
      ],
    }),
  ],
});
