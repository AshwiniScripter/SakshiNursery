import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import Logo from '../images/logo.png';

const Navbar = () => {
  const [showPages, setShowPages] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const vegetableList = [
    'Cauliflower', 'Papaya', 'Brinjal', 'Lady Finger',
    'Cabbage', 'Bottle Gourd', 'Bitter Gourd', 'Tomato',
    'Chilli', 'Capsicum', 'Watermelon', 'Muskmelon',
    'Cucumber', 'Small Cucumber', 'Drumstick', 'Merigold'
  ];

  return (
    <nav className="bg-green-800 text-white px-6 py-5 relative z-20">
      <div className="flex items-center justify-between md:justify-start">
        <div className="text-xl font-bold mr-4">
          <img src={Logo} alt="Logo" className="w-38 h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-10 items-center text-lg">
          <Link to="/" className="hover:text-yellow-200 font-semibold">Home</Link>
          <Link to="/plant" className="hover:text-yellow-200 font-semibold">Plant</Link>

          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowShopDropdown(!showShopDropdown)}
              className="hover:text-yellow-200 font-semibold"
            >
              Shop ▾
            </button>
            {showShopDropdown && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white text-black rounded-xl shadow-2xl border z-10 w-100">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-4 py-3">
                  {vegetableList.map((veg, i) => (
                    <Link
                      key={i}
                      to={`/vegetable/${veg.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-yellow-300 transition-all duration-200 font-semibold rounded-md"
                    >
                      {veg}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/book-now" className="hover:text-yellow-200 font-semibold">Book Now</Link>
          <Link to="/team" className="hover:text-yellow-200 font-semibold">Team</Link>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPages(!showPages)}
              className="hover:text-yellow-200 font-semibold"
            >
              Pages ▾
            </button>
            {showPages && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white text-black rounded-xl shadow-2xl z-10 w-56">
                <Link to="/contact" className="block px-4 py-2 hover:text-yellow-300">Contact</Link>
                <Link to="/about-us" className="block px-4 py-2 hover:text-yellow-300">About Us</Link>
                <Link to="/delivery" className="block px-4 py-2 hover:text-yellow-300">Our Delivery</Link>
                <Link to="/infrastructure" className="block px-4 py-2 hover:text-yellow-300">Infrastructure</Link>
                <Link to="/my-orders" className="block px-4 py-2 hover:text-yellow-300">My Orders</Link>
              </div>
            )}
          </div>
        </div>

        {/* Right - Cart & Login */}
        <div className="hidden md:flex items-center gap-4">
          <button className="hover:text-yellow-200">
            <ShoppingCart size={24} />
          </button>
          <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 font-semibold">
            Login
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white transform transition-transform duration-300 z-30 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-green-600">
          <div className="text-xl font-bold">Menu</div>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-6 mt-4 text-lg">
          <Link to="/" className="hover:text-yellow-200">Home</Link>
          <Link to="/plant" className="hover:text-yellow-200">Plant</Link>

          {/* Shop with nested links */}
          <div>
            <button
              onClick={() => setShowShopDropdown(!showShopDropdown)}
              className="w-full text-left hover:text-yellow-200 font-semibold flex justify-between items-center"
            >
              Shop ▾
            </button>
            {showShopDropdown && (
              <div className="mt-2 ml-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {vegetableList.map((veg, i) => (
                  <Link
                    key={i}
                    to={`/vegetable/${veg.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-yellow-200"
                  >
                    {veg}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/book-now" className="hover:text-yellow-200">Book Now</Link>
          <Link to="/team" className="hover:text-yellow-200">Team</Link>

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
                <Link to="/contact" className="hover:text-yellow-200">Contact</Link>
                <Link to="/about-us" className="hover:text-yellow-200">About Us</Link>
                <Link to="/delivery" className="hover:text-yellow-200">Our Delivery</Link>
                <Link to="/infrastructure" className="hover:text-yellow-200">Infrastructure</Link>
                <Link to="/my-orders" className="hover:text-yellow-200">My Orders</Link>
              </div>
            )}
          </div>

          <button className="hover:text-yellow-200 flex items-center gap-2 mt-4">
            <ShoppingCart size={24} />
            Cart
          </button>
          <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 font-semibold mt-2">
            Login
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-20" onClick={() => setMobileMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
