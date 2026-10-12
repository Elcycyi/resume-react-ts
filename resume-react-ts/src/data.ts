import type { Job, Language, SkillGroup, Study, UserProfile } from "./types"

export const profile: UserProfile = {
  id: 1,
  name: "Жунусов Аазам",
  role: "Backend-разработчик — Java, Python",
  city: "Бишкек, Кыргызстан",
  phone: "+996 700 112233",
  email: "bmfakk5@gmail.com",
  github: "github.com/Elcycyi",
  bio:
    "Студент КГИПИ, направление АИН. Пишу бэкенд на Java и Python, работаю " +
    "с базами данных и сетевой инфраструктурой. Делал торговых ботов " +
    "с реальными замерами задержек и автоматизацию под нагрузкой.",
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Языки",
    items: [
      { name: "Java", level: "уверенный" },
      { name: "Python", level: "продвинутый" },
      { name: "TypeScript", level: "базовый" },
      { name: "SQL", level: "уверенный" },
    ],
  },
  {
    title: "Фронтенд",
    items: [
      { name: "React", level: "базовый" },
      { name: "HTML5", level: "уверенный" },
      { name: "CSS3", level: "уверенный" },
      { name: "Bootstrap", level: "базовый" },
    ],
  },
  {
    title: "Бэкенд",
    items: [
      { name: "Node.js", level: "базовый" },
      { name: "Express", level: "базовый" },
      { name: "REST API", level: "уверенный" },
      { name: "asyncio", level: "уверенный" },
    ],
  },
  {
    title: "Базы данных",
    items: [
      { name: "PostgreSQL", level: "базовый" },
      { name: "SQLite", level: "уверенный" },
      { name: "MS Access", level: "уверенный" },
    ],
  },
  {
    title: "Инструменты",
    items: [
      { name: "Git", level: "уверенный" },
      { name: "Linux", level: "уверенный" },
      { name: "systemd", level: "базовый" },
      { name: "Cisco Packet Tracer", level: "продвинутый" },
    ],
  },
]

export const jobs: Job[] = [
  {
    role: "Разработчик торговых систем",
    company: "Собственные проекты",
    period: [2026, "наст."],
    points: [
      "Снайпер листингов Binance: детект анонса за 0,9 с, вход на биржах MEXC и Gate",
      "Замеры задержек: открытие позиции на Gate 12-14 мс, на MEXC около 140 мс",
      "Развёрнуто на VPS под systemd, сторож с автоперезапуском и алертами в Telegram",
    ],
  },
  {
    role: "Учебные проекты",
    company: "КГИПИ",
    period: [2025, 2026],
    points: [
      "База данных службы доставки в MS Access: 9 таблиц, 9 связей, 12 запросов",
      "Анимация проводки поездов на Java и Swing с доказанным оптимальным расписанием",
      "Девять лабораторных по сетям Cisco: STP, EtherChannel, HSRP, OSPF",
    ],
  },
]

export const studies: Study[] = [
  {
    place: "Кыргызский государственный институт переработки и инноваций",
    speciality: "Автоматизация и информатика, группа АИН-1-25",
    period: [2025, "наст."],
  },
]

export const languages: Language[] = [
  { name: "Русский", level: "родной" },
  { name: "Немецкий", level: "B1, готовлюсь к B2" },
  { name: "Английский", level: "технический" },
]
