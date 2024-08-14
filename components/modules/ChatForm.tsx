"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import useSWR from "swr"
import toast from "react-hot-toast"
import {
  ArrowDownTrayIcon,
  ArrowPathIcon,
  Cog6ToothIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"

import { GeneralInfoT, MessagesT, UsersT } from "@/types/datas.types"
import sendMessage from "@/actions/sendMessage"
import ChatSettingForm from "./ChatSettingForm"
import { defaultFormErrors } from "@/utils/forms"
import { fetcher } from "@/utils/fetcher"
import SubmitButton from "../SubmitButton"
import refreshChat from "@/actions/refreshChat"
import { showModal } from "@/utils/showModals"

type ChatFormT = {
  user: UsersT
  messages: MessagesT[]
}

const ChatForm = ({ user, messages }: ChatFormT) => {
  const [formErrors, setFormErrors] = useState(defaultFormErrors())
  const [file, setFile] = useState<File | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { data: generalInfo } = useSWR("generalInfo", () =>
    fetcher<GeneralInfoT>("/api/generalInfo")
  )

  const modalId = "contact_chat-form_modal"

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight)
  }

  return (
    <>
      <div className="container mt-element mx-auto lg:max-w-4xl">
        <header className="row bg-base-300 w-full h-16 px-5 rounded-t-box">
          <Image
            className="size-10 rounded-full"
            src={generalInfo?.data?.profile || ""}
            height={48}
            width={48}
            alt="پروفایل ادمین"
          />
          <span className="font-bold mr-4 ml-auto">فرزاد وحدتی نژاد</span>
          {user.ban ? (
            <div className="badge badge-warning ml-3">
              <span>شما بن شده اید</span>
              <ExclamationCircleIcon className="icon-sm mr-2" />
            </div>
          ) : null}
          <form action={refreshChat}>
            <SubmitButton className="btn-ghost btn-circle">
              <ArrowPathIcon className="icon" />
            </SubmitButton>
          </form>
          <button className="btn btn-ghost btn-circle mr-1.5" onClick={() => showModal(modalId)}>
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
                  <div className="chat-bubble chat-bubble-primary row flex-col leading-relaxed">
                    <p className="ml-auto">{message.text}</p>
                    {message.file ? (
                      <a className="btn btn-sm mt-3 mr-auto" href={message.file} target="_blank">
                        <span>فایل ضمیمه</span>
                        <ArrowDownTrayIcon className="icon" />
                      </a>
                    ) : null}
                  </div>
                </div>
              )
            }

            return (
              <div className="chat chat-end" key={message.id}>
                <div className="chat-header pb-1">
                  <time className="text-xs">12:45</time>
                </div>
                <div className="chat-bubble row flex-col leading-relaxed">
                  <p className="ml-auto">{message.text}</p>
                  {message.file ? (
                    <a className="btn btn-sm mt-3 mr-auto" href={message.file} target="_blank">
                      <span>فایل ضمیمه</span>
                      <ArrowDownTrayIcon className="icon" />
                    </a>
                  ) : null}
                </div>
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

            file && formData.append("file", file)
            const errors = await sendMessage(formData)
            setFormErrors(errors)
            if (errors.success) {
              setFile(null)
              formRef.current?.reset()
            } else {
              errors.customErrors?.forEach((error) => toast.error(error))
            }
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
          <div className="indicator mr-1.5 sm:mr-3">
            <label
              className={`${
                file?.size ? "text-error hover:!bg-error/20" : ""
              } btn btn-ghost btn-circle swap swap-rotate max-sm:btn-sm`}
              htmlFor="contact_chat-form_file-input"
              onClick={(event) => {
                if (file?.size) {
                  event.preventDefault()
                  setFile(null)
                }
              }}
            >
              <input type="checkbox" checked={!!file?.size} />
              <TrashIcon className="icon-sm swap-on sm:icon" />
              <PaperClipIcon className="icon-sm swap-off sm:icon" />
            </label>
            <input
              type="file"
              id="contact_chat-form_file-input"
              onChange={(event) => setFile((event.target.files || [null])[0])}
              hidden
            />
            {file?.size ? (
              <span className="indicator-item badge badge-sm badge-primary text-[0.6rem]">1</span>
            ) : null}
          </div>
        </form>
      </div>

      <dialog id={modalId} className="modal">
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
