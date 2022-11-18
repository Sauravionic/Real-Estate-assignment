import React, { useContext } from 'react'

//import components
import LocationDropDown from './LocationDropDown';
import TimingDropDown from './TimingDropDown';
import PriceDropDown from './PriceDropDown';
import PropertyTypeDropDown from './PropertyTypeDropDown';
import { HouseContext } from './HouseContext';

const Filter = () => {
  const { houses } = useContext(HouseContext);
  return (
    <div className='px-[30px] px-10 py-4 max-w-[1440px] flex flex-row justify-between bg-white mx-auto rounded mt-12 items-center'>
      <LocationDropDown/>
      <TimingDropDown/>
      <PriceDropDown/>
      <PropertyTypeDropDown/>
      <button className='bg-violet-700 hover:bg-violet-800 transition px-5 py-4 text-white rounded'>Search</button>
    </div>
  )
}

export default Filter