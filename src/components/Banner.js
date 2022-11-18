import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
//import Image
import Image from '../assets/img/house-banner.png';

//import components
import Search from './Search.js';

const Banner = () => {
  return (
    <section>
      <div className='flex justify-between px-10 items-center'>
        <div>
          <h1 className='text-3xl'>Search Properties to Rent</h1>
        </div>
        <div>
          <form>
            <input type="search" id="" class="p-4 text-sm ring-offset-0 text-gray-900 border rounded-lg bg-white" placeholder="Search with search bar" required />
            <FontAwesomeIcon icon = {faCircleChevronDown} ></FontAwesomeIcon>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Banner