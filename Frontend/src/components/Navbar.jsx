import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Logo from '../images/logo.png';

const Navbar = () => {
  const [showPages, setShowPages] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const vegetableList = [
    'Tomatoes',
    'Spinach',
    'Carrots',
    'Broccoli',
    'Cabbage',
    'Onions',
    'Garlic',
    'Beetroot',
    'Chilies',
    'Peas',
  ];

  return (
    <nav className="bg-green-800 text-white px-6 py-5 relative z-20">
      <div className="flex items-center justify-between md:justify-start">
        {/* Logo */}
        <div className="text-xl font-bold mr-4">
          <img src={Logo} alt="Description of image" className="w-38 h-12" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 justify-center gap-10 items-center text-lg">
          <a href="#" className="hover:text-yellow-200 font-semibold">Home</a>
          <a href="#" className="hover:text-yellow-200 font-semibold">Plant</a>

          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowShopDropdown(!showShopDropdown)}
              className="hover:text-yellow-200 font-semibold"
            >
              Shop ▾
            </button>
            {showShopDropdown && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gradient-to-br bg-white text-black rounded-xl shadow-2xl border  z-10 w-56">
                {vegetableList.map((veg, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block px-5 py-2 hover:text-yellow-300 transition-all duration-200 font-semibold rounded-md"
                  >
                    {veg}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="hover:text-yellow-200 font-semibold">Book Now</a>
          <a href="#" className="hover:text-yellow-200 font-semibold">Team</a>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPages(!showPages)}
              className="hover:text-yellow-200 font-semibold"
            >
              Pages ▾
            </button>
            {showPages && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gradient-to-br bg-white text-black rounded-xl shadow-2xl z-10 w-56">
                <a href="#" className="block px-4 py-2 hover:text-yellow-300">Contact</a>
                <a href="#" className="block px-4 py-2 hover:text-yellow-300">About Us</a>
                <a href="#" className="block px-4 py-2 hover:text-yellow-300">Our Delivery</a>
                <a href="#" className="block px-4 py-2 hover:text-yellow-300">Infrastructure</a>
                <a href="#" className="block px-4 py-2 hover:text-yellow-300">My Orders</a>
              </div>
            )}
          </div>
        </div>

        {/* Right - Cart and Login */}
        <div className="hidden md:flex items-center gap-4">
          <button className="hover:text-yellow-200">
            <ShoppingCart size={24} />
          </button>
          <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 font-semibold">
            Login
          </button>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white transform transition-transform duration-300 ease-in-out z-30
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-green-600">
          <div className="text-xl font-bold">Menu</div>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-6 mt-4 text-lg">
          <a href="#" className="hover:text-yellow-200">Home</a>
          <a href="#" className="hover:text-yellow-200">Plant</a>

          {/* Shop with nested items */}
          <div>
            <button
              onClick={() => setShowShopDropdown(!showShopDropdown)}
              className="w-full text-left hover:text-yellow-200 font-semibold flex justify-between items-center"
            >
              Shop ▾
            </button>
            {showShopDropdown && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {vegetableList.map((veg, i) => (
                  <a key={i} href="#" className="hover:text-yellow-200">{veg}</a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="hover:text-yellow-200">Book Now</a>
          <a href="#" className="hover:text-yellow-200">Team</a>

          {/* Pages with nested links */}
          <div>
            <button
              onClick={() => setShowPages(!showPages)}
              className="w-full text-left hover:text-yellow-200 font-semibold flex justify-between items-center"
            >
              Pages ▾
            </button>
            {showPages && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                <a href="#" className="hover:text-yellow-200">Contact</a>
                <a href="#" className="hover:text-yellow-200">About Us</a>
                <a href="#" className="hover:text-yellow-200">Our Delivery</a>
                <a href="#" className="hover:text-yellow-200">Infrastructure</a>
                <a href="#" className="hover:text-yellow-200">My Orders</a>
              </div>
            )}
          </div>

          {/* Cart + Login for Mobile */}
          <button className="hover:text-yellow-200 flex items-center gap-2 mt-4">
            <ShoppingCart size={24} />
            Cart
          </button>
          <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 font-semibold mt-2">
            Login
          </button>
        </nav>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
