import React, { useState, useEffect, useContext } from 'react'

// import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import House Context
import { HouseContext } from './HouseContext';

const PriceDropDown = () => {
  const {price, setPrice} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
        value: 'Price Range - (Any)'
    },
    {
        value : '$10000 - $30000',
    },
    {
        value : '$30000 - $40000',
    },
    {
        value : '$100000 - $130000',
    },
    {
        value : '$130000 - $160000',
    },
    {
        value : '$160000 - $190000',
    },
    {
        value : '$190000 - $220000',
    }
  ];

  return (
    <Menu as = 'div' className='relative'>
        <Menu.Button onClick={() => setIsOpen(!isOpen)}>
            <div>
                <div className='text-[14px] text-left text-gray-500 font-semibold'>Price</div>
                <div className='text-left font-bold mt-1'>{price}</div>
                {isOpen ? (
                    <RiArrowDownSLine className='absolute text-violet-700 text-xl left-48 bottom-4'/>
                ) : (
                    <RiArrowUpSLine className='absolute text-violet-700 text-xl left-48 bottom-4'/>
                )}
            </div>
        </Menu.Button>
        <Menu.Items className='w-[220%] text-center py-8 text-[15px] space-y-6 shadow-md bg-white absolute left-[-2.5rem] z-10 list-none rounded-b-lg'>
          {prices.map((price, index) => {
             return (
                <Menu.Item onClick={() => setPrice(price.value)} as = 'li' key={index} className= 'cursor-pointer hover:text-violet-700 transition'>
                    {price.value}
                </Menu.Item>
             )
          })}
        </Menu.Items>
    </Menu>
  )
}

export default PriceDropDown