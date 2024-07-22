"use client"

import { useRef, useState } from "react"
import toast from "react-hot-toast"
import { ArrowLeftStartOnRectangleIcon, UserIcon } from "@heroicons/react/24/outline"

import ActionResultT from "@/types/actionResult.types"
import editUser from "@/utils/actions/editUser"
import signOut from "@/utils/actions/signOut"

const ChatSettingForm = () => {
  const [formErrors, setFormErrors] = useState({} as ActionResultT)
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      className="w-full"
      ref={formRef}
      action={async (formData: FormData) => {
        const errors = await editUser(formData)
        setFormErrors(errors)
        errors.response.status
          ? formRef.current?.reset()
          : errors.customErrors?.forEach((error) => toast.error(error))
      }}
    >
      <label
        className={`input input-bordered ${
          formErrors.fieldsError?.fullName ? "input-error" : ""
        } flex items-center gap-2`}
      >
        <UserIcon className="icon" />
        <input type="text" name="fullName" className="flex-1" placeholder="نام و نام خانوادگی" />
      </label>
      <div className="w-full row gap-3 mt-3">
        <button className="btn btn-primary flex-1" type="submit">
          ثبت اطلاعات
        </button>
        <button
          className="btn btn-error btn-outline flex-1"
          type="button"
          onClick={() => signOut()}
        >
          <ArrowLeftStartOnRectangleIcon className="icon" />
        </button>
      </div>
    </form>
  )
}

export default ChatSettingForm
