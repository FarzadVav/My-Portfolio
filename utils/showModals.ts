export const showModal = (modalId: string) => {
  const modal = document.querySelector("#" + modalId) as HTMLDialogElement
  modal.showModal()
}