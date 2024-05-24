import {
  AcademicCapIcon,
  CommandLineIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid"

import PagesHero from "@/components/PagesHero"
import Project from "@/components/Project"
import Image from "next/image"
import {
  ArrowDownTrayIcon,
  ArrowUpLeftIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"

const links = [
  { name: "مهارت ها", href: "#skills" },
  { name: "نمونه کار", href: "#projects" },
  { name: "رزومه", href: "#cv" },
]

const techs = [
  { name: "Javascript", color: "#90fa9b" },
  { name: "Typescript", color: "#90fa9b" },
  { name: "React", color: "#90fa9b" },
  { name: "Next", color: "#90fa9b" },
  { name: "SWR", color: "#90fa9b" },
  { name: "MySql", color: "#90fa9b" },
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

      <div className="container mt-element" id="skills">
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

      <div className="container mt-element" id="projects">
        <h2 className="center title-xl">پروژه های من</h2>
        <div className="row mt-element w-full gap-3">
          <Project
            className="w-[calc(50%-0.75rem)]"
            name="کلون Jobvision به صورت Realtime"
            techs={techs}
            logo="/icons/react.png"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است"
            link=""
          />
          <Project
            className="w-[calc(50%-0.75rem)]"
            name="کلون Jobvision به صورت Realtime"
            techs={techs}
            logo="/icons/react.png"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
            link=""
          />
        </div>
        <div className="join center w-full mt-6">
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
        </div>
      </div>

      <div className="container row mt-element" id="cv">
        <div>
          <h3 className="title-xl">راه های ارتباطی با من</h3>
          <p className="text-justify leading-loose my-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
            مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            <Link className="text-primary underline mr-3" href={"/contact"}>
              <span>همکاری با من</span>
              <ArrowUpLeftIcon className="icon inline-block mr-2" />
            </Link>
          </p>
          <div className="row flex-wrap gap-3">
            <a href="" className="btn row rounded-full">
              <span>09389461065</span>
              <PhoneIcon className="icon" />
            </a>
            <a href="" className="btn row rounded-full">
              <span>farzad.vav.work@gmail.com</span>
              <EnvelopeIcon className="icon" />
            </a>
            <a href="" className="btn btn-info row rounded-full">
              <span>دانلود رزومه</span>
              <ArrowDownTrayIcon className="icon" />
            </a>
          </div>
        </div>
        <Image
          className="min-w-80 mr-32"
          src={"/images/young-man.png"}
          height={320}
          width={320}
          alt=""
        />
      </div>
    </>
  )
}

export default Page
