import { v4 } from "uuid"
import {
  CalendarIcon,
  ChatBubbleOvalLeftIcon,
  ClockIcon,
  FolderIcon,
} from "@heroicons/react/24/outline"
import { EyeIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid"

import PagesHero from "@/components/PagesHero"
import Article from "@/components/Article"
import ArticleComment from "@/components/ArticleComment"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"
import Tag from "@/components/Tag"
import ArticleShareSection from "@/components/modules/ArticleShareSection"

const links = [
  { name: "مقالات دیگر دسته بندی", href: "#similar-category" },
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

      <div className="container mt-element flex max-lg:flex-col-reverse">
        <main className="bg-base-300 w-full p-6 rounded-box lg:w-2/3 max-lg:mt-element">
          <div className="w-full h-screen">سلام دنیا</div>
          <ArticleShareSection title="چگونه آبجکا ها را deep merg کنیم؟" text="Lorem ipsum" />
          <div className="row border-t border-light w-full flex-wrap gap-3 pt-6 mt-3" dir="ltr">
            {tags.map((tag) => (
              <Tag name={tag.name} />
            ))}
          </div>
        </main>
        <aside className="w-full lg:w-1/3 lg:mr-6">
          <div className="w-full">
            <div className="bg-base-content/5 row w-full justify-between py-3 px-5 rounded-box">
              <FolderIcon className="icon-lg" />
              <span className="font-base-bold text-lg">جاوااسکریپت</span>
            </div>
            <div className="bg-base-content/5 row w-full justify-between py-3 px-5 mt-3 rounded-box">
              <ChatBubbleOvalLeftIcon className="icon-lg" />
              <span className="font-base-bold text-lg">234 نظر</span>
            </div>
            <div className="bg-base-content/5 row w-full justify-between py-3 px-5 mt-3 rounded-box">
              <ClockIcon className="icon-lg" />
              <span className="font-base-bold text-lg">سی دقیقه</span>
            </div>
            <div className="bg-base-content/5 row w-full justify-between py-3 px-5 mt-3 rounded-box">
              <CalendarIcon className="icon-lg" />
              <span className="font-base-bold text-lg">
                {new Date().toLocaleDateString("fa-ir")}
              </span>
            </div>
          </div>
          <div className="collapse collapse-arrow mt-6 lg:sticky lg:top-[97px]">
            <input type="checkbox" defaultChecked />
            <h2 className="collapse-title font-base-bold text-lg px-0">فهرست مطالب</h2>
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

      <TitleAnimaiton className="container mt-element" id="similar-category">
        <h3 className="title-xl">مقالات دیگر دسته بندی</h3>
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

      <TitleAnimaiton className="container mt-element" id="similar-tags">
        <h3 className="title-xl">تگ های مشابه</h3>
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

      <TitleAnimaiton className="container mt-element" id="comments">
        <h4 className="title-xl">نظرات کاربران</h4>
      </TitleAnimaiton>
      <form className="container mt-title">
        <div className="rating gap-3 md:rating-lg">
          <input type="radio" name="rating" className="mask mask-star-2 bg-warning" />
          <input type="radio" name="rating" className="mask mask-star-2 bg-warning" />
          <input type="radio" name="rating" className="mask mask-star-2 bg-warning" />
          <input type="radio" name="rating" className="mask mask-star-2 bg-warning" />
          <input type="radio" name="rating" className="mask mask-star-2 bg-warning" checked />
        </div>
        <textarea
          className="textarea textarea-bordered mt-3 w-full h-52"
          placeholder="نظر / نقد خود را بنویسید ..."
        />
        <button className="btn btn-primary mt-3">
          <span>ارسال نظر</span>
          <PaperAirplaneIcon className="icon -scale-x-100" />
        </button>
      </form>

      <section className="container pt-element mt-element border-t border-light">
        <ArticleComment
          username="سبحان یعقوب یعقوب"
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
            فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
            طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
            گیرد."
          date={new Date()}
          score={3}
          like={326}
          dislike={7}
        />
      </section>
    </>
  )
}

export default Page
