import { ShareIcon } from "@heroicons/react/24/outline"

import { fetcher } from "@/utils/fetcher"
import { GeneralInfoT, SocialsT } from "@/types/datas.types"
import HeaderSearch from "./HeaderSearch"
import ThemeToggle from "../ThemeToggle"
import HeaderNav from "./HeaderNav"
import HeaderDrawer from "./HeaderDrawer"
import HeaderMobileSearch from "./HeaderMobileSearch"
import DropDown, { DropDownButton, DropDownMenu } from "../DropDown"

const Header = async () => {
  const { data: generalInfo } = await fetcher<GeneralInfoT>("/generalInfo", { baseUrl: true })
  const { data: socials } = await fetcher<SocialsT[]>("/socials", { baseUrl: true })

  return (
    <>
      <header className="bg-base-100 border-b border-light w-full sticky top-0 z-40">
        <div className="container row h-24">
          <HeaderNav />

          <HeaderDrawer generalInfo={generalInfo} socials={socials} />

          <HeaderSearch />

          <HeaderMobileSearch />

          <DropDown className="mr-3 max-md:hidden lg:mr-6">
            <DropDownButton>
              <ShareIcon tabIndex={0} className="icon" />
            </DropDownButton>
            <DropDownMenu>
              {socials?.map((social) => (
                <li key={social.id}>
                  <a href={social.link} target="_blank">
                    {social.name}
                  </a>
                </li>
              ))}
              <li className="border-t border-light pt-2 mt-2">
                <a>{generalInfo?.email}</a>
              </li>
              <li>
                <a>{generalInfo?.phone}</a>
              </li>
            </DropDownMenu>
          </DropDown>

          <ThemeToggle className="mr-3 max-md:hidden" />
        </div>
      </header>
    </>
  )
}

export default Header
