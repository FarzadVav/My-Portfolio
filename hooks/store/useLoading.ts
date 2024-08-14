import { create } from "zustand";

type UseLoadingT = {
  loading: boolean
  startLoading: () => void
  cancelLoading: () => void
}

const useLoading = create<UseLoadingT>(set => ({
  loading: true,
  startLoading: () => set({ loading: true }),
  cancelLoading: () => set({ loading: false })
}))

export default useLoading