// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import remarkProductLinks from "./plugins/remark-product-links.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://help.asphaltanchors.com",
  integrations: [
    starlight({
      title: "Asphalt Anchors",
      disable404Route: true,
      logo: {
        src: "./src/assets/logo-horizontal.png",
        alt: "Asphalt Anchors",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        SocialIcons: "./src/components/StoreLinks.astro",
      },
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
      // Groups are listed explicitly so pages can be ordered by workflow
      // without moving files and changing their URLs.
      sidebar: [
        {
          label: "Installation",
          items: [
            "installation/anchor-install",
            "installation/hole-alignment",
            "installation/hole-cleaning",
            "installation/bad-weather",
            "installation/edge",
            "installation/asphalt-thickness",
            "installation/protecting-anchor-threads",
          ],
        },
        {
          label: "Planning & Tools",
          items: [
            "installation/installation-time",
            "installation/hammer-drill-size-installation-time",
            "product-info/local-accessory-alternatives",
          ],
        },
        {
          label: "Applications",
          items: ["installation/speed-bumps"],
        },
        {
          label: "Products",
          items: [
            "product-info/adhesive-options",
            "installation/faq-required-adhesive",
            "product-info/shelf-life",
            "product-info/zinc-vs-stainless",
          ],
        },
        {
          label: "Strength & Testing",
          items: [
            "testing/anchor-strength-testing",
            "testing/high-pavement-temperature",
            "testing/pull-test-methodology",
          ],
        },
        {
          label: "Orders",
          items: [{ autogenerate: { directory: "orders" } }],
        },
      ],
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkProductLinks],
    }),
  },
});
