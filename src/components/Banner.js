import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Menu } from '@headlessui/react';
// import context
import { housesData } from '../data.js';
//import components
import Filter from './Filter.js';
import SearchDropDown from './SearchDropDown';

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const[isActive, setisActive] = useState(false);
  const toggleButton = (event) => {
    setSearchTerm(event.target.value)
    if(searchTerm == "") {
      setisActive(false);
    }
    else {
      setisActive(true);
    }
  }
  return (
    <section className='m-auto h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col max-w-[1440px] md:flex-row items-center justify-between mx-auto mt-[60px]'>
        <div>
          <h1 className='text-4xl lg:text-[58px] font-semibold'>Search Properties to Rent</h1>
        </div>
        <div className='relative'>
          <form>
            <input onChange={toggleButton} 
              type="search" id="" class="p-5 pr-10 w-[17rem] text-sm ring-offset-0 text-gray-900 border rounded-lg bg-white" placeholder="Search with search bar" required />
            <div className='absolute bottom-[18px] right-4'>
              <button><FontAwesomeIcon icon = {faCircleChevronDown} size = 'sm' className='text-violet-500 cursor-pointer'></FontAwesomeIcon></button>
             
             <div style ={{visibility: isActive ? 'visible' : 'hidden'}}>
             <Menu as='div'  className='max-w-[270px] text-center py-8 text-[15px] space-y-6 shadow-md bg-white absolute left-[-241px] z-10 list-none rounded-b-lg' style ={{width: isActive ? '270px' : '0px'}}>
              {housesData.filter((house) => {
                if(searchTerm == "") {
                  return; 
                }
                else if(house.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return house;
                }
              }).map((house, index) => {
                console.log(house.id);
                return (
                    <Menu.Item style ={{visibility: isActive ? 'visible' : 'hidden'}} onClick={() => {}} as='li' className= 'cursor-pointer hover:text-violet-700 transition text-md' key={index}>{house.name}</Menu.Item>
                )
              })
              }
              </Menu>
             </div>
              
            </div>
          </form>
          <div>
          </div>
        </div>
      </div>
      <Filter/>
    </section>
  )
}

export default Banner