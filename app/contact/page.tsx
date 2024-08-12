import getMe from "@/actions/getMe"
import PagesHero from "@/components/PagesHero"
import SignForm from "@/components/modules/SignForm"
import ChatForm from "@/components/modules/ChatForm"
import Title from "@/components/Title"
import { fetcher } from "@/utils/fetcher"
import { FaqsT, MessagesT } from "@/types/datas.types"
import { getSession } from "@/utils/session"

const Page = async () => {
  const user = await getMe()
  const { data: faqs } = await fetcher<FaqsT[]>("/faqs", { baseUrl: true })

  let messages = null
  if (user) {
    messages = await fetcher<MessagesT[]>("/chat", {
      baseUrl: true,
      session: getSession(),
    })
  }

  return (
    <>
      <PagesHero />

      {user ? <ChatForm user={user} messages={messages?.data || []} /> : <SignForm />}

      {faqs?.length ? (
        <>
          <Title className="container mt-element" id="FAQs">
            <h2 className="title-xl">سوالات پر تکرار</h2>
          </Title>
          <div className="container mt-title">
            {faqs.map((faq, i) => (
              <div key={faq.id} className="collapse collapse-arrow bg-base-200 mt-3 first:mt-0">
                <input type="radio" name="faqs" defaultChecked={i === 0} />
                <span className="collapse-title font-base-bold content-title-lg md:text-xl">
                  {faq.title}
                </span>
                <div className="collapse-content">
                  <p className="text-lg leading-relaxed pt-3">{faq.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}

export default Page
