import { create } from 'zustand'

export interface State {
  search: string
  searchUpdated: (value: string) => void
}

export const useSearch = create<State>((set) => ({
  search: '',
  searchUpdated: (value) =>
    set({
      search: value,
    }),
}))
