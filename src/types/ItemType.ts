export type Item = {
  img: string
  title: string
  pay: string
}

export type CartItem = Item & {
  quantity: number
}
