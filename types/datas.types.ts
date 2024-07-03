type SharedFieldsT = {
  id: string
  createdAt: string
  updatedAt: string
}

export type GeneralInfoT = SharedFieldsT & {
  aboutMe: string
  phone: string
  email: string
  profile: string
  cv: string
}

export type SocialsT = SharedFieldsT & {
  id: string
  name: string
  link: string
  logo: string
  descriptions: string[]
  quickAccessLinks: { name: string, link: string }[]
}