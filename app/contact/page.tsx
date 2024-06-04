"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  ChevronDownIcon,
  DocumentIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline"

import PagesHero from "@/components/PagesHero"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"

const links = [{ name: "سوالات پر تکرار", href: "#FAQs" }]

const Page = () => {
  const [showForm, setShowForm] = useState(true)

  useEffect(() => {
    setShowForm(!localStorage.getItem("user"))
  }, [])

  return (
    <>
      <PagesHero
        picture="/images/approve.png"
        title="ارتباط و همکاری با من"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />

      {showForm ? (
        <form className="max-w-4xl mx-auto">
          <div className="row">
            <input type="text" placeholder="نام" className="input input-bordered w-1/2" />
            <input
              type="text"
              placeholder="نام خانوادگی"
              className="input input-bordered w-1/2 mr-3"
            />
          </div>
          <div className="row mt-3">
            <select className="select select-bordered w-1/2 pr-4">
              <option disabled selected>
                موضوع پیام را انتخاب کنید
              </option>
              <option>سوال برنامه نویسی</option>
              <option>همکاری در پروژه</option>
              <option>استارتاپ</option>
            </select>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="input input-bordered w-1/2 mr-3"
              dir="ltr"
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-56 mt-3"
            placeholder="متن خود را بنویسید ..."
          />
          <button className="btn btn-primary mt-6">ارسال پیام</button>
        </form>
      ) : (
        <div className="max-w-4xl mx-auto">
          <header className="row bg-base-300 w-full py-3 px-5 rounded-t-box">
            <button className="btn btn-ghost btn-circle">
              <ShareIcon className="icon" />
            </button>
            <span className="font-base-bold text-lg mr-3">فرزاد وحدتی نژاد</span>
            <Image
              className="size-12 mr-auto rounded-full"
              src={"/images/profile.jpg"}
              height={48}
              width={48}
              alt="پروفایل ادمین"
            />
          </header>
          <main className="bg-base-200 w-full min-h-24 max-h-96 py-3 px-5">
            <div className="chat chat-start">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد
              </div>
              <div className="chat-footer opacity-50 pt-1">دیده شده</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble">تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود</div>
            </div>
          </main>
          <footer className="row bg-base-300 w-full py-3 px-5 rounded-b-box">
            <button className="btn btn-primary btn-circle">
              <PaperAirplaneIcon className="icon -rotate-45" />
            </button>
            <input
              type="text"
              placeholder="پیامی تایپ کنید ..."
              className="input input-bordered bg-base-300 flex-1 mr-3"
            />
            <button className="btn btn-ghost btn-circle mr-3">
              <DocumentIcon className="icon" />
            </button>
            <div className="dropdown dropdown-top mr-1.5">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <span>دسته بندی</span>
                <ChevronDownIcon tabIndex={0} className="icon" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-200 shadow-xl p-3 rounded-box z-10"
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
          </footer>
        </div>
      )}

      <div className="container mt-element" id="FAQs">
        <TitleAnimaiton>
          <h2 className="title-xl">سوالات پر تکرار</h2>
        </TitleAnimaiton>
        <div className="collapse collapse-arrow mt-element bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <span className="collapse-title font-base-bold text-xl">
            چگونه در 3 روز دیتابیس دیجی کالا را هک کنیم؟
          </span>
          <div className="collapse-content">
            <p className="pt-3">hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mt-3">
          <input type="radio" name="my-accordion-2" />
          <span className="collapse-title font-base-bold text-xl">
            چگونه در 3 روز دیتابیس دیجی کالا را هک کنیم؟
          </span>
          <div className="collapse-content">
            <p className="pt-3">hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mt-3">
          <input type="radio" name="my-accordion-2" />
          <span className="collapse-title font-base-bold text-xl">
            چگونه در 3 روز دیتابیس دیجی کالا را هک کنیم؟
          </span>
          <div className="collapse-content">
            <p className="pt-3">hello</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
