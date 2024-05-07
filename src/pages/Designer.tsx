import designer1 from '../public/images/designer/designer1.webp'
import designer10 from '../public/images/designer/designer10.webp'
import designer11 from '../public/images/designer/designer11.webp'
import designer12 from '../public/images/designer/designer12.webp'
import designer14 from '../public/images/designer/designer14.webp'
import designer2 from '../public/images/designer/designer2.webp'
import designer3 from '../public/images/designer/designer3.webp'
import designer5 from '../public/images/designer/designer5.webp'
import designer7 from '../public/images/designer/designer7.webp'
import designer9 from '../public/images/designer/designer9.webp'

export const Designer = () => {
  return (
    <div className='container mx-auto md:max-w-4xl mt-12 max-[420px]:p-5'>
      <h1 className='text-lg'>THE DESIGNER</h1>
      <p className='text-xs my-5'>
        Jewelry designer, bicycle enthusiast, travel lover. Art and design have been present in her
        life since childhood. Vintage ornaments and objects from her family home became the
        centerpiece of one of her early collections. This is how she discovered her love for
        upcycling, which she used to create jewelry as one of the first Polish designers. Giving
        objects a second life and placing them in a completely new context became one of the
        hallmarks of the ORSKA jewelry brand she created. A graduate of the Academy of Fine Arts in
        Poznań, she holds a doctorate in fine arts and is the author of thousands of jewelry designs
        and small design forms. She does not follow trends, she creates timeless pieces.
      </p>
      <img src={designer1} />
      <div className='flex gap-10 justify-center items-center text-xs max-[420px]:hidden'>
        <img className='w-1/2 ' src={designer2} />
        <p className='text-xs '>
          Handwork is her form of meditation. Together with a team of specialists and jewelers,
          ORSKA is working on many projects at once, but not every one of them will see the light of
          day. Some will remain hidden for months before she returns to them, and some may never
          premiere.
          <p className='mt-3 mb-3'>
            {' '}
            In search of inspiration, she traavels through forests and meadows, exploring the
            mysteries of the insect micro-world. She uses the objects around her to create. She has
            already created jewelry from thousand-year-old oak wood from the castle of Mieszko I,
            car and computer parts, mechanisms of pre-war watches, old sailing ropes and fragments
            of meteorites. Experimentation and exploration are in her blood.{' '}
          </p>
          <p>
            She is a woman of the sea. For her, the Baltic is a metaphor for freedom. She loves the
            coolness of its salty waters, the unpredictable wind and the countless shades of blue
            and green.{' '}
          </p>
        </p>
      </div>
      <img src={designer3} />
      <div className='flex gap-10 justify-center items-center text-xs max-[420px]:hidden'>
        <img className='w-1/2' src={designer5} />
        <div>
          <h1 className='text-base mb-3'>CRAFTS OF THE WORLD</h1>
          <p className='text-xs '>
            Once a year, Ania embarks on a design journey in search of rare, often dying crafts and
            new materials. From each trip she brings back remarkable stories of the people she works
            with. In the Peruvian Andes, Lucio and his wife Rosa helped her overcome weaknesses
            caused by acute mountain sickness. In Mexico, Gabriel and Fransisca patiently taught her
            how to cut copal trees and made sure that when she used a machete for the first time in
            her life, she didn't hurt herself. Nepalese master Ramesh took her to his workshop and
            showed her the craft, despite the fact that in his culture it is a profession that a
            woman cannot practice.
          </p>
          <button className='mt-6 bg-white border border-gray-200 text-gray-900 hover:text-white text-xs py-1 px-2 hover:bg-gray-600 transition duration-500 ease-in-out'>
            explore crafts of the world
          </button>
        </div>
      </div>
      <div className='flex'>
        <img className='w-1/2' src={designer11} />
        <img className='w-1/2' src={designer12} />
      </div>
      <img src={designer7} />
      <div className='flex gap-10 justify-center items-center text-xs max-[420px]:hidden'>
        <img className='w-1/2 max-[420px]:w-full' src={designer14} />
        <p className='text-xs'>
          Ania is a fan of striking jewelry forms. Her wrists are always adorned with wide bracelets
          from the Moon and Machines collections, which she juxtaposes with narrower designs from
          various ORSKA collections. She also likes to combine necklaces - she wears long chains
          with shorter, more delicate necklaces, which creates original compositions. The mix of
          styles, materials and colors allows her to express herself.
        </p>
      </div>
      <div className='flex'>
        <img className='w-1/2' src={designer9} />
        <img className='w-1/2' src={designer10} />
      </div>
    </div>
  )
}
