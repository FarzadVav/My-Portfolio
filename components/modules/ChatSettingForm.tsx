"use client"

import { useRef, useState } from "react"
import toast from "react-hot-toast"
import { ArrowLeftStartOnRectangleIcon, UserIcon } from "@heroicons/react/24/outline"

import editUser from "@/actions/editUser"
import signOut from "@/actions/signOut"
import { UsersT } from "@/types/datas.types"
import { defaultFormErrors } from "@/utils/forms"
import SubmitButton from "../SubmitButton"

type ChatSettingFormT = {
  user: UsersT
}

const ChatSettingForm = ({ user }: ChatSettingFormT) => {
  const [formErrors, setFormErrors] = useState(defaultFormErrors())
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <>
      <form
        ref={formRef}
        action={async (formData: FormData) => {
          const errors = await editUser(formData)
          setFormErrors(errors)
          errors.success
            ? toast.success("اطلاعات با موفقیت ثبت شد")
            : errors.customErrors?.forEach((error) => toast.error(error))
        }}
      >
        <label
          className={`input input-bordered w-full ${
            formErrors.fields?.fullName ? "input-error" : ""
          } flex items-center gap-2`}
        >
          <UserIcon className="icon" />
          <input
            type="text"
            name="fullName"
            className="flex-1"
            placeholder="نام و نام خانوادگی"
            defaultValue={user.fullName}
          />
        </label>
        <SubmitButton className="w-full mt-3">ثبت اطلاعات</SubmitButton>
      </form>

      <form className="center mt-6" action={signOut}>
        <p>میخواهید از سایت خارج شوید؟</p>
        <SubmitButton className="btn-ghost mr-3 hover:bg-error/20">
          <ArrowLeftStartOnRectangleIcon className="icon text-error" />
        </SubmitButton>
      </form>
    </>
  )
}

export default ChatSettingForm
