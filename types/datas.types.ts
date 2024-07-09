type SharedFieldsT = {
  id: string
  createdAt: string
  updatedAt: string
}

export type UsersT = {
  fullName: string
  email: string
}
export type UsersApiT = SharedFieldsT & UsersT

export type MessagesT = {
  receiverId: string
  text: string
  file: string
  seen: boolean
}
export type MessagesApiT = SharedFieldsT & MessagesT

export type GeneralInfoT = {
  aboutMe: string
  phone: string
  email: string
  profile: string
  cv: string
}
export type GeneralInfoApiT = SharedFieldsT & GeneralInfoT

export type AttributesT = {
  name: string
  svg: string
}
export type AttributesApiT = SharedFieldsT & AttributesT

export type SocialsT = {
  name: string
  link: string
  logo: string
  descriptions: string[]
  quickAccessLinks: { name: string, link: string }[]
}
export type SocialsApiT = SharedFieldsT & SocialsT

export type SkillsT = {
  name: string
  hex: string
  score: number
}
export type SkillsApiT = SharedFieldsT & SkillsT

export type SkillsCategoriesT = {
  name: string
  skills: SkillsApiT[]
}
export type SkillsCategoriesApiT = SharedFieldsT & SkillsCategoriesT

export type ArticlesT = {
}
export type ArticlesApiT = SharedFieldsT & ArticlesT

export type ArticlesCategoriesT = {
}
export type ArticlesCategoriesApiT = SharedFieldsT & ArticlesCategoriesT

export type ArticlesTagsT = {
  name: string
}
export type ArticlesTagsApiT = SharedFieldsT & ArticlesTagsT

export type ArticlesCommentsT = {
  text: string
}
export type ArticlesCommentsApiT = SharedFieldsT & ArticlesCommentsT

export type ProjectsT = {
  name: string
  link: string
  github: string
  logo: string
  description: string
  features: string[]
  skills: SkillsApiT[]
}
export type ProjectsApiT = SharedFieldsT & ProjectsT