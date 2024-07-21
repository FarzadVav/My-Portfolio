"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { DocumentIcon, PaperAirplaneIcon, ShareIcon } from "@heroicons/react/24/outline"

import { MessagesT, UsersT } from "@/types/datas.types"
import ActionResultT from "@/types/actionResult.types"
import sendMessage from "@/utils/actions/sendMessage"

type ChatFormT = {
  user: UsersT
  messages: MessagesT[]
}

const ChatForm = ({ user, messages }: ChatFormT) => {
  const [formErrors, setFormErrors] = useState({} as ActionResultT)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight)
  }

  return (
    <div className="container mx-auto lg:max-w-4xl">
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
      <main
        className="bg-base-200 w-full max-h-[60vh] py-3 px-5 overflow-y-auto"
        ref={chatContainerRef}
      >
        {!messages.length ? (
          <div className="skeleton bg-base-300 w-max px-6 py-3 my-3 mx-auto rounded-box">
            پیامی ارسال و دریافت نشده :(
          </div>
        ) : null}
        {messages.map((message, i) => {
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
        ref={formRef}
        action={async (formData: FormData) => {
          const errors = await sendMessage(formData)
          setFormErrors(errors)
          errors.response.status
            ? formRef.current?.reset()
            : errors.customErrors?.forEach((error) => toast.error(error))
        }}
      >
        <button className="btn btn-primary btn-circle max-sm:btn-sm" type="submit">
          <PaperAirplaneIcon className="icon-sm -rotate-45 sm:icon" />
        </button>
        <input
          name="text"
          type="text"
          placeholder="پیامی تایپ کنید ..."
          className={`input ${
            formErrors.fieldsError?.text ? "input-error" : ""
          } input-bordered bg-base-300 flex-1 mr-3 max-sm:input-sm`}
        />
        <label
          className="btn btn-ghost btn-circle mr-1.5 sm:mr-3 max-sm:btn-sm"
          htmlFor="contact_chat-form_file-input"
        >
          <DocumentIcon className="icon-sm sm:icon" />
        </label>
        <input type="file" name="file" id="contact_chat-form_file-input" hidden />
      </form>
    </div>
  )
}

export default ChatForm
