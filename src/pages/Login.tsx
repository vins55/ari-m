import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

export const Login = () => {
    return (
        <div className='container mx-auto md:max-w-4xl mt-12 mb-16 max-[420px]:p-5' >
            <h3 className='text-xs leading-9'>
                CONTINUE WITH
            </h3>
            <div className='flex gap-5 mt-4 max-[420px]:block'>
            <button className='min-w-52	py-2 px-3 bg-blue-800/75 rounded border border-gray-200 text-white hover:text-white text-xs  hover:bg-gray-600 transition duration-500 ease-in-out'>
                <div className='flex justify-center items-center gap-2 '>
                <ImFacebook2 className='w-6 h-5 ' />
                Login with Google
                </div>
            </button>
            <button className='min-w-52	 px-8 bg-white rounded border border-gray-200 shadow-xl text-gray-600 hover:text-white text-xs  hover:bg-gray-600 transition duration-500 ease-in-out'>
                <div className='flex justify-center items-center gap-2 '>
                <FcGoogle className='w-6 h-8' />
                Login with Google
                </div>
            </button>
            </div>
            <hr className='border-gray-300 mt-6'></hr>
            <div className=''>
                <div className='flex gap-20 max-[420px]:block '>
                    <form>
                        <h3 className='text-xs mt-3 leading-9'>
                            SIGN IN
                        </h3>
                    <div className='mt-2'>
                        <label className='text-gray-700'>E-mail:</label>
                        <div>
                        <input className="w-96 h-10 border border-gray-300 p-2 focus:outline-none focus:border-black max-[420px]:hidden" />
                        <input className="hidden max-[420px]:block w-80 h-8 border border-gray-300 p-2 focus:outline-none focus:border-black" />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label className='text-gray-700'>Password:</label>
                        <div>
                        <input className="w-96 h-10 border border-gray-300 p-2 focus:outline-none focus:border-black max-[420px]:hidden" />
                        <input className="hidden max-[420px]:block w-80 h-8 border border-gray-300 p-2 focus:outline-none focus:border-black" />
                        </div>
                    </div>
                    <button className='px-2 py-1 my-3 bg-white rounded-full border border-gray-200  text-gray-600 hover:text-white text-xs hover:bg-gray-600 transition duration-500 ease-in-out' >
                        Sign in
                    </button>
                    <p className='text-xs'>
                        Forgot your password? Click here.
                    </p>
                    </form>
                    <div className='mt-6'>
                        <h3 className='text-xs leading-9'>
                            CREATE AN ACCOUNT
                        </h3>
                        <p className='text-xs'>
                        You will receive additional benefits:
                        </p>
                        <div className='mt-2 '>
                            <div className="flex items-center">
                                <div className="w-1 h-1 bg-black m-2"></div>
                                <p className="text-xs">view the status of orders</p>
                            </div>
                            <div className="flex items-center ">
                                <div className="w-1 h-1 bg-black m-2"></div>
                                <p className="text-xs">purchase history preview</p>
                            </div>
                            <div className="flex items-center ">
                                <div className="w-1 h-1 bg-black m-2"></div>
                                <p className="text-xs">no need to enter your data for next purchases</p>
                            </div>
                        </div>
                        <button className='py-1 px-2 mt-1 bg-gray-800 border rounded border-gray-200  text-white hover:text-white text-xs  hover:bg-gray-600 transition duration-500 ease-in-out'>
                             Create an account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
