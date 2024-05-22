import { ArrowDownLeftIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Page = () => {
  return (
    <>
      <div className="container my-element">
        <div className="center max-w-[65%] mx-auto">
          <div className="size-40 min-w-40 rounded-full">
            <Image src="/images/smart-cv.png" width={160} height={160} alt="" />
          </div>
          <div className="mr-9">
            <h1 className="title-lg">من فرزاد وحدتی نژاد</h1>
            <p className="text-base-content/75 leading-relaxed mt-2.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله است
            </p>
            <div className="row justify-end gap-6 mt-4">
              <a className="link-hover row" href="#">
                <span>متن درباره</span>
                <ArrowDownLeftIcon className="icon-sm mr-2" />
              </a>
              <a className="link-hover row" href="#">
                <span>مهارت ها</span>
                <ArrowDownLeftIcon className="icon-sm mr-2" />
              </a>
              <a className="link-hover row" href="#">
                <span>رزومه</span>
                <ArrowDownLeftIcon className="icon-sm mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
