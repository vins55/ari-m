import { create } from 'zustand'
import { CartItem, Item } from '../types/ItemType'

export interface CartState {
  items: CartItem[]
  addToCart: (item: Item, quantity: number) => void
  removeFromCart: (item: CartItem) => void
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addToCart: (item, quantity) =>
    set((state) => {
      const finalQuantity = quantity ?? 1
      const existingItem = state.items.find((i) => i.img === item.img)

      if (existingItem) {
        const updatedItems = state.items.map((i) => {
          if (i.img === item.img) {
            return {
              ...i,
              quantity: i.quantity + quantity,
            }
          }
          return i
        })
        return { items: updatedItems }
      } else {
        return {
          items: [...state.items, { ...item, quantity: finalQuantity }],
        }
      }
    }),
  removeFromCart: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i !== item),
    })),
}))
