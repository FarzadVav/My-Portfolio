"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { DocumentIcon, PaperAirplaneIcon, ShareIcon } from "@heroicons/react/24/outline"

import ActionResultT from "@/types/actionResult.types"
import PagesHero from "@/components/PagesHero"
import addMessage from "@/utils/actions/addMessage"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"
import toast from "react-hot-toast"

const links = [{ name: "سوالات پر تکرار", href: "#FAQs" }]

const Page = () => {
  const [user, setUser] = useState<{ id: number } | undefined | null>(undefined)
  const [formErrors, setFormErrors] = useState({} as ActionResultT)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const localUser = (localStorage.getItem("user") as typeof user) || null
    setUser(localUser)
  }, [])

  return (
    <>
      <PagesHero
        picture="/images/approve.png"
        title="ارتباط و همکاری با من"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />

      {user === undefined ? (
        <div className="container mx-auto lg:max-w-4xl">
          <div className="skeleton w-full h-[550px]"></div>
        </div>
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
        <form
          className="container h-[550px] flex flex-col mx-auto lg:max-w-4xl"
          ref={formRef}
          action={async (formData: FormData) => {
            // const localUser = { id: 1 }
            // localStorage.setItem("user", JSON.stringify(localUser))
            // setUser(localUser)
            const errors = await addMessage(formData)
            setFormErrors(errors)
            if (errors.response.status) {
              toast.success("سپاس گذارم، پیام با موفقیت ارسال شد")
              formRef.current?.reset()
            }
          }}
        >
          <div className="flex items-start max-sm:flex-col">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="fullName"
                placeholder="نام و نام خانوادگی"
                className={`input input-bordered ${
                  !!formErrors.fieldsError?.fullName ? "input-error" : ""
                } w-full`}
              />
              {!!formErrors.fieldsError?.fullName ? (
                <p className="text-error w-full text-xs mt-2">
                  <span>*</span>
                  <span className="mr-1.5">{formErrors.fieldsError?.fullName}</span>
                </p>
              ) : null}
            </div>
            <div className="w-full sm:w-1/2 sm:mr-3">
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className={`input input-bordered ${
                  !!formErrors.fieldsError?.email ? "input-error" : ""
                } w-full`}
                dir="ltr"
              />
              {!!formErrors.fieldsError?.email ? (
                <p className="text-error w-full text-xs mt-2">
                  <span>*</span>
                  <span className="mr-1.5">{formErrors.fieldsError?.email}</span>
                </p>
              ) : null}
            </div>
          </div>
          <input
            type="text"
            name="password"
            placeholder="رمز عبور"
            className={`input input-bordered ${
              !!formErrors.fieldsError?.password ? "input-error" : ""
            } w-full mt-3`}
          />
          {!!formErrors.fieldsError?.password ? (
            <p className="text-error w-full text-xs mt-2">
              <span>*</span>
              <span className="mr-1.5">{formErrors.fieldsError?.password}</span>
            </p>
          ) : null}
          <textarea
            name="text"
            placeholder="متن خود را بنویسید ..."
            className={`textarea textarea-bordered ${
              !!formErrors.fieldsError?.password ? "textarea-error" : ""
            } w-full flex-1 mt-3`}
          />
          {!!formErrors.fieldsError?.text ? (
            <p className="text-error w-full text-xs mt-2">
              <span>*</span>
              <span className="mr-1.5">{formErrors.fieldsError?.text}</span>
            </p>
          ) : null}
          <input name="file" type="file" className="file-input file-input-bordered w-full mt-3" />
          <button type="submit" className="btn btn-primary w-max mt-6">
            ارسال پیام
          </button>
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
