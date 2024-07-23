import { cookies } from "next/headers"

import getMe from "@/utils/actions/getMe"
import PagesHero from "@/components/PagesHero"
import SignForm from "@/components/modules/SignForm"
import ChatForm from "@/components/modules/ChatForm"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"
import { fetcher } from "@/utils/functions"
import { FaqsT, MessagesT } from "@/types/datas.types"
import { BASE_URL } from "@/utils/initialData"

const Page = async () => {
  const user = await getMe()
  const faqs = await fetcher<FaqsT[]>(BASE_URL + "/faqs")
  
  let messages = null
  if (user) {
    const session = cookies().get("session")?.value
    messages = await fetcher<MessagesT[]>(BASE_URL + "/chat", session)
  }

  return (
    <>
      <PagesHero />

      {user ? <ChatForm user={user} messages={messages || []} /> : <SignForm />}

      {faqs?.length ? (
        <>
          <TitleAnimaiton className="container mt-element" id="FAQs">
            <h2 className="title-xl">سوالات پر تکرار</h2>
          </TitleAnimaiton>
          <div className="container mt-title">
            {faqs.map((faq, i) => (
              <div key={faq.id} className="collapse collapse-arrow bg-base-200 mt-3 first:mt-0">
                <input type="radio" name="faqs" defaultChecked={i === 0} />
                <span className="collapse-title font-base-bold content-title-lg md:text-xl">
                  {faq.title}
                </span>
                <div className="collapse-content">
                  <p className="content-text-lg pt-3">{faq.text}</p>
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
