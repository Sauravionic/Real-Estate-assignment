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
                <div className='text-[14px] text-left text-gray-500 font-semibold'>{country}</div>
                <div className='text-left font-bold mt-1'>New York, USA</div>
                {isOpen ? (
                    <RiArrowUpSLine className='absolute text-violet-700 text-xl left-36 bottom-4'/>
                ) : (
                    <RiArrowDownSLine className='absolute text-violet-700 text-xl left-36 bottom-4'/>
                )}
            </div>
        </Menu.Button>

        <Menu.Items>
            {countries.map((country, index) => {
                return (
                    <Menu.Item
                     onClick={() => setCountry(country)}
                     as='li' className= 'cursor-pointer hover:text-violet-700 transition' key={index} value={country}> 
                    </Menu.Item>
                )
            })}
        </Menu.Items>
    </Menu>
  )
}

export default LocationDropDown