import logo from '../src/assets/img/logo.svg';

//import Routes & Route from React-Router-Dom
import { Routes, Route } from 'react-router-dom';

//components importing
import Header from './components/Header.js';
import Footer from './components/Footer.js';

//import pages
import Home from './pages/Home.js';
import PropertyDetails from './pages/PropertyDetails.js';
function App() {
  return (
    <div className='max-w-[2160px] mx-auto bg-gray-100'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/property/:id' element = {<PropertyDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
