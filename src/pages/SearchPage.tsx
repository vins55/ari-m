import { ProductCard } from '../component/product-card/ProductCard'
import { useSearch } from '../store/useSearch'
import { useStore } from '../store/useStore'

export const SearchPage = () => {
  const items = useStore((state) => state.items)

  const searchQuery = useSearch((s) => s.search)

  const searchedItems = Object.values(items)
    .flat()
    .filter((el) => el.title.toLocaleLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className='container mx-auto md:max-w-4xl mt-12 mb-16'>
      <div className='flex justify-between'>
        <h1 className='text-lg'>Search: {searchQuery}</h1>
      </div>
      <div className='justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {searchQuery.length > 0 &&
          searchedItems.map((item, index) => <ProductCard key={index} {...item} />)}
      </div>
    </div>
  )
}
