import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import ProductCard from './components/ProductCard';
import Customer from './components/Customer';
import UniqueFeature from './components/UniqueFeature';
import WhatsAppChat from './components/WhatsAppChat';
import Cauliflower from './pages/vegetables/Cauliflower';
import Papaya from './pages/vegetables/Papaya';
import Brinjal from './pages/vegetables/Brinjal';
import LadyFinger from './pages/vegetables/LadyFinger';
import Cabbage from './pages/vegetables/Cabbage';
import BottleGourd from './pages/vegetables/BottleGourd';
import BitterGourd from './pages/vegetables/BitterGourd';
import Tomato from './pages/vegetables/Tomato';
import Chilli from './pages/vegetables/Chilli';
import Capsicum from './pages/vegetables/Capsicum';
import Watermelon from './pages/vegetables/Watermelon';
import Cucumber from './pages/vegetables/Cucumber';













const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ProductCard />
              <Customer />
              <UniqueFeature />
              <WhatsAppChat />
            </>
          }
        />

        {/* Vegetable Routes */}
        <Route path="/vegetable/cauliflower" element={<Cauliflower />} />
        <Route path="/vegetable/papaya" element={<Papaya />} />
        <Route path="/vegetable/brinjal" element={<Brinjal/>}/>
        <Route path='/vegetable/lady-finger' element={<LadyFinger/>}/>
        <Route path='/vegetable/cabbage' element={<Cabbage/>}/>
        <Route path='/vegetable/bottle-gourd' element={<BottleGourd/>}/>
        <Route path='/vegetable/bitter-gourd' element={<BitterGourd/>}/>
        <Route path='/vegetable/tomato' element={<Tomato/>}/>
        <Route path='/vegetable/chilli' element={<Chilli/>}/>
        <Route path='/vegetable/capsicum' element={<Capsicum/>}/>
        <Route path='/vegetable/watermelon' element={<Watermelon/>}/>
        <Route path='/vegetable/cucumber' element={<Cucumber/>}/>


        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
