import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { PropsWithChildren } from "react"

type ModalT = PropsWithChildren & {
  id: string
  title: string
}

const Modal = ({ id, title, children }: ModalT) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box sm:max-w-[75%] max-sm:max-h-[calc(100vh-15em)] lg:max-w-[50%]">
        <div className="row w-full">
          <Bars3BottomRightIcon  className="icon-lg" />
          <span className="font-base-bold content-title mr-3">{title}</span>
        </div>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="cursor-zoom-out" />
      </form>
    </dialog>
  )
}

export default Modal
