import React, { useState, useEffect, useContext } from 'react'

// import icons
import { RiCalendarFill, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import House Context
import { HouseContext } from './HouseContext';
const TimingDropDown = () => {
  const {date, setDate} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as = 'div' className='relative'>
        <Menu.Button onClick={() => setIsOpen(!isOpen)}>
            <div>
                <div className='text-[14px] text-left text-gray-500 font-semibold'>{date}</div>
                <div className='text-left font-bold mt-1'>Select Move-in Date</div>
                {isOpen ? (
                    <RiCalendarFill className='absolute text-violet-700 text-md left-52 bottom-4'/>
                ) : (
                    <RiCalendarFill className='absolute text-violet-700 text-md left-52 bottom-4'/>
                )}
            </div>
        </Menu.Button>
    </Menu>
  )
}

export default TimingDropDown