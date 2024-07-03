type SharedFieldsT = {
  id: string
  createdAt: string
  updatedAt: string
}

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
