"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import useSWR from "swr"
import toast from "react-hot-toast"
import {
  Cog6ToothIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline"

import { GeneralInfoT, MessagesT, UsersT } from "@/types/datas.types"
import sendMessage from "@/actions/sendMessage"
import ChatSettingForm from "./ChatSettingForm"
import { defaultFormErrors } from "@/utils/forms"
import { fetcher } from "@/utils/fetcher"
import SubmitButton from "../SubmitButton"

type ChatFormT = {
  user: UsersT
  messages: MessagesT[]
}

const ChatForm = ({ user, messages }: ChatFormT) => {
  const [formErrors, setFormErrors] = useState(defaultFormErrors())
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { data: generalInfo } = useSWR("generalInfo", () =>
    fetcher<GeneralInfoT>("/api/generalInfo")
  )

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight)
  }
  const showModal = () => {
    const modal = document.querySelector("#contact_chat-form_modal") as HTMLDialogElement
    modal.showModal()
  }

  return (
    <>
      <div className="container mx-auto lg:max-w-4xl">
        <header className="row bg-base-300 w-full h-16 px-5 rounded-t-box">
          <Image
            className="size-10 rounded-full"
            src={generalInfo?.data?.profile || ""}
            height={48}
            width={48}
            alt="پروفایل ادمین"
          />
          <span className="font-base-bold mr-4 ml-auto">فرزاد وحدتی نژاد</span>
          {user.ban ? (
            <div className="badge badge-warning ml-3">
              <span>شما بن شده اید</span>
              <ExclamationCircleIcon className="icon-sm mr-2" />
            </div>
          ) : null}
          <button className="btn btn-ghost btn-circle" onClick={showModal}>
            <Cog6ToothIcon className="icon" />
          </button>
        </header>
        <main
          className="bg-base-200 w-full max-h-[60vh] py-3 px-5 overflow-y-auto"
          ref={chatContainerRef}
        >
          {!messages.length ? (
            <div className="skeleton bg-base-300 w-max px-6 py-3 my-3 mx-auto">
              پیامی ارسال و دریافت نشده :(
            </div>
          ) : null}
          {messages.map((message) => {
            if (message.userId === user.id) {
              return (
                <div className="chat chat-start" key={message.id}>
                  <div className="chat-header pb-1">
                    <time className="text-xs">12:45</time>
                  </div>
                  <div className="chat-bubble chat-bubble-primary content-text-sm">
                    {message.text}
                  </div>
                </div>
              )
            }

            return (
              <div className="chat chat-end" key={message.id}>
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
            if (user.ban) {
              return toast.error("شما اجازه پیام دادن ندارید")
            }

            const errors = await sendMessage(formData)
            console.log(errors)
            setFormErrors(errors)
            errors.success
              ? formRef.current?.reset()
              : errors.customErrors?.forEach((error) => toast.error(error))
          }}
        >
          <SubmitButton className="btn-circle max-sm:btn-sm">
            <PaperAirplaneIcon className="icon-sm -rotate-45 sm:icon" />
          </SubmitButton>
          <input
            name="text"
            type="text"
            placeholder="پیامی تایپ کنید ..."
            className={`input ${
              formErrors.fields?.text ? "input-error" : ""
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

      <dialog id="contact_chat-form_modal" className="modal">
        <div className="modal-box">
          <ChatSettingForm user={user} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-zoom-out" />
        </form>
      </dialog>
    </>
  )
}

export default ChatForm
