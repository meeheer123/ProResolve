import logoUrl from '../assets/logo.png'

const NavBar = () => {
    return (
        <div className='sticky inset-x-0 top-0 w-full z-30'>
            <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <img src={logoUrl} alt="logo" className='w-10 h-10' />
                    </div>
                    <nav>
                        <ul className='flex flex-row space-x-4 p-4'>
                            <li>
                                <a href="/" className='text-gray-600'>About</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600'>Features</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600'>Pricing</a>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <a href="/" className='bg-black px-4 py-2 rounded-md text-white cursor-pointer'>Login</a>
                        <a href="/" className='bg-black px-4 py-2 rounded-md text-white cursor-pointer ml-2'>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

