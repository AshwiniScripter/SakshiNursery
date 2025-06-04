import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div className='m-0 p-0'>
      <Navbar/>
      <Home/>
      <ProductCard/>
    </div>
  )
}

export default App
