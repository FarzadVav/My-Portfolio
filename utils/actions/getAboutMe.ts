"use server"

import { getGeneralInfo } from "../lib/fetchers"

const getAboutMe = async () => {
  const generalInfo = await getGeneralInfo()

  return { generalInfo }
}

export default getAboutMe