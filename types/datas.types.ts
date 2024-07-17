type SharedFieldsT = {
  id?: string
  createdAt?: string
  updatedAt?: string
}

export type UsersT = SharedFieldsT & {
  fullName: string
  email: string
}

export type MessagesT = SharedFieldsT & {
  userId: string
  receiverId: string
  text: string
  file: string
  seen: boolean
}

export type GeneralInfoT = SharedFieldsT & {
  aboutMe: string
  phone: string
  email: string
  profile: string
  cv: string
}

export type LinksT = SharedFieldsT & {
  name: string
  picture: string
  title: string
  description: string
  sections: { name: string, href: string }[]
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

export type ArticlesCategoriesT = SharedFieldsT & {
}

export type ArticlesTagsT = SharedFieldsT & {
  name: string
}

export type ArticlesCommentsT = SharedFieldsT & {
  text: string
}

export type ArticlesT = SharedFieldsT & {
}