// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkProductLinks from "./plugins/remark-product-links.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Asphalt Anchors",
      logo: {
        src: "./src/assets/logo-horizontal.png",
        alt: "Asphalt Anchors",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      favicon: "/favicon.png",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;600;700&display=swap",
          },
        },
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-W9LD0RR16F",
          },
        },
        {
          tag: "script",
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
          label: "Product Info",
          autogenerate: { directory: "product-info" },
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
