import { CustomLink } from '../component/CustomLink'
import { discoverList } from '../mock/discoverList'

export const Discover = () => {
  return (
    <div className='container mx-auto md:max-w-4xl mt-12 max-[420px]:p-4 text-center  '>
      <h1 className='text-lg'>CRAFTS OF THE WORLD</h1>
      <p className='text-xs my-5'>
        Anna Orska regularly travels to near and far corners of the world to find the essence of
        local craftsmanship and interpret it according to her own sensibilities. In search of
        inspiration and rare, unique materials and techniques, the artist chooses places renowned
        for their high-quality handicrafts, often not related to jewelry-making. In places with a
        multi-generational, artisanal tradition, she looks for masters in their fields, ready to
        share their knowledge and skills. So far, this has allowed the designer to draw on the
        craftsmanship of Nepalese jewelers, Indonesian and Mexican sculptors, Peruvian weavers and
        Vietnamese lacquer masters. Orska also explores Polish craftsmanship and our country's
        characteristic raw materials, adapting them to jewelry forms. The result of these adventures
        is a modern, geometric collection made of amber polished in Pomeranian workshops or jewelry
        with crystal elements created at the Karkonosze-based Huta Julia, Poland's last crystal
        glass factory.
      </p>
      <div className='flex flex-wrap'>
        {discoverList.map((el, index) => (
          <div className='w-1/2 p-1 max-[420px]:hidden' key={index}>
            <div className=''>
              <CustomLink to='/discover'>
                <img className='' src={el.img} />
              </CustomLink>
            </div>
            <div className='p-5 max-[420px]:w-full max-[420px]:p-4'>
              <h2 className='text-lg'>{el.title}</h2>
              <p className='text-xs my-3 max-[420px]:my-1'>{el.description}</p>
              <button className='mt-2 bg-white border border-gray-200 text-gray-900 hover:text-white text-xs py-1 px-2 hover:bg-gray-600 transition duration-500 ease-in-out'>
                read more
              </button>
            </div>
          </div>
        ))}
        <div className='hidden max-[420px]:block'>
        {discoverList.map((el, index) => (
          <div className='p-1' key={index}>
            <div className=''>
              <CustomLink to='/discover'>
                <img className='' src={el.img} />
              </CustomLink>
            </div>
            <div className='p-5'>
              <h2 className='text-lg'>{el.title}</h2>
              <p className='text-xs my-3'>{el.description}</p>
              <button className='mt-2 bg-white border border-gray-200 text-gray-900 hover:text-white text-xs py-1 px-2 hover:bg-gray-600 transition duration-500 ease-in-out'>
                read more
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
