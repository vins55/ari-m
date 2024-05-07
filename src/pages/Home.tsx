import { CustomLink } from '../component/CustomLink'
import { ProductCard } from '../component/product-card/ProductCard'

import bags333 from '../public/images/home/bags333.webp'
import designer2 from '../public/images/home/designer2.webp'
import newin from '../public/images/home/newin.webp'
import newin1 from '../public/images/home/newin1.webp'
import main222 from '../public/images/home/main2222.jpeg'
import main2 from '../public/images/home/main2.webp'
import main3 from '../public/images/home/main3.webp'
import homescreen from '../public/images/home/new.webp'
import ring1 from '../public/images/home/newin.jpeg'
import earring from '../public/images/home/newin1.jpeg'
import bracelet1 from '../public/images/home/newin4.jpeg'
import { Item } from '../types/ItemType'

export const Home = () => {
  const homeList: Item[] = [
    { img: ring1, title: 'Название продукта 1', pay: '€115.00' },
    { img: earring, title: 'Название продукта 2', pay: '€115.00' },
    { img: bracelet1, title: 'Название продукта 3', pay: '€115.00' },
  ]

  return (
    <div>
      <CustomLink to='/newin'>
        <img className='w-full max-[420px]:hidden' src={homescreen} alt=''/>
        <img className='hidden  max-[420px]:block ' src={main222} alt=''/>
      </CustomLink>
      <div className='py-10 flex justify-center '>
        <div className='container mx-auto md:max-w-4xl mt-12 mb-16'>
          <div className='justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14'>
            {homeList.map((earring, index) => (
              <ProductCard key={index} {...earring} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <CustomLink to='/discover'>
          <img className='w-full max-[420px]:hidden' src={newin} alt='' />
          <img className='hidden max-[420px]:block' src={newin1} alt='' />
        </CustomLink>
        <CustomLink to='/bags'>
          <img className='w-full max-[420px]:hidden' src={main2} alt='' />
          <img className='hidden max-[420px]:block' src={bags333} alt='' />
        </CustomLink>
        <CustomLink to='/designer'>
          <img className='w-full max-[420px]:hidden' src={main3} alt='' />
          <img className='hidden max-[420px]:block' src={designer2} alt='' />
        </CustomLink>
      </div>
    </div>
  )
}
