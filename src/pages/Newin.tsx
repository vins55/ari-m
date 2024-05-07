import { ProductCard } from '../component/product-card/ProductCard'
import { useStore } from '../store/useStore'

export const Newin = () => {
  const newinList = useStore((state) => state.items.newin)

  return (
    <div className='container mx-auto md:max-w-4xl mt-12 mb-16 max-[420px]:p-5'>
      <div className='flex justify-between'>
        <h1 className='text-lg'>NEW COLLECTION</h1>
      </div>
      <div className='justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {newinList.map((newin, index) => (
          <ProductCard key={index} {...newin} />
        ))}
      </div>
    </div>
  )
}
