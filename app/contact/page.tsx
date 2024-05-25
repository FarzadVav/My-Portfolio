import PagesHero from "@/components/PagesHero"

const links = [{ name: "سوالات پر تکرار", href: "#FAQs" }]

const Page = () => {
  return (
    <>
      <PagesHero
        picture="/images/approve.png"
        title="ارتباط و همکاری با من"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />
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
        ></textarea>
        <button className="btn btn-primary mt-6">ارسال پیام</button>
      </form>

      <div className="container mt-element" id="FAQs">
        <h1 className="center title-xl">سوالات پر تکرار</h1>
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
