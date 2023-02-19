---
layout: home
title: Главная

hero:
  name: ITMO.SYNOPSES / Academy
  text: Yet Another Archive
  tagline: Сборник теоретических материалов университета ИТМО
  image:
    src: /logo.png
  actions:
    - theme: brand
      text: Приступить к изучению
      link: /introduction
    - theme: alt
      text: Мы на GitHub
      link: https://github.com/itmo-synopses

features:
  - icon: ✨
    title: Уникальный проект
    details: Подобная база знаний - уникальное явление среди всех университетов
  - icon: 📚
    title: Подробный конспект
    details: Каждый материал имеет подробное описание и примеры
  - icon: 🤝
    title: Одобрено сообществом
    details: Этот конспект пишется и редактируется студентами, которые используют этот проект при подготовке к экзаменам
  - icon: 📝
    title: Интересный материал
    details: В целом, это просто интересно!
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/36822207?v=4',
    name: 'Александр Мирошниченко',
    title: 'Техническая поддержка',
    links: [
      { icon: 'github', link: 'https://github.com/sashafromlibertalia' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/82240296?v=4',
    name: 'Михаил Либченко',
    title: 'Написал парсер лекций + придумал идею этого хранилища',
    links: [
      { icon: 'github', link: 'https://github.com/lipa44' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/50848091?v=4',
    name: 'Сергей Папикян',
    title: 'Хранитель материала',
    links: [
      { icon: 'github', link: 'https://github.com/I-SER-I' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60395869?v=4',
    name: 'Искандер Кудашев',
    title: 'Написал все лекции',
    links: [
      { icon: 'github', link: 'https://github.com/iskander-faggod' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #lead>
      Авторы проекта
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
