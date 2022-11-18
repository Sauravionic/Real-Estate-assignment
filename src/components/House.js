import React from 'react';

// import icons
import { BiHeartCircle, BiBed, BiBath, BiArea } from 'react-icons/bi';
import { housesData } from '../data';

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={house.image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm justify-between'>
        <div className='flex gap-x-2 items-center'>
            <div className='py-1 bg-green-500 rounded-full text-white px-3 inline-block'>
                {house.type}
            </div>
            <div className='py-1 bg-violet-500 rounded-full text-white px-3 inline-block'>
                {house.country}
            </div>
        </div>
        <div className='heart'>
            <BiHeartCircle className='text-3xl hover:text-red-500'/>
        </div>
      </div>
      <div className='text-lg font-bold text-violet-600 mb-2'>
        $ {house.price} / year
      </div>
      <div className='text-xl font-bold'>{house.name}</div>
      <div className='text-md font-semibold text-gray-500 max-w-[360px]'>{house.address}</div>
      <hr className='my-3'></hr>
      <div className='flex gap-x-2 mt-5'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[18px] rounded-full'>
            <BiBed className='text-violet-800'/>
          </div>
          <div className='text-[14px] text-violet-900'>{house.bedrooms} Beds</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[18px] rounded-full'>
            <BiBath className='text-violet-800' />
          </div>
          <div className='text-[14px] text-violet-900'>{house.bathrooms} Bathrooms</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[18px] rounded-full'>
            <BiArea className='text-violet-800' />
          </div>
          <div className='text-[14px] text-violet-900'>{house.surface}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
