import React, { useState, useEffect, useContext } from 'react'

// import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import House Context
import { HouseContext } from './HouseContext';

const LocationDropDown = () => {
  const {country, setCountry, countries} = useContext(HouseContext);
  
  console.log(countries);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Menu as = 'div' className='relative'>
        <Menu.Button onClick={() => setIsOpen(!isOpen)}>
            <div>
            <div className='text-[14px] text-left text-gray-500 font-semibold'>Location</div>
                <div className='text-left font-bold mt-1'>{country}</div>
                {isOpen ? (
                    <RiArrowDownSLine className='absolute text-violet-700 text-xl left-48 bottom-4'/>
                ) : (
                    <RiArrowUpSLine className='absolute text-violet-700 text-xl left-48 bottom-4'/>
                )}
            </div>
        </Menu.Button>

        <Menu.Items className='w-[220%] text-center py-8 text-[15px] space-y-6 shadow-md bg-white absolute left-[-2.5rem] z-10 list-none rounded-b-lg'>
            {countries.map((country, index) => {
                return (
                    <Menu.Item
                     onClick={() => setCountry(country)}
                     as='li' className= 'cursor-pointer hover:text-violet-700 transition' key={index}> 
                        
                        {country}

                    </Menu.Item>
                )
            })}
        </Menu.Items>
    </Menu>
  )
}

export default LocationDropDown