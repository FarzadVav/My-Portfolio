import { create } from "zustand";

type UseLoadingT = {
  loading: boolean
  startLoading: (href: string) => void
  cancelLoading: () => void
}

const useLoading = create<UseLoadingT>(set => ({
  loading: true,
  startLoading: (href) => location.pathname !== href && set({ loading: true }),
  cancelLoading: () => set({ loading: false })
}))

export default useLoading