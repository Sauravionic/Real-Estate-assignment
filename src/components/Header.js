import React from 'react'

//import link
import {Link} from 'react-router-dom';
//import logo
import Logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header className='py-6 px-10 mb-12 border-b'>
        <div className='flex justify-between items-center'>

            {/* logo */}
            <Link to='/'>
                <img src={Logo} alt = 'Logo'></img>
            </Link>

            {/* Middle Buttons */}
            <div className='flex items-center gap-16 text-md'>
                <Link to='/'>Rent</Link>
                <Link to='/'>Buy</Link>
                <Link to='/'>Sell</Link>
                <Link to='/'>Manage Property</Link>
                <Link to='/'>Resources</Link>
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