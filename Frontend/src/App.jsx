import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import ProductCard from './components/ProductCard';
import Customer from './components/Customer';
import UniqueFeature from './components/UniqueFeature';

const App = () => {
  return (
    <div className='m-0 p-0'>
      <Navbar/>
      <Home/>
      <ProductCard/>
      <Customer/>
      <UniqueFeature/>
    </div>
  )
}

export default App
