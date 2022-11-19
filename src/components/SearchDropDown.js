import React from 'react'
import { Menu } from '@headlessui/react';
// import context
import { housesData } from '../data.js';

const SearchDropDown = ({ searchTerm }) => {
  return (
    <Menu as= 'div'>
            <Menu.Items className='w-[220%] text-center py-8 text-[15px] space-y-6 shadow-md bg-white absolute left-[-2.5rem] z-10 list-none rounded-b-lg'>
              
            </Menu.Items>
    </Menu>
  )
}

export default SearchDropDown