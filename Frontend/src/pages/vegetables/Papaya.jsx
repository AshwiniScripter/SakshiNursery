import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const papayaVarieties = [
  {
    name: 'Taiwan 786',
    description:
      'Popular hybrid variety known for high yield and sweet flavor. It is suitable for tropical climates and has good disease resistance.',
    price: 180,
    available: 25,
  },
  {
    name: 'Green Berry',
    description:
      'Early maturing variety with green skin and sweet, soft flesh. Performs well in warm conditions and offers good shelf life.',
    price: 160,
    available: 30,
  },
];

const papayaImage =
  'https://cdn.mos.cms.futurecdn.net/g7YTkCzPqJcCKSfEQi6hfE-1200-80.jpg'; 

const Papaya = () => {
  const [selectedVariety, setSelectedVariety] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (varietyName) => {
    toast.success(`${varietyName} added to cart!`);
  };

  const toggleWishlist = (varietyName) => {
    if (wishlist.includes(varietyName)) {
      setWishlist(wishlist.filter((name) => name !== varietyName));
      toast(`Removed ${varietyName} from wishlist`, { icon: '❌' });
    } else {
      setWishlist([...wishlist, varietyName]);
      toast.success(`Added ${varietyName} to wishlist`);
    }
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Papaya</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 max-w-5xl mx-auto">
        <img
          src={papayaImage}
          alt="Papaya"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-80"
        />
        <div className="md:w-1/2 text-gray-700 text-lg">
          <p className='text-justify'>
           Papaya is a delicious tropical fruit known for its sweet, juicy orange flesh and unique flavor. It is rich in vitamins A, C, and E, antioxidants, and digestive enzymes like papain that aid in digestion and reduce inflammation. Grown mainly in warm climates, papayas thrive in tropical and subtropical regions. This versatile fruit is enjoyed fresh, in smoothies, salads, desserts, and even cooked dishes, making it a nutritious and popular choice worldwide.
           </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">
        We have these papaya varieties
      </h2>

      {/* Center the cards container and limit width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-0 max-w-3xl mx-auto">
        {papayaVarieties.map((variety, index) => (
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
                    wishlist.includes(variety.name)
                      ? 'text-red-500'
                      : 'text-gray-400 hover:text-red-400'
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

export default Papaya;
