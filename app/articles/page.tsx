import Link from "next/link"
import { HashtagIcon, SparklesIcon } from "@heroicons/react/24/solid"
import {
  AdjustmentsHorizontalIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ClockIcon,
  FolderIcon,
} from "@heroicons/react/24/outline"

import PagesHero from "@/components/PagesHero"
import Article from "@/components/Article"
import Comment from "@/components/Comment"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"

const links = [
  { name: "فرانت اند", href: "#front-end" },
  { name: "بک اند", href: "#back-end" },
  { name: "دیتابیس", href: "#database" },
  { name: "نظرات محبوب", href: "#comments" },
]

const tags = [
  { id: 2, name: "Typescript" },
  { id: 3, name: "React.js" },
  { id: 12, name: "Server" },
  { id: 5, name: "Database" },
  { id: 1, name: "Javascript" },
  { id: 4, name: "Node.js" },
  { id: 7, name: "MySql" },
  { id: 9, name: "Vue.js" },
  { id: 10, name: "Nuxt.js" },
  { id: 11, name: "Cloud" },
  { id: 8, name: "MongoDB" },
  { id: 6, name: "Next.js" },
]

const Page = () => {
  return (
    <>
      <PagesHero
        picture="/images/articles.png"
        title="مقالات علمی برنامه نویسی وب"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است شاید هم نیست و باید درباره اش فکر کرد"
        links={links}
      />

      <div className="container flex md:items-start max-md:flex-col-reverse">
        <aside className="bg-base-300 w-full p-6 rounded-box md:w-1/3 md:sticky md:top-3 max-md:mt-6">
          <h2 className="title-base">
            <SparklesIcon className="icon-lg -scale-x-100" />
            <span>تگ های پر بازدید</span>
          </h2>
          <div className="row w-full flex-wrap gap-1.5 mt-6 lg:gap-3" dir="ltr">
            {tags.map((tag) => (
              <Link
                key={tag.id}
                className="btn btn-sm btn-neutral rounded-full max-lg:text-xs"
                href={""}
              >
                <HashtagIcon className="icon-xs lg:icon-sm" />
                <span>{tag.name}</span>
              </Link>
            ))}
          </div>
        </aside>
        <div className="w-full md:mr-3 md:w-2/3">
          <div className="row w-full flex-wrap gap-3">
            <label className="input input-bordered w-full lg:box-w-1/3 flex items-center gap-3">
              <input type="text" className="grow" placeholder="دسته بندی ها" />
              <FolderIcon className="icon" />
            </label>
            <div className="dropdown box-w-1/2 lg:box-w-1/3">
              <div tabIndex={0} role="button" className="btn btn-ghost w-full justify-between">
                <span>فیلتر نمایش</span>
                <AdjustmentsHorizontalIcon tabIndex={0} className="icon" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-300 shadow-xl p-3 rounded-box z-10"
              >
                <li>
                  <a>Linkedin</a>
                </li>
                <li>
                  <a>Telegram</a>
                </li>
                <li>
                  <a>Github</a>
                </li>
                <li>
                  <a>farzad.vav.work@gmail.com</a>
                </li>
                <li>
                  <a>09389461065</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end box-w-1/2 lg:box-w-1/3">
              <div tabIndex={0} role="button" className="btn btn-ghost w-full justify-between">
                <span>فیلتر زمانی</span>
                <ClockIcon tabIndex={0} className="icon" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-300 shadow-xl p-3 rounded-box z-10"
              >
                <li>
                  <a>Linkedin</a>
                </li>
                <li>
                  <a>Telegram</a>
                </li>
                <li>
                  <a>Github</a>
                </li>
                <li>
                  <a>farzad.vav.work@gmail.com</a>
                </li>
                <li>
                  <a>09389461065</a>
                </li>
              </ul>
            </div>
          </div>
          <section className="row w-full flex-wrap gap-3 mt-6">
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
            <Article
              className="w-full sm:box-w-1/2 lg:box-w-1/2 xl:box-w-1/3"
              picture="/images/article.jpg"
              category="جاواسکریپت"
              title="چگونه آبجکا ها را deep merg کنیم؟"
              date={new Date()}
              comments={23}
              score={3.6}
            />
          </section>
          <div className="join w-full mt-6 max-sm:justify-center">
            <button className="join-item btn">
              <ChevronDoubleRightIcon className="icon-sm" />
            </button>
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
            <button className="join-item btn">
              <ChevronDoubleLeftIcon className="icon-sm" />
            </button>
          </div>
        </div>
      </div>

      <TitleAnimaiton className="container mt-element" id="front-end">
        <h3 className="title-xl">دسته فرانت اند</h3>
      </TitleAnimaiton>
      <div className="box-wrapper mt-title">
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
      </div>

      <TitleAnimaiton className="container mt-element" id="back-end">
        <h3 className="title-xl">دسته بک اند</h3>
      </TitleAnimaiton>
      <div className="box-wrapper mt-title">
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
      </div>

      <TitleAnimaiton className="container mt-element" id="database">
        <h3 className="title-xl">دسته دیتابیس</h3>
      </TitleAnimaiton>
      <div className="box-wrapper mt-title">
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
        <Article
          className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 xl:box-w-1/5"
          picture="/images/article.jpg"
          category="جاواسکریپت"
          title="چگونه آبجکا ها را deep merg کنیم؟"
          date={new Date()}
          comments={23}
          score={3.6}
        />
      </div>

      <div className="container row mt-element max-md:flex-col max-sm:p-0" id="comments">
        <div className="w-full flex flex-col md:w-2/5 md:h-[340px] max-md:px-3">
          <h4 className="title-xl max-md:center">محبوب ترین نظرات</h4>
          <p className="content-text text-justify mt-3 max-md:text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است چاپگرها و متون بلکه و مجله در ستون زیبا چاپ و با ذرباره ببشریت از طراحان مد
            است چاپگرها و متون است.
          </p>
          <div className="row mt-6 max-md:hidden">
            <button className="btn btn-outline btn-circle">
              <ArrowLongRightIcon className="icon" />
            </button>
            <button className="btn btn-outline btn-circle mr-1.5">
              <ArrowLongLeftIcon className="icon" />
            </button>
          </div>
          <span className="italic text-sm mt-auto max-md:hidden">
            بیشتر از 2000 نظر بین 307 مقاله 😛
          </span>
        </div>
        <div className="row w-full gap-3 pb-3 overflow-x-auto md:w-3/5 md:mr-6 max-md:px-3 max-md:mt-6">
          <Comment
            className="slide-box-w flex-1 lg:min-w-[500px] xl:min-w-[600px]"
            username={"فرزاد وحدتی نژاد"}
            score={4.9}
            text={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون است."
            }
            picture="/images/profile.jpg"
            link=""
            like={998}
            dislike={4}
          />
          <Comment
            className="slide-box-w flex-1 lg:min-w-[500px] xl:min-w-[600px]"
            username={"فرزاد وحدتی نژاد"}
            score={4.9}
            text={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون است."
            }
            picture="/images/profile.jpg"
            link=""
            like={998}
            dislike={4}
          />
          <Comment
            className="slide-box-w flex-1 lg:min-w-[500px] xl:min-w-[600px]"
            username={"فرزاد وحدتی نژاد"}
            score={4.9}
            text={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون است."
            }
            picture="/images/profile.jpg"
            link=""
            like={998}
            dislike={4}
          />
        </div>
      </div>
    </>
  )
}

export default Page
