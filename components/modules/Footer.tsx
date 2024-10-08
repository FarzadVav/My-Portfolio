import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"

import { GeneralInfoT, SocialsT } from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"
import FooterSocial from "./FooterSocial"
import ScrollUp from "./ScrollUp"

const Footer = async () => {
  const { data: generalInfo } = await fetcher<GeneralInfoT>("/generalInfo", { baseUrl: true })
  const { data: socials } = await fetcher<SocialsT[]>("/socials", { baseUrl: true })

  return (
    <footer className="row mt-element w-full flex-col">
      <ScrollUp />
      {socials?.length ? (
        <div className="container mt-element flex items-stretch flex-wrap gap-3 max-lg:flex-wrap">
          {socials.map((social) => (
            <FooterSocial key={social.id} {...social} />
          ))}
        </div>
      ) : null}
      <div className="container row my-element max-md:flex-col max-md:justify-center">
        <p className="row max-w-full md:w-max">
          تمامی حقوق این وبسایت محفوظ می‌باشد
          <svg
            className="icon mr-3"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"
                className="fill-base-content"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2857 8.75C10.2834 8.75 8.75 10.253 8.75 12C8.75 13.747 10.2834 15.25 12.2857 15.25C12.7974 15.25 13.281 15.1504 13.7168 14.9727C14.1003 14.8163 14.5381 15.0004 14.6945 15.384C14.8509 15.7675 14.6667 16.2052 14.2832 16.3616C13.669 16.6121 12.9931 16.75 12.2857 16.75C9.55414 16.75 7.25 14.6712 7.25 12C7.25 9.32875 9.55414 7.25 12.2857 7.25C12.9931 7.25 13.669 7.38791 14.2832 7.63836C14.6667 7.79477 14.8509 8.23249 14.6945 8.61604C14.5381 8.99958 14.1003 9.18372 13.7168 9.02731C13.281 8.84961 12.7974 8.75 12.2857 8.75Z"
                className="fill-base-content"
              ></path>
            </g>
          </svg>
        </p>

        <div className="center border-t border-light max-w-full flex-wrap-reverse gap-3 md:border-transparent md:w-max md:mr-auto max-md:pt-6 max-md:mt-6">
          <p className="row w-max">
            <a className="translate-y-0.5" href={`tel:${generalInfo?.phone}`}>
              {generalInfo?.phone}
            </a>
            <PhoneIcon className="icon mr-3" />
          </p>

          <p className="row w-max mr-3">
            <a className="translate-y-0.5" href={`mailto:${generalInfo?.email}`}>
              {generalInfo?.email}
            </a>
            <EnvelopeIcon className="icon mr-3" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
