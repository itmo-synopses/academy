import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
import { navigation } from "./navigation";

export default defineConfig({
  title: "IS / Academy",
  description: "Yet Another Archive",
  base: "/academy/",
  themeConfig: {
    editLink: {
      pattern: "https://github.com/itmo-synopses/academy/edit/main/docs/:path",
      text: "Редактировать на GitHub",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/itmo-synopses/academy",
      },
    ],
    sidebar,
    nav: navigation,
    footer: {
      message: "Студенты ИСа",
      copyright: "© Университет ИТМО",
    },
  },
  cleanUrls: true,
});
