import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import ProductCard from './components/ProductCard';
import Customer from './components/Customer';
import UniqueFeature from './components/UniqueFeature';
import WhatsAppChat from './components/WhatsAppChat';

const App = () => {
  return (
    <div className='m-0 p-0'>
      <Navbar/>
      <Home/>
      <ProductCard/>
      <Customer/>
      <UniqueFeature/>
      <WhatsAppChat/>
    </div>
  )
}

export default App
