import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';

export const Registration = () => {
    return (
        <div className='container mx-auto md:max-w-4xl mt-12 mb-16 max-[420px]:p-5'>
            <h3 className='text-sm leading-9'>
                CONTINUE WITH
            </h3>
            <div className='flex gap-5 mt-4 max-[420px]:block '>
            <button className='min-w-52	py-2 px-3 bg-blue-800/75 rounded border border-gray-200 text-white hover:text-white text-xs  hover:bg-gray-600 transition duration-500 ease-in-out '>
                <div className='flex justify-center items-center gap-2 '>
                <ImFacebook2 className='w-6 h-5 ' />
                Login with Google
                </div>
            </button>
            <button className='min-w-52	 px-8 bg-white rounded border border-gray-200 shadow-xl text-gray-600 hover:text-white text-xs  hover:bg-gray-600 transition duration-500 ease-in-out max-[420px]:mt-4'>
                <div className='flex justify-center items-center gap-2 '>
                <FcGoogle className='w-6 h-8' />
                Login with Google
                </div>
            </button>
            </div>
            <hr className='border-gray-300 mt-6'></hr>
            <h3 className='text-sm my-3 leading-9'>
                REGISTRATION
            </h3>
            <form className='flex justify-center max-[420px]:block max-[420px]:justify-start '>
                <div className='max-w-md'>
                    <div className='mb-4 flex max-[420px]:block '>
                        <label className='mr-2 text-right w-1/2 text-gray-700 max-[420px]:hidden'>*E-mail:</label>
                        <label className='hidden max-[420px]:block mr-2 text-gray-700'>*E-mail:</label>
                        <input className='w-96 h-8 border border-gray-300 p-2 focus:outline-none focus:border-black max-[420px]:hidden' />
                        <input className='hidden max-[420px]:block w-80 h-8 border border-gray-300 p-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mb-4 flex max-[420px]:block'>
                        <label className='mr-2 text-right w-1/2 text-gray-700 max-[420px]:hidden'>*Password:</label>
                        <label className='hidden max-[420px]:block mr-2 text-gray-700'>*Password:</label>
                        <input className='w-96 h-8 border border-gray-300 p-2 focus:outline-none focus:border-black max-[420px]:hidden' />
                        <input className='hidden max-[420px]:block w-80 h-8 border border-gray-300 p-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='flex  max-[420px]:block'>
                        <label className='mr-2 text-right w-1/2 text-gray-700 max-[420px]:hidden'>*Repeat password:</label>
                        <label className='hidden max-[420px]:block mr-2 t text-gray-700'>*Repeat password:</label>
                        <input className='w-96 h-8 border border-gray-300 p-2 focus:outline-none focus:border-black max-[420px]:hidden' />
                        <input className='hidden max-[420px]:block w-80 h-8 border border-gray-300 p-2 focus:outline-none focus:border-black' />
                    </div>
                </div>
            </form>
        </div>
    )
}