import { PropsWithChildren } from "react"

type ModalT = PropsWithChildren & {
  id: string
}

const Modal = ({ id, children }: ModalT) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box sm:max-w-[75%] max-sm:max-h-[calc(100vh-15em)] lg:max-w-[50%]">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="cursor-zoom-out" />
      </form>
    </dialog>
  )
}

export default Modal
