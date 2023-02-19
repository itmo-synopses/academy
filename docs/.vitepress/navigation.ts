import {DefaultTheme} from "vitepress";

export const navigation: DefaultTheme.NavItem[] = [
  {
    text: "Все дисциплины",
    activeMatch: "^/disciplines/",
    items: [
      {
        text: "Архитектура инф. систем",
        link: "/disciplines/ais/"
      },
      {
        text: "Базы данных",
        link: "/disciplines/db/"
      }
    ]
  },
  {
    text: "О проекте",
    link: "/about"
  },
  {
    text: "Гайды",
    link: "/guides/"
  }
]
