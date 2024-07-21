import { ShareIcon } from "@heroicons/react/24/outline"

import { fetcher } from "@/utils/functions"
import { BASE_URL } from "@/utils/initialData"
import { GeneralInfoT, SocialsT } from "@/types/datas.types"
import HeaderSearch from "./HeaderSearch"
import ThemeToggle from "../ThemeToggle"
import HeaderNav from "./HeaderNav"
import HeaderDrawer from "./HeaderDrawer"
import HeaderMobileSearch from "./HeaderMobileSearch"

const Header = async () => {
  const generalInfo = await fetcher<GeneralInfoT>(BASE_URL + "/generalInfo")
  const socials = await fetcher<SocialsT[]>(BASE_URL + "/socials")

  return (
    <>
      <header className="bg-base-100 border-b border-light w-full sticky top-0 z-40">
        <div className="container row h-24">
          <HeaderNav />
          <HeaderDrawer />
          <HeaderSearch />
          {/* social dropdown */}
          <div className="dropdown mr-auto lg:mr-6" dir="ltr">
            <div tabIndex={0} role="button" className="btn btn-lg btn-ghost btn-circle">
              <ShareIcon tabIndex={0} className="icon-lg" />
            </div>
            {socials?.length && generalInfo ? (
              <ul tabIndex={0} className="dropdown-content bg-base-300">
                {socials.map((social) => (
                  <li key={social.id} dir="rtl">
                    <a href={social.link} target="_blank">
                      {social.name}
                    </a>
                  </li>
                ))}
                <li className="border-t border-light pt-2 mt-2">
                  <a>{generalInfo.email}</a>
                </li>
                <li>
                  <a>{generalInfo.phone}</a>
                </li>
              </ul>
            ) : null}
          </div>
          {/* social dropdown */}
          <ThemeToggle className="mr-1.5 max-md:hidden" />
          <HeaderMobileSearch />
        </div>
      </header>
    </>
  )
}

export default Header
