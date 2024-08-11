import { HTMLAttributes } from "react"
import cn from "@/utils/cn"

type DropDownT = HTMLAttributes<HTMLDivElement>
const DropDown = ({ className, ...props }: DropDownT) => {
  return <div className={cn("dropdown dropdown-end", className)} {...props} />
}

type DropDownButtonT = HTMLAttributes<HTMLDivElement>
export const DropDownButton = ({ className, ...props }: DropDownButtonT) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className={cn("btn btn-ghost btn-circle", className)}
      {...props}
    />
  )
}

type DropDownMenuT = HTMLAttributes<HTMLUListElement>
export const DropDownMenu = ({ className, ...props }: DropDownMenuT) => {
  return (
    <ul
      tabIndex={0}
      className={cn(
        "menu dropdown-content shadow-xl bg-base-300 w-max text-base p-3 rounded-box",
        className
      )}
      {...props}
    />
  )
}

export default DropDown
