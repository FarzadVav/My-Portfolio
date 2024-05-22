import {
  AcademicCapIcon,
  CalendarIcon,
  CommandLineIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid"

import PagesHero from "@/components/PagesHero"

const links = [
  { name: "متن درباره", href: "#" },
  { name: "مهارت ها", href: "#" },
  { name: "رزومه", href: "#" },
]

const Page = () => {
  return (
    <>
      <PagesHero
        picture="/images/smart-cv.png"
        title="من فرزاد وحدتی نژاد"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />

      <div className="container row">
        <div className="center bg-base-300 w-1/4 p-6 rounded-r-box">
          <CommandLineIcon className="icon" />
          <p className="font-base-bold text-lg mr-5">تجربه دو ساله</p>
        </div>
        <div className="center bg-base-300 border-r border-light w-1/4 p-6">
          <AcademicCapIcon className="icon" />
          <p className="font-base-bold text-lg mr-5">دانشجوی کامپیوتر</p>
        </div>
        <div className="center bg-base-300 border-r border-light w-1/4 p-6">
          <UserGroupIcon className="icon" />
          <p className="font-base-bold text-lg mr-5">مهارت کار تیمی</p>
        </div>
        <div className="center bg-base-300 border-r border-light w-1/4 p-6 rounded-l-box">
          <PresentationChartLineIcon className="icon" />
          <p className="font-base-bold text-lg mr-5">عاشق یادگیری</p>
        </div>
      </div>

      <div className="container mt-element">
        <h2 className="center title-xl">مهارت های من</h2>
        <div className="center mt-element" dir="ltr">
          <div className="w-96 h-[500px]">
            <div className="font-base-bold border-b border-solid border-base-300 w-full text-lg text-center py-3">
              Styling
            </div>
            <ul className="w-full px-3 mt-3">
              <li className="bg-sky-500/10 text-sky-500 w-max py-1.5 px-3 rounded-full">
                Css - L3
              </li>
            </ul>
          </div>
          <div className="border-l border-r border-base-300 w-96 h-[500px]">
            <div className="font-base-bold border-b border-solid border-base-300 w-full text-lg text-center py-3">
              Front-End
            </div>
            <ul className="w-full px-3 mt-3">
              <li className="bg-info/10 text-info w-max py-1.5 px-3 rounded-full">
                Typescript - L2
              </li>
            </ul>
          </div>
          <div className="w-96 h-[500px]">
            <div className="font-base-bold border-b border-solid border-base-300 w-full text-lg text-center py-3">
              Back-End
            </div>
            <ul className="w-full px-3 mt-3">
              <li className="bg-warning/10 text-warning w-max py-1.5 px-3 rounded-full">
                Node.js - L1
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
