import React, { useState, useEffect, useContext } from 'react'

// import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import House Context
import { HouseContext } from './HouseContext';

const PropertyTypeDropDown = () => {
  const {property, setProperty, properties} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Menu as = 'div' className='relative'>
        <Menu.Button onClick={() => setIsOpen(!isOpen)}>
            <div>
                <div className='text-[14px] text-left text-gray-500 font-semibold'>Property Type</div>
                <div className='text-left font-bold mt-1'>{property}</div>
                {isOpen ? (
                    <RiArrowDownSLine className='absolute text-violet-700 text-xl left-48 bottom-4'/>
                ) : (
                    <RiArrowUpSLine className='absolute text-violet-700 text-xl left-48 bottom-4'/>
                )}
            </div>
        </Menu.Button>
        <Menu.Items className='w-[220%] text-center py-8 text-[15px] space-y-6 shadow-md bg-white absolute left-[-2.5rem] z-10 list-none rounded-b-lg'>
          {properties.map((property, index) => {
             return (
                <Menu.Item onClick={() => setProperty(property)} as = 'li' key={index} className= 'cursor-pointer hover:text-violet-700 transition'>
                    {property}
                </Menu.Item>
             )
          })}
        </Menu.Items>
    </Menu>
  )
}

export default PropertyTypeDropDown