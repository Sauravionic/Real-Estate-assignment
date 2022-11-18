import React, { useState, useEffect, createContext } from 'react'

//import data
import { housesData } from '../data.js';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
   const [houses, setHouses] = useState(housesData);
   const [country, setCountry] = useState('(Any)');
   const [countries, setCountries] = useState([]);
   const [property, setProperty] = useState('Property Type (Any)');
   const [properties, setProperties] = useState([]);
   const [price, setPrice] = useState('Price Range (Any)');
   const [date, setDate] = useState('When');
   const [loading, setLoading] = useState(false);

   //return all countries
   useEffect(() => {
    const allCountries = houses.map((house) => {
        return house.country;
    });
    const uniqueCountries = ['(Any)', ...new Set(allCountries)];

    //set the countries state
    setCountries(uniqueCountries);
   }, []);

   //return all property type
   useEffect(() => {
    const allProperties = houses.map((house) => {
        return house.type;
    });
    const uniqueProperties = ['(Any)', ...new Set(allProperties)];
    
    // set the properties state
    setProperties(uniqueProperties);
   }, []);

   const handleClick = () => {
    setLoading(true);

   // check the string if includes '(any)'
   const isDefault = (str) => {
    return str.split(' ').includes('(Any)');
  };
  //remove spaces from the price range
  const removeDollar = price.split(' ');

   // remove $ and parse into string
   const minPrice = parseInt(removeDollar[0].split('$')[1]);
   // get last string (price) and parse it to number
   const maxPrice = parseInt(removeDollar[2].split('$')[1]);

   console.log(isDefault(country), isDefault(property), isDefault(price));

   const newHouses = housesData.filter((house) => {
     const housePrice = parseInt(house.price);
     
     // all values are selected
     if (
       house.country === country &&
       house.type === property &&
       housePrice >= minPrice &&
       housePrice <= maxPrice
     ) {
       return house;
     }
     // all values are default
     if (isDefault(country) && isDefault(property) && isDefault(price)) {
       return house;
     }
     // country is not default
     if (!isDefault(country) && isDefault(property) && isDefault(price)) {
       return house.country === country;
     }
     // property is not default
     if (!isDefault(property) && isDefault(country) && isDefault(price)) {
       return house.type === property;
     }
     // price is not default
     if (!isDefault(price) && isDefault(country) && isDefault(property)) {
       if (housePrice >= minPrice && housePrice <= maxPrice) {
         return house;
       }
     }
     // country and property is not default
     if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
       return house.country === country && house.type === property;
     }
     // country and price is not default
     if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
       if (housePrice >= minPrice && housePrice <= maxPrice) {
         return house.country === country;
       }
     }
     // property and price is not default
     if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
       if (housePrice >= minPrice && housePrice <= maxPrice) {
         return house.type === property;
       }
     }
   });
   setTimeout(() => {
    return (
      newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false)
    );
  }, 1000);
};

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
        handleClick,
        loading,
      }}
      >
      {children}
    </HouseContext.Provider>
)};
export default HouseContextProvider;