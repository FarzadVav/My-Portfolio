export type ResponseApiT = {
  message: string
  data: any
}

type SharedFieldsT = {
  id: string
  createdAt: string
  updatedAt: string
}

export type UsersT = SharedFieldsT & {
  fullName: string
  email: string
  ban: boolean
  token: string
}

export type MessagesT = SharedFieldsT & {
  userId: string
  receiverId: string
  text: string
  file: string
}

export type GeneralInfoT = SharedFieldsT & {
  aboutMe: string
  phone: string
  email: string
  profile: string
  cv: string
}

export type PagesT = SharedFieldsT & {
  href: string
  name: string
  picture: string
  title: string
  description: string
  sections: { name: string, href: string }[]
  active: boolean
}

export type ArticlesCategoriesT = SharedFieldsT & {}

export type ArticlesTagsT = SharedFieldsT & {
  name: string
}

export type ArticlesT = SharedFieldsT & {}

export type ArticlesCommentsT = SharedFieldsT & {}

export type SkillsCategoriesT = SharedFieldsT & {
  name: string
  skills: SkillsT[]
}

export type SkillsT = SharedFieldsT & {
  name: string
  hex: string
  score: number
}

export type ProjectsT = SharedFieldsT & {
  name: string
  link: string
  github: string
  logo: string
  description: string
  features: string[]
  skills: SkillsT[]
}

export type AttributesT = SharedFieldsT & {
  name: string
  svg: string
}

export type SocialsT = SharedFieldsT & {
  name: string
  link: string
  logo: string
  descriptions: string[]
  quickAccessLinks: { name: string, link: string }[]
}

export type FaqsT = SharedFieldsT & {
  title: string
  text: string
}