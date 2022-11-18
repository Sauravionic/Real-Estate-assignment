import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
//import Image
import Image from '../assets/img/house-banner.png';

//import components
import Filter from './Filter.js';

const Banner = () => {
  return (
    <section className='m-auto h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col max-w-[1440px] md:flex-row items-center justify-between mx-auto mt-[60px]'>
        <div>
          <h1 className='text-4xl lg:text-[58px] font-semibold'>Search Properties to Rent</h1>
        </div>
        <div className='relative'>
          <form>
            <input type="search" id="" class="p-5 pr-10 w-[17rem] text-sm ring-offset-0 text-gray-900 border rounded-lg bg-white" placeholder="Search with search bar" required />
            <div className='absolute bottom-[18px] right-4'>
              <button><FontAwesomeIcon icon = {faCircleChevronDown} size = 'sm' className='text-violet-500 cursor-pointer'></FontAwesomeIcon></button>
            </div>
          </form>
        </div>
      </div>
      <Filter/>
    </section>
  )
}

export default Banner