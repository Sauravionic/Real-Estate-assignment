import React, { useState, useEffect, createContext } from 'react'

//import data
import { housesData } from '../data.js';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
   const [houses, setHouses] = useState(housesData);
   const [country, setCountry] = useState('Location');
   const [countries, setCountries] = useState([]);
   const [property, setProperty] = useState('Property Type');
   const [properties, setProperties] = useState([]);
   const [price, setPrice] = useState('Price Range');
   const [date, setDate] = useState('When');
   const [loading, setLoading] = useState(false);

   //return all countries
   
   return (
    <HouseContext.Provider value = {{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        date,
        setDate,
        houses,
        loading,
      }}
      >
      {children}
    </HouseContext.Provider>
)};
export default HouseContextProvider;