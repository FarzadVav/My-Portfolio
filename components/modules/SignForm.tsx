"use client"

import { useRef, useState } from "react"

import ActionResultT from "@/types/actionResult.types"
import sign from "@/actions/sign"

const SignForm = () => {
  const [formErrors, setFormErrors] = useState({} as ActionResultT)
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      className="container flex flex-col mx-auto lg:max-w-4xl"
      ref={formRef}
      action={async (formData: FormData) => {
        const errors = await sign(formData)
        errors && setFormErrors(errors)
      }}
    >
      <div className="flex items-start max-sm:flex-col">
        <div className="w-full sm:w-1/2">
          <input
            type="email"
            name="email"
            placeholder="ایمیل را وارد کنید"
            className={`input input-bordered ${
              !!formErrors.fieldsError?.email ? "input-error" : ""
            } w-full`}
          />
          {!!formErrors.fieldsError?.email ? (
            <p className="text-error w-full text-xs mt-2">
              <span>*</span>
              <span className="mr-1.5">{formErrors.fieldsError?.email}</span>
            </p>
          ) : null}
        </div>
        <div className="w-full sm:w-1/2 sm:mr-3">
          <input
            type="text"
            name="password"
            placeholder="رمز عبور"
            className={`input input-bordered ${
              !!formErrors.fieldsError?.password ? "input-error" : ""
            } w-full`}
          />
          {!!formErrors.fieldsError?.password ? (
            <p className="text-error w-full text-xs mt-2">
              <span>*</span>
              <span className="mr-1.5">{formErrors.fieldsError?.password}</span>
            </p>
          ) : null}
        </div>
      </div>

      {!!formErrors.fieldsError?.text ? (
        <p className="text-error w-full text-xs mt-2">
          <span>*</span>
          <span className="mr-1.5">{formErrors.fieldsError?.text}</span>
        </p>
      ) : null}

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
        ایجاد گفتگو
      </button>
    </form>
  )
}

export default SignForm
