import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const cauliflowerVarieties = [
  { name: '1522', description: 'Early hybrid with good yield and compact curds. Ideal for spring planting with consistent harvest quality and moderate resistance to common pests.', price: 120, available: 30 },
  { name: 'Dhawal', description: 'Tropical variety, heat-tolerant and widely grown in India. Performs well in warmer climates and produces large white heads with excellent flavor.', price: 150, available: 20 },
  { name: '6099', description: 'Mid-season variety with uniform growth and high resistance. Suitable for both fresh market and processing, offering good shelf life.', price: 130, available: 40 },
  { name: 'Supershigra', description: 'Super-fast maturity with excellent white curds. Great choice for early harvest and quick turnaround in short growing seasons.', price: 140, available: 15 },
  { name: '764', description: 'Strong plant with medium maturity and firm heads. Resistant to many diseases and adaptable to various soil types.', price: 110, available: 25 },
  { name: '447', description: 'Popular hybrid, known for high productivity and disease tolerance. Produces uniform heads and maintains quality under storage.', price: 125, available: 35 },
  { name: '936', description: 'Late-season variety suitable for winter harvesting. Known for large curds and excellent taste, perfect for cold climates.', price: 135, available: 18 },
];

const cauliflowerImage = "https://hub.suttons.co.uk/wp-content/uploads/2024/08/cauliflower-skywalker-f1-organic.jpg";

const Cauliflower = () => {
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
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Cauliflower</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 max-w-5xl mx-auto">
        <img
          src={cauliflowerImage}
          alt="Cauliflower"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-80"
        />
        <div className="md:w-1/2 text-gray-700 text-lg">
          <p>
            Cauliflower is a cool-season vegetable rich in vitamins, fiber, and antioxidants. It’s used in a variety of dishes and grown across different seasons using hybrid varieties adapted to climate and soil conditions.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">
        We have these cauliflower varieties
      </h2>

      {/* Adjusted this grid: removed max-w-8xl and added px-4 to reduce margin */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
        {cauliflowerVarieties.map((variety, index) => (
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
            <p className="text-sm text-gray-600 mb-4">Available Quantity: {selectedVariety.available} units</p>

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

export default Cauliflower;
