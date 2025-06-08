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
// import other vegetable pages as needed

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
        {/* Add other vegetable routes here, like:
            <Route path="/vegetable/papaya" element={<Papaya />} />
        */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
