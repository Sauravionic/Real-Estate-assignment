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


  return (
    <Menu as = 'div' className='relative'>
        <Menu.Button onClick={() => setIsOpen(!isOpen)}>
            <div>
                <div className='text-[14px] text-left text-gray-500 font-semibold'>{price}</div>
                <div className='text-left font-bold mt-1'>$500 - $2500</div>
                {isOpen ? (
                    <RiArrowUpSLine className='absolute text-violet-700 text-xl left-36 bottom-4'/>
                ) : (
                    <RiArrowDownSLine className='absolute text-violet-700 text-xl left-36 bottom-4'/>
                )}
            </div>
        </Menu.Button>
    </Menu>
  )
}

export default PriceDropDown