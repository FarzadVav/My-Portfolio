import getMe from "@/utils/actions/getMe"
import PagesHero from "@/components/PagesHero"
import ContactForm from "@/components/modules/ContactForm"
import ChatForm from "@/components/modules/ChatForm"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"

const links = [{ name: "سوالات پر تکرار", href: "#FAQs" }]

const Page = async () => {
  const user = await getMe()

  return (
    <>
      <PagesHero
        picture="/images/approve.png"
        title="ارتباط و همکاری با من"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />

      {user ? <ChatForm user={user} /> : <ContactForm />}

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
