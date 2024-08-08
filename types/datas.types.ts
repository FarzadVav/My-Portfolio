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
  profile: string | null
  cv: string | null
}

export type PagesT = SharedFieldsT & {
  href: string
  name: string
  picture: string | null
  title: string
  description: string
  sections: { name: string, href: string }[]
  active: boolean
}

export type ArticlesT = SharedFieldsT & {
  name: string
  content: string
  picture: string
  like: number
  dislike: number
  view: number
  score: number
  draft: boolean
  links: { name: string, href: string }[]
  category: ArticlesCategoriesT
  tags: ArticlesTagsT[]
  comments: ArticlesCommentsT[]
}

export type ArticlesCategoriesT = SharedFieldsT & {
  name: string
  logo: string
  articles: ArticlesT[]
  tags: ArticlesTagsT[]
}

export type ArticlesTagsT = SharedFieldsT & {
  name: string
  articles: ArticlesT[]
  category: ArticlesCategoriesT
}

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
  link: string | null
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
  logo: string | null
  descriptions: string[]
  quickAccessLinks: { name: string, link: string }[]
}

export type FaqsT = SharedFieldsT & {
  title: string
  text: string
}