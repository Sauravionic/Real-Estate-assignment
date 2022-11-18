import React from 'react'

//import Image
import Image from '../assets/img/house-banner.png';

//import components
import Search from './Search.js';

const Banner = () => {
  return (
    <section>
      <div className='flex justify-between px-10 items-center'>
        <div>
          <h1>Search Properties to Rent</h1>
        </div>
        <div>
          <form>
            <input type="search" id="" class="p-4 text-sm ring-offset-0 text-gray-900 border rounded-lg bg-white" placeholder="Search with search bar" required />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Banner