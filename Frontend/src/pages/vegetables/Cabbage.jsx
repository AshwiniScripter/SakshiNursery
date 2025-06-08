import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const cabbageVarieties = [
  { name: 'Sent', description: 'Early maturing variety with dense heads and good taste. Performs well in cooler climates.', price: 100, available: 30 },
  { name: 'Veer-322', description: 'High-yielding hybrid cabbage with excellent disease resistance and uniform heads.', price: 130, available: 25 },
  { name: 'Yuro-2', description: 'Mid-season variety with compact heads and good shelf life. Suitable for fresh market.', price: 110, available: 35 },
  { name: 'Divya', description: 'Popular variety known for sweet flavor and good weight. Adaptable to various soil types.', price: 120, available: 20 },
  { name: 'Admiral', description: 'Late-season variety with large heads and strong stalks. Performs well under high temperature.', price: 140, available: 18 },
  { name: '199', description: 'Hybrid cabbage with excellent uniformity and resistance to pests. Suitable for commercial cultivation.', price: 125, available: 22 },
];

const cabbageImage = "https://cdn.pixabay.com/photo/2018/10/03/22/08/kohl-3722517_1280.jpg";

const Cabbage = () => {
  const [selectedVariety, setSelectedVariety] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (varietyName) => {
    toast.success(`${varietyName} added to cart!`);
  };

  const toggleWishlist = (varietyName) => {
    if (wishlist.includes(varietyName)) {
      setWishlist(wishlist.filter(name => name !== varietyName));
      toast(`Removed ${varietyName} from wishlist`, { icon: '❌' });
    } else {
      setWishlist([...wishlist, varietyName]);
      toast.success(`Added ${varietyName} to wishlist`);
    }
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Cabbage</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 max-w-5xl mx-auto">
        <img
          src={cabbageImage}
          alt="Cabbage"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-80"
        />
        <div className="md:w-1/2 text-gray-700 text-lg">
          <p className="text-justify">
            Cabbage is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads. Rich in vitamins C and K, it supports immune health and digestion. Cabbage is used fresh in salads, cooked in various dishes, and fermented to make sauerkraut and kimchi. It grows well in cooler climates and is cultivated worldwide with many varieties suited for different seasons.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">
        We have these cabbage varieties
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
        {cabbageVarieties.map((variety, index) => (
          <div
            key={index}
            className="bg-white border border-green-200 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-green-900">{variety.name}</h3>
                <button
                  onClick={() => toggleWishlist(variety.name)}
                  className={`text-2xl cursor-pointer select-none transition-colors ${
                    wishlist.includes(variety.name) ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
                  }`}
                  title={wishlist.includes(variety.name) ? 'Remove from wishlist' : 'Add to wishlist'}
                  aria-label={wishlist.includes(variety.name) ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  {wishlist.includes(variety.name) ? '♥' : '♡'}
                </button>
              </div>
              <p className="text-gray-700 mb-4">{variety.description}</p>
              <p className="text-green-800 font-semibold text-lg mb-6">Price: ₹{variety.price}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleAddToCart(variety.name)}
                className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition flex-1"
              >
                Add to Cart
              </button>
              <button
                onClick={() => setSelectedVariety(variety)}
                className="bg-yellow-500 text-gray-800 py-2 px-4 rounded-md hover:bg-yellow-600 transition flex-1"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedVariety && (
        <div
          className="fixed inset-0 bg-white/90 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target.id === 'modalOverlay') setSelectedVariety(null);
          }}
          id="modalOverlay"
        >
          <div className="bg-white p-6 pt-12 rounded-xl shadow-2xl max-w-md w-full relative">
            <button
              className="absolute top-1 right-3 text-3xl font-bold text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setSelectedVariety(null)}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-green-700 mb-2">{selectedVariety.name} Details</h2>
            <p className="text-sm text-gray-600 mb-2">{selectedVariety.description}</p>
            <p className="text-lg font-semibold text-green-600 mb-2">Price: ₹{selectedVariety.price}</p>
            <p className="text-sm text-red-600 mb-4">Available Quantity: {selectedVariety.available} units</p>

            <button
              onClick={() => handleAddToCart(selectedVariety.name)}
              className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cabbage;
