import PagesHero from "@/components/PagesHero"

const links = [
  { name: "متن درباره", href: "#" },
  { name: "مهارت ها", href: "#" },
  { name: "رزومه", href: "#" },
]

const Page = () => {
  return (
    <>
      <PagesHero
        picture="/images/smart-cv.png"
        title="من فرزاد وحدتی نژاد"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />
    </>
  )
}

export default Page
