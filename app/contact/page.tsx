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
    </>
  )
}

export default Page
