import Link from "next/link"
import { v4 } from "uuid"
import {
  CalendarIcon,
  ChatBubbleOvalLeftIcon,
  ClockIcon,
  FolderIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline"
import { EyeIcon } from "@heroicons/react/24/solid"

import PagesHero from "@/components/PagesHero"

const links = [
  { name: "مقالات مشابه", href: "#similar-category" },
  { name: "تگ های مشابه", href: "#similar-tags" },
  { name: "نظرات", href: "#comments" },
]

const articleLinksList = [
  { name: "فرانت اند چیست؟", href: "#aaa" },
  { name: "چگونه معماری لارا کنیم؟", href: "#bbb" },
  { name: "باید ها و نباید ها", href: "#bbb" },
  { name: "بیزنس پلن برای مهندسی", href: "#bbb" },
  { name: "جمع بندی", href: "#ccc" },
]

const tags = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Typescript" },
  { id: 3, name: "React.js" },
  { id: 4, name: "Node.js" },
  { id: 5, name: "Database" },
  { id: 6, name: "Next.js" },
  { id: 7, name: "MySql" },
  { id: 8, name: "MongoDB" },
  { id: 9, name: "Vue.js" },
  { id: 10, name: "Nuxt.js" },
  { id: 11, name: "Cloud" },
  { id: 12, name: "Server" },
]

const Page = () => {
  return (
    <>
      <PagesHero
        picture="/images/article.jpg"
        title="چگونه آبجکا ها را deep merg کنیم؟"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است شاید هم نیست و باید درباره اش فکر کرد"
        links={links}
      />

      <div className="container mt-element flex">
        <main className="bg-base-300 w-2/3 p-6 rounded-box">
          <div className="w-full h-screen">سلام دنیا</div>
          <div className="row border-t border-light w-full flex-wrap gap-3 pt-6 mt-6" dir="ltr">
            {tags.map((tag) => (
              <Link className="btn btn-sm btn-neutral rounded-full" href={""}>
                <span>{tag.name}</span>
                <HashtagIcon className="icon-sm" />
              </Link>
            ))}
          </div>
        </main>
        <aside className="w-1/3 mr-6">
          <div className="w-full grid grid-cols-2 gap-x-3 gap-y-6">
            <div className="row gap-4">
              <div className="center bg-base-300 size-14 rounded-full">
                <FolderIcon className="icon-lg" />
              </div>
              <span className="font-base-bold text-lg">جاوااسکریپت</span>
            </div>
            <div className="row gap-4">
              <div className="center bg-base-300 size-14 rounded-full">
                <ChatBubbleOvalLeftIcon className="icon-lg" />
              </div>
              <span className="font-base-bold text-lg">234 نظر</span>
            </div>
            <div className="row gap-4">
              <div className="center bg-base-300 size-14 rounded-full">
                <ClockIcon className="icon-lg" />
              </div>
              <span className="font-base-bold text-lg">سی دقیقه</span>
            </div>
            <div className="row gap-4">
              <div className="center bg-base-300 size-14 rounded-full">
                <CalendarIcon className="icon-lg" />
              </div>
              <span className="font-base-bold text-lg">
                {new Date().toLocaleDateString("fa-ir")}
              </span>
            </div>
          </div>
          <div className="collapse collapse-arrow mt-6 sticky top-3">
            <input type="checkbox" defaultChecked />
            <span className="collapse-title font-base-bold text-lg px-0">فهرست مطالب</span>
            <ul className="collapse-content border-t border-light px-0">
              {articleLinksList.map((link, i) => (
                <li key={v4()} className="w-full group">
                  <a
                    className={`row ${
                      i === 2
                        ? "font-base-bold"
                        : "opacity-75 hover:font-base-bold hover:opacity-100"
                    } w-full py-2 rounded-md cursor-pointer transition-all group-first-of-type:mt-2 group-last-of-type:pb-0`}
                    href={link.href}
                  >
                    <span>{link.name}</span>
                    <EyeIcon className={`icon mr-auto ${i === 2 ? "" : "opacity-0"}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Page
