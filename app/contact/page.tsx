"use client"

import { FormEvent, useEffect, useState } from "react"
import Image from "next/image"
import {
  DocumentIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline"

import PagesHero from "@/components/PagesHero"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"

const links = [{ name: "سوالات پر تکرار", href: "#FAQs" }]

const Page = () => {
  const [user, setUser] = useState<{ id: number } | undefined | null>(undefined)

  useEffect(() => {
    const localUser = (localStorage.getItem("user") as typeof user) || null
    setUser(localUser)
  }, [])

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const localUser = { id: 1 }
    localStorage.setItem("user", JSON.stringify(localUser))
    setUser(localUser)
  }

  return (
    <>
      <PagesHero
        picture="/images/approve.png"
        title="ارتباط و همکاری با من"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />

      {user === undefined ? (
        <div className="container skeleton h-[550px] mx-auto lg:max-w-4xl"></div>
      ) : Object.keys(user || {}).length ? (
        <div className="container h-[550px] mx-auto lg:max-w-4xl">
          <header className="row bg-base-300 w-full h-16 px-5 rounded-t-box">
            <button className="btn btn-ghost btn-circle">
              <ShareIcon className="icon" />
            </button>
            <span className="font-base-bold mr-3 sm:text-lg">فرزاد وحدتی نژاد</span>
            <Image
              className="size-12 mr-auto rounded-full"
              src={"/images/profile.jpg"}
              height={48}
              width={48}
              alt="پروفایل ادمین"
            />
          </header>
          <main className="bg-base-200 w-full h-[422px] py-3 px-5 overflow-y-auto">
            <div className="chat chat-start">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary content-text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد
              </div>
              <div className="chat-footer opacity-50 pt-1 max-sm:text-xs">دیده شده</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble content-text-sm">
                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary content-text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد
              </div>
              <div className="chat-footer opacity-50 pt-1 max-sm:text-xs">دیده شده</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble content-text-sm">
                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary content-text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد
              </div>
              <div className="chat-footer opacity-50 pt-1 max-sm:text-xs">دیده شده</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble content-text-sm">
                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary content-text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد
              </div>
              <div className="chat-footer opacity-50 pt-1 max-sm:text-xs">دیده شده</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble content-text-sm">
                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              </div>
            </div>
          </main>
          <footer className="row bg-base-300 w-full h-16 px-1.5 rounded-b-box sm:px-5">
            <button className="btn btn-primary btn-circle max-sm:btn-sm">
              <PaperAirplaneIcon className="icon-sm -rotate-45 sm:icon" />
            </button>
            <input
              type="text"
              placeholder="پیامی تایپ کنید ..."
              className="input input-bordered bg-base-300 flex-1 mr-3 max-sm:input-sm"
            />
            <button className="btn btn-ghost btn-circle mr-1.5 sm:mr-3 max-sm:btn-sm">
              <DocumentIcon className="icon-sm sm:icon" />
            </button>
          </footer>
        </div>
      ) : (
        <form className="container h-[550px] flex flex-col mx-auto lg:max-w-4xl" onSubmit={submitHandler}>
          <div className="row max-sm:flex-col">
            <input type="text" placeholder="نام" className="input input-bordered w-full sm:w-1/2" />
            <input
              type="text"
              placeholder="نام خانوادگی"
              className="input input-bordered w-full sm:w-1/2 sm:mr-3 max-sm:mt-3"
            />
          </div>
          <div className="row mt-3 max-sm:flex-col-reverse">
            <select className="select select-bordered w-full pr-4 sm:w-1/2 max-sm:mt-3">
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
              className="input input-bordered w-full sm:w-1/2 sm:mr-3"
              dir="ltr"
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full flex-1 mt-3"
            placeholder="متن خود را بنویسید ..."
          />
          <button className="btn btn-primary w-max mt-6">ارسال پیام</button>
        </form>
      )}

      <TitleAnimaiton className="container mt-element" id="FAQs">
        <h2 className="title-xl">سوالات پر تکرار</h2>
      </TitleAnimaiton>
      <div className="container mt-title">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <span className="collapse-title font-base-bold content-title-lg md:text-xl">
            چگونه در 3 روز دیتابیس دیجی کالا را هک کنیم؟
          </span>
          <div className="collapse-content">
            <p className="content-text-lg pt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              و در سال های آتی ادامه خواهد داشت.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mt-3">
          <input type="radio" name="my-accordion-2" />
          <span className="collapse-title font-base-bold content-title-lg md:text-xl">
            چگونه در 3 روز دیتابیس دیجی کالا را هک کنیم؟
          </span>
          <div className="collapse-content">
            <p className="content-text-lg pt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              و در سال های آتی ادامه خواهد داشت.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mt-3">
          <input type="radio" name="my-accordion-2" />
          <span className="collapse-title font-base-bold content-title-lg md:text-xl">
            چگونه در 3 روز دیتابیس دیجی کالا را هک کنیم؟
          </span>
          <div className="collapse-content">
            <p className="content-text-lg pt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              و در سال های آتی ادامه خواهد داشت.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
