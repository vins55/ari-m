import { create } from 'zustand'
import { bagsList } from '../mock/bagsList'
import { braceletsList } from '../mock/braceletsList'
import { earringsList } from '../mock/earringsList'
import { newinList } from '../mock/newinList'
import { ringsList } from '../mock/ringsList'
import { Item } from '../types/ItemType'

export interface Store {
  items: {
    bags: Item[]
    bracelets: Item[]
    earrings: Item[]
    newin: Item[]
    rings: Item[]
  }
}

export const useStore = create<Store>(() => ({
  items: {
    bags: bagsList,
    bracelets: braceletsList,
    earrings: earringsList,
    newin: newinList,
    rings: ringsList,
  },
}))
