// Типы и интерфейсы — то, что разбирали на уроке 13

// Псевдоним типа с объединением (union) — допустимы только эти четыре значения
export type SkillLevel = "базовый" | "уверенный" | "продвинутый" | "эксперт"

// Кортеж: период работы или учёбы, два года
export type Period = [number, number | "наст."]

// Интерфейс: readonly нельзя менять после создания, bio? — необязательное поле
export interface UserProfile {
  readonly id: number
  name: string
  role: string
  city: string
  phone: string
  email: string
  github: string
  bio?: string
}

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillGroup {
  title: string
  items: Skill[]
}

export interface Job {
  role: string
  company: string
  period: Period
  points: string[]
}

// Наследование интерфейса: у студента то же, что у работы, плюс диплом
export interface Study {
  place: string
  speciality: string
  period: Period
}

export interface Language {
  name: string
  level: string
}
