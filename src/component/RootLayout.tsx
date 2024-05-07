import { FormEvent, useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoPersonOutline } from 'react-icons/io5'
import { SlBasket } from 'react-icons/sl'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../store/useCart'
import { useSearch } from '../store/useSearch'
import { CustomLink } from './CustomLink'
import { AiOutlineMenu } from "react-icons/ai";
import logo from './img/logo.png'

export const RootLayout = () => {
  const searchQuery = useSearch((s) => s.search)
  const searchUpdated = useSearch((s) => s.searchUpdated)

  const cartItems = useCart((s) => s.items)
  console.log('RootLayout ~ cartItems:', cartItems)

  const navigate = useNavigate()
  const location = useLocation()
  const [show, setShow] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [inputValue, setInputValue] = useState(searchQuery)

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/search')
    searchUpdated(inputValue)
    setInputValue('')
  }

  useEffect(() => {
    setSearchVisible(false)
  }, [location])

  return (
    <div>
      <div className='py-2.5 bg-black'></div>
      <header className='container mx-auto  md:max-w-4xl max-[420px]:p-4'>
        <div className=''>
          <div className='flex justify-end max-[420px]:flex max-[420px]:justify-center'>
            <div className='h-4'>
              {show && (
                <div onClick={() => setShow(!show)} className='delay-1000 '>
                  <CustomLink
                    className='hover:text-black hover:underline text-sm mx-2 '
                    to='/registration'
                  >
                    Create an account
                  </CustomLink>
                </div>
              )}
            </div>
            <div className='h-4'>
              {show && (
                <div className='delay-1000' onClick={() => setShow(!show)}>
                  <CustomLink className='hover:text-black hover:underline text-sm mx-2' to='/login'>
                    Sign in
                  </CustomLink>
                </div>
              )}
            </div>
          </div>

          <div className='m-30'>
            <div className='flex justify-between items-center'>
              <CustomLink to='/'>
                <img className='w-25 h-14 rounded-full my-3' src={logo} alt='Логотип' />
              </CustomLink>
              <div className='flex gap-3 text-2xl'>
                <button onClick={() => setShow(!show)}>
                  <IoPersonOutline />
                </button>

                <button className='text-' onClick={() => setSearchVisible(!searchVisible)}>
                  <GoSearch />
                </button>
                {searchVisible && (
                  <form
                    onSubmit={onSubmitHandle}
                    className='flex justify-center bg-white  mt-2 rounded-md'
                  >
                    <input
                      className='text-lg border-none outline-none w-full'
                      type='text'
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder='Search...'
                    />
                  </form>
                )}
                <button className='relative'>
                  <Link to='/bucket'>
                    <SlBasket />
                    {cartItems.length > 0 ? (
                      <span className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-yellow-400 text-sm leading-4'>
                        {cartItems.length}
                      </span>
                    ) : null}
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <hr className='border-t border-gray-200' />
          <div className='flex flex-wrap gap-5 my-3 max-[420px]:hidden'>
            <CustomLink className='hover:text-black hover:underline' to='/rings'>
              Rings
            </CustomLink>
            <CustomLink className='hover:text-black hover:underline' to='/earings'>
              Earings
            </CustomLink>
            <CustomLink className='hover:text-black hover:underline' to='/bracelets'>
              Bracelets
            </CustomLink>
            <CustomLink className='hover:text-black hover:underline' to='/discover'>
              Discover
            </CustomLink>
            <CustomLink className='hover:text-black hover:underline' to='/designer'>
              Designer
            </CustomLink>
            <CustomLink className='hover:text-black hover:underline' to='/contact'>
              Contact
            </CustomLink>
          </div>
          <div className='hidden max-[420px]:block'>
              <button className='w-full flex justify-center mt-5 delay-1000' 
                 onClick={() => setNavbarVisible(!navbarVisible)} >
                <AiOutlineMenu size={24}/>
              </button>
              {navbarVisible && (
                  <div className='flex flex-col items-center justify-center mt-3' onClick={() => setNavbarVisible(!navbarVisible)}>
                    <CustomLink className='hover:text-black hover:underline' to='/rings'>
                      Rings
                    </CustomLink>
                    <CustomLink className='hover:text-black hover:underline' to='/earings'>
                      Earings
                    </CustomLink>
                    <CustomLink className='hover:text-black hover:underline' to='/bracelets'>
                      Bracelets
                    </CustomLink>
                    <CustomLink className='hover:text-black hover:underline' to='/discover'>
                      Discover
                    </CustomLink>
                    <CustomLink className='hover:text-black hover:underline' to='/designer'>
                      Designer
                    </CustomLink>
                    <CustomLink className='hover:text-black hover:underline' to='/contact'>
                      Contact
                    </CustomLink>
                  </div>
                )}                     
          </div>
        </div>
      </header>
      <main>
        <div></div>
        <Outlet />
      </main>
      <footer className='container mx-auto md:max-w-4xl'>
        <div className='bg-neutral-300 '>
          <div className='mt-10 flex justify-start gap-28 p-10  max-[420px]:p-5 max-[420px]:block'>
            <div className='max-[420px]:flex max-[420px]:justify-center'>
              <ul>
                <li className='text-sm mb-3 max-[420px]:my-4'>
                  <CustomLink to='/contact'>F.A.Q.</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Order fulfillment</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Jewelry sizes</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Jewelry care</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Exchanges and returns</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Warranty</CustomLink>
                </li>
              </ul>
            </div>
            <div className='max-[420px]:flex max-[420px]:justify-center'>
              <ul>
                <li className='text-sm mb-3 max-[420px]:my-4'>
                  <CustomLink to='/contact'>ORSKA'S WORLD</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>The designer</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Our packaging</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>The workshop - jewelry manufactory of ORSKA</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>ORSKA for business</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>EU funds</CustomLink>
                </li>
              </ul>
            </div>
            <div className='max-[420px]:flex max-[420px]:justify-center'>
              <ul>
                <li className='text-sm mb-3 max-[420px]:my-4'>
                  <CustomLink to='/contact'>VEGAN VIVO HANDBAGS</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Explore VIVO collection</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Vegan materials</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>The Ambassadors of the collection</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Manufacturing process</CustomLink>
                </li>
                <li className='hover:text-black hover:underline max-[420px]:hidden'>
                  <CustomLink to='/contact'>Product care</CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className='flex justify-center p-2 max-[420px]:text-sm text-gray-600'>Made by Aelita</p>
      </footer>

    </div>
  )
}
