import cn from "@/utils/cn"
import { HTMLAttributes } from "react"

type DrawerT = HTMLAttributes<HTMLButtonElement> & {
  toggleId: string
}
const Drawer = ({ className, children, toggleId, ...props }: DrawerT) => {
  return (
    <button className={cn("drawer drawer-end w-max", className)} {...props}>
      <input id={toggleId} type="checkbox" className="drawer-toggle" />
      {children}
    </button>
  )
}

type DrawerButtonT = Omit<HTMLAttributes<HTMLLabelElement>, "htmlFor"> & {
  toggleId: string
}
export const DrawerButton = ({ className, toggleId, ...props }: DrawerButtonT) => {
  return (
    <label
      htmlFor={toggleId}
      className={cn("btn btn-circle btn-ghost drawer-button", className)}
      {...props}
    />
  )
}

type DrawerMenuT = HTMLAttributes<HTMLUListElement> & {
  toggleId: string
}
export const DrawerMenu = ({ className, toggleId, ...props }: DrawerMenuT) => {
  return (
    <div className="drawer-side z-50">
      <label htmlFor={toggleId} aria-label="close sidebar" className="drawer-overlay"></label>
      <ul
        className={cn(
          "menu text-base-content bg-base-200 w-2/3 min-w-72 min-h-full text-base p-3",
          className
        )}
        {...props}
      />
    </div>
  )
}

export default Drawer
