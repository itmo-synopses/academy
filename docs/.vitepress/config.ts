import { defineConfig } from "vitepress";
import {sidebar} from "./sidebar";
import {navigation} from "./navigation";

export default defineConfig({
  title: 'IS / Academy',
  description: 'Yet Another Archive',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/itmo-synopses/academy/edit/main/docs/:path',
      text: 'Редактировать на GitHub',
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/itmo-synopses/academy"
      }
    ],
    sidebar,
    nav: navigation
  },
  cleanUrls: true,
});
