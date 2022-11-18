import React from 'react'

//import link
import {Link} from 'react-router-dom';
//import logo
import Logo from '../assets/img/logo.png';
const Header = () => {
  return (
    <header className='py-6 px-10 mb-12 border-b bg-white'>
        <div className='flex justify-between items-center'>

            {/* logo */}
            <Link to='/'>
                <img className='w-[100%] h-[100%]' src={Logo} alt = 'Logo'></img>
            </Link>

            {/* Middle Buttons */}
            <div className='flex items-center gap-8 text-md'>
                <Link className='px-3 py-1 hover:border-solid hover:border hover:rounded-lg hover:ring-offset-0 hover:text-violet-800 hover:bg-violet-200' to='/'>Rent</Link>
                <Link className='px-3 py-1 hover:border-solid hover:border hover:rounded-lg hover:ring-offset-0 hover:text-violet-800 hover:bg-violet-200' to='/'>Buy</Link>
                <Link className='px-3 py-1 hover:border-solid hover:border hover:rounded-lg hover:ring-offset-0 hover:text-violet-800 hover:bg-violet-200' to='/'>Sell</Link>
                <Link className='px-3 py-1 hover:border-solid hover:border hover:rounded-lg hover:ring-offset-0 hover:text-violet-800 hover:bg-violet-200' to='/'>Manage Property</Link>
                <Link className='px-3 py-1 hover:border-solid hover:border hover:rounded-lg hover:ring-offset-0 hover:text-violet-800 hover:bg-violet-200' to='/'>Resources</Link>
            </div>

            {/* Login & Signup Buttons */}
            <div className='flex items-center gap-6'>
                <Link className='border-solid border ring-offset-0 px-4 py-3 text-black hover:text-white hover:bg-violet-700 rounded-lg'>Log In</Link>
                <Link className='bg-violet-700 text-white hover:text-white-900 hover:bg-black px-4 py-3 rounded-lg transition'>Sign Up</Link>
            </div>
        </div>
    </header>
  )
}

export default Header