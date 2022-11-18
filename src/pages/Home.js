import React from 'react'

//import components
import Banner from '../components/Banner.js';
import HouseList from '../components/HouseList.js';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList/>
    </div>
  )
}

export default Home