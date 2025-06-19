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
import Muskmelon from './pages/vegetables/Muskmelon';
import Cucumber from './pages/vegetables/Cucumber';
import Drumstick from './pages/vegetables/Drumstick';
import SmallCucumber from './pages/vegetables/SmallCucumber';
import Merigold from './pages/vegetables/Merigold';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Infrastructure from './pages/Infrastructure';
import Team from './pages/Team';
import Phases from './pages/Phases';
import Profile from './pages/Profile';


//phases
import BookingPhase from './pages/phases/BookingPhase';
import SowingPhase from './pages/phases/SowingPhase';
import PlantPreparation from './pages/phases/PlantPreparation';
import CustomerVisitPhase from './pages/phases/CustomerVisitPhase';
import PlantDelivery from './pages/phases/PlantDelivery';











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
        <Route path='/vegetable/muskmelon' element={<Muskmelon/>}/>
        <Route path='/vegetable/cucumber' element={<Cucumber/>}/>
        <Route path='/vegetable/small-cucumber' element={<SmallCucumber/>}/>
        <Route path='/vegetable/drumstick' element={<Drumstick/>}/>
        <Route path='/vegetable/merigold' element={<Merigold/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/infrastructure' element={<Infrastructure/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/phases' element={<Phases/>}/>
        <Route path='/profile' element={<Profile/>}/>


        <Route path='/phases/booking' element={<BookingPhase/>}/>
        <Route path='/phases/sowing' element={<SowingPhase/>}/>
        <Route path='/phases/preparing' element={<PlantPreparation/>}/>
        <Route path='/phases/visit' element={<CustomerVisitPhase/>}/>
        <Route path='/phases/delivered' element={<PlantDelivery/>}/>




     







      </Routes>
      <Footer />
    </>
  );
};

export default App;
