import { useCart } from '../store/useCart'
import { CartItem } from '../types/ItemType'

export const Bucket = () => {
  const cartItems = useCart((s) => s.items)
  const removeFromCart = useCart((s) => s.removeFromCart)

  const handleRemoveItem = (item: CartItem) => {
    removeFromCart(item)
  }

  return (
    <div className='container mx-auto md:max-w-4xl mt-10 mb-16'>
      <h1 className='text-center text-xs mb-5 max-[420px]:text-xl'>Корзина</h1>
      <div className='justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {cartItems.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img src={item.img} alt={item.title} className='max-w-180 mb-2' />
            <h2 className='text-center text-xs'>{item.title}</h2>
            <p className='text-sm font-bold tracking-wide p-2'>{item.pay}</p>
            <p className='text-sm font-bold tracking-wide p-2'>Quantity: {item.quantity}</p>{' '}
            <button
              onClick={() => handleRemoveItem(item)}
              className='mt-2 bg-white border border-gray-200 text-gray-900 hover:text-white text-xs py-1 px-2 hover:bg-gray-600 transition duration-500 ease-in-out'
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
