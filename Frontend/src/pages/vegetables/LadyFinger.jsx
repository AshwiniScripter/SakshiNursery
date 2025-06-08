import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const ladyFingerVarieties = [
  {
    name: 'Nirmal-48',
    description:
      'Early maturing variety with high yield and long, tender pods. Resistant to common pests and diseases, ideal for warm climates.',
    price: 90,
    available: 40,
  },
  {
    name: 'Samrat',
    description:
      'Popular variety known for its vigorous growth and dark green pods. Produces high-quality pods with good shelf life.',
    price: 95,
    available: 35,
  },
];

const ladyFingerImage =
  'https://assets-news.housing.com/news/wp-content/uploads/2022/10/12174702/Are-Ladies-Fingers-and-Okra-the-same.jpg';

const LadyFinger = () => {
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
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Lady Finger</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 max-w-5xl mx-auto">
        <img
          src={ladyFingerImage}
          alt="Lady Finger"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-80"
        />
        <div className="md:w-1/2 text-gray-700 text-lg">
          <p className="text-justify">
            Lady Finger, also known as Okra, is a nutritious vegetable popular in warm climates. It produces long,
            slender pods rich in fiber, vitamins, and minerals. Used widely in cooking for its unique texture, it
            is ideal for stews, soups, and fried dishes. Cultivated globally, lady finger varieties vary in pod size,
            yield, and pest resistance.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">
        We have these lady finger varieties
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-0 max-w-3xl mx-auto">
        {ladyFingerVarieties.map((variety, index) => (
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

export default LadyFinger;
