import { cookies } from "next/headers"
import Image from "next/image"
import { DocumentIcon, PaperAirplaneIcon, ShareIcon } from "@heroicons/react/24/outline"

import { MessagesApiT, UsersApiT } from "@/types/datas.types"
import { fetcher } from "@/utils/functions"
import { baseUrl } from "@/utils/initialData"
import sendMessage from "@/utils/actions/sendMessage"

type ChatFormT = {
  user: UsersApiT
}

const ChatForm = async ({ user }: ChatFormT) => {
  const token = cookies().get("user")?.value || ""
  const messages = await fetcher<MessagesApiT[]>(baseUrl + "/chat", token)

  return (
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
        {messages?.map((message, i) => {
          if (message.userId === user.id) {
            return (
              <div className="chat chat-start">
                <div className="chat-header pb-1">
                  <time className="text-xs">12:45</time>
                </div>
                <div className="chat-bubble chat-bubble-primary content-text-sm">
                  {message.text}
                </div>
                {i + 1 === messages.length && message.seen ? (
                  <div className="chat-footer opacity-50 pt-1 max-sm:text-xs">دیده شده</div>
                ) : null}
              </div>
            )
          }

          return (
            <div className="chat chat-end">
              <div className="chat-header pb-1">
                <time className="text-xs">12:45</time>
              </div>
              <div className="chat-bubble content-text-sm">{message.text}</div>
            </div>
          )
        })}
      </main>
      <form
        className="row bg-base-300 w-full h-16 px-1.5 rounded-b-box sm:px-5"
        action={sendMessage}
      >
        <button className="btn btn-primary btn-circle max-sm:btn-sm" type="submit">
          <PaperAirplaneIcon className="icon-sm -rotate-45 sm:icon" />
        </button>
        <input
          name="text"
          type="text"
          placeholder="پیامی تایپ کنید ..."
          className="input input-bordered bg-base-300 flex-1 mr-3 max-sm:input-sm"
        />
        <button className="btn btn-ghost btn-circle mr-1.5 sm:mr-3 max-sm:btn-sm">
          <DocumentIcon className="icon-sm sm:icon" />
        </button>
      </form>
    </div>
  )
}

export default ChatForm
