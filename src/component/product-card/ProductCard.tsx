import { FC, useState } from 'react'
import { CustomLink } from '../../component/CustomLink'
import { useCart } from '../../store/useCart'

interface ProductCardProps {
  img: string
  title: string
  pay: string
}

export const ProductCard: FC<ProductCardProps> = ({ img, title, pay }) => {
  const [quantity, setQuantity] = useState(1)

  const addToCart = useCart((state) => state.addToCart)

  return (
    <div className='flex flex-col items-center max-[420px]:min-w-16'>
      <CustomLink to='/rings'>
        <img src={img} alt='ring' className='max-w-60' />
      </CustomLink>
      <h1 className='text-center text-xs'>{title}</h1>
      <p className='text-sm font-bold tracking-wide p-2'>{pay}</p>
      <div className='flex items-center'>
        <input
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className='border border-gray-300  px-2 py-0.5 mr-3 text-sm'
        />
        <button
          onClick={() => addToCart({ img, title, pay }, quantity)}
          className='bg-white border
                     border-gray-200
                     text-gray-900
                     hover:text-white text-xs py-1.5 px-1
                     hover:bg-gray-600 transition duration-500 ease-in-out'
        >
          Add to cart
        </button>
      </div>
      <style>
        </style>
    </div>
  )
}
