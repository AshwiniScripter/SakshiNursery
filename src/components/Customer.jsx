import React from 'react';

const customers = [
  {
    name: "GreenVille Landscapers",
    logo: "https://t3.ftcdn.net/jpg/04/32/15/18/360_F_432151892_oQ3YQDo2LYZPILlEMnlo55PjjgiUwnQb.jpg",
    tagline: "Partnered since 2021"
  },
  {
    name: "UrbanGarden Cafe",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/038/450/942/small/ai-generated-indian-female-farmer-working-in-her-field-bokeh-style-background-with-generative-ai-free-photo.jpeg",
    tagline: "Loves our indoor plants"
  },
  {
    name: "Happy Homes Society",
    logo: "https://static.vecteezy.com/system/resources/previews/038/451/514/non_2x/ai-generated-indian-female-farmer-working-in-her-field-bokeh-style-background-with-generative-ai-photo.jpeg",
    tagline: "Bulk buyer of seasonal plants"
  },
];

const Customer = () => {
  return (
    <div className="bg-green-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        Our Regular Customers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={customer.logo}
              alt={customer.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{customer.name}</h3>
            <p className="text-sm text-gray-600">{customer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
