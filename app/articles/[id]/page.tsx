import PagesHero from "@/components/PagesHero"

const links = [
  { name: "مقالات مشابه", href: "#database" },
  { name: "تگ های مشابه", href: "#database" },
  { name: "نظرات", href: "#back-end" },
]

const Page = () => {
  return (
    <>
      <PagesHero
        picture="/images/article.jpg"
        title="مقالات علمی برنامه نویسی وب"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است شاید هم نیست و باید درباره اش فکر کرد"
        links={links}
      />
    </>
  )
}

export default Page
