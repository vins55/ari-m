import { ProductCard } from '../component/product-card/ProductCard'
import { useStore } from '../store/useStore'

export const Rings = () => {
  const ringsList = useStore((state) => state.items.rings)

  return (
    <div className='container mx-auto md:max-w-4xl mt-12 mb-16 max-[420px]:p-5'>
      <div className='flex justify-between'>
        <h1 className='text-lg'>RINGS</h1>
      </div>
      <div className='justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {ringsList.map((ring, index) => (
          <ProductCard key={index} {...ring} />
        ))}
      </div>
    </div>
  )
}
