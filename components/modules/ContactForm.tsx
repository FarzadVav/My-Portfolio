"use client"

import { useRef, useState } from "react"

import ActionResultT from "@/types/actionResult.types"
import addMessage from "@/utils/actions/addMessage"

const ContactForm = () => {
  const [formErrors, setFormErrors] = useState({} as ActionResultT)
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      className="container h-[550px] flex flex-col mx-auto lg:max-w-4xl"
      ref={formRef}
      action={async (formData: FormData) => {
        const errors = await addMessage(formData)
        errors && setFormErrors(errors)
      }}
    >
      <div className="flex items-start max-sm:flex-col">
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            name="fullName"
            placeholder="نام و نام خانوادگی"
            className={`input input-bordered ${
              !!formErrors.fieldsError?.fullName ? "input-error" : ""
            } w-full`}
          />
          {!!formErrors.fieldsError?.fullName ? (
            <p className="text-error w-full text-xs mt-2">
              <span>*</span>
              <span className="mr-1.5">{formErrors.fieldsError?.fullName}</span>
            </p>
          ) : null}
        </div>
        <div className="w-full sm:w-1/2 sm:mr-3">
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className={`input input-bordered ${
              !!formErrors.fieldsError?.email ? "input-error" : ""
            } w-full`}
            dir="ltr"
          />
          {!!formErrors.fieldsError?.email ? (
            <p className="text-error w-full text-xs mt-2">
              <span>*</span>
              <span className="mr-1.5">{formErrors.fieldsError?.email}</span>
            </p>
          ) : null}
        </div>
      </div>
      <input
        type="text"
        name="password"
        placeholder="رمز عبور"
        className={`input input-bordered ${
          !!formErrors.fieldsError?.password ? "input-error" : ""
        } w-full mt-3`}
      />
      {!!formErrors.fieldsError?.password ? (
        <p className="text-error w-full text-xs mt-2">
          <span>*</span>
          <span className="mr-1.5">{formErrors.fieldsError?.password}</span>
        </p>
      ) : null}
      <textarea
        name="text"
        placeholder="متن خود را بنویسید ..."
        className={`textarea textarea-bordered ${
          !!formErrors.fieldsError?.password ? "textarea-error" : ""
        } w-full flex-1 mt-3`}
      />
      {!!formErrors.fieldsError?.text ? (
        <p className="text-error w-full text-xs mt-2">
          <span>*</span>
          <span className="mr-1.5">{formErrors.fieldsError?.text}</span>
        </p>
      ) : null}
      <input name="file" type="file" className="file-input file-input-bordered w-full mt-3" />

      {formErrors.customErrors ? (
        <div className="w-full mt-3">
          {formErrors.customErrors.map((error) => (
            <p className="row text-warning w-full mt-1.5 first:mt-3">
              <div className="bg-warning size-1.5 rounded-full"></div>
              <span className="mr-2">{error}</span>
            </p>
          ))}
        </div>
      ) : null}

      <button type="submit" className="btn btn-primary w-max mt-6">
        ارسال پیام
      </button>
    </form>
  )
}

export default ContactForm
