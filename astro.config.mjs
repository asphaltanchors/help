// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkProductLinks from "./plugins/remark-product-links.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Asphalt Anchors",
      customCss: [
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-W9LD0RR16F',
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W9LD0RR16F');
          `,
        },
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
  markdown: {
    remarkPlugins: [remarkProductLinks],
  },
});
