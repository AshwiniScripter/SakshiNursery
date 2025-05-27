import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-green-50 min-h-screen py-10 px-6 md:px-20">
            {/* Intro Text */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-8">
          Welcome to <strong>Sakshi Hi-Tech Nursery</strong> – your one-stop destination for vibrant, healthy plants and expert gardening guidance. Our mission is to bring nature closer to every home.
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-6xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-md">
        <img
          src="/AboutUs_1.jpg"
          alt="Nursery Overview"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto my-12 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-md">
          At Sakshi Hi-Tech Nursery, we aim to make plant care accessible and enjoyable. We believe that everyone deserves a touch of green in their lives — whether it's a tiny succulent on your desk or a backyard full of blooms.
          We’re dedicated to promoting sustainability and healthy living by providing quality plants and support to beginner and experienced gardeners alike.
        </p>
      </section>

      {/* Our Story Section with Image */}
      <section className="max-w-6xl mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://unsplash.com/photos/a-greenhouse-filled-with-lots-of-green-plants-LV7VbGXc4m4"
          alt="Our Story"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center md:text-left">Our Story</h2>
          <p className="text-gray-600 text-md">
            Founded in 2010, Sakshi Hi-Tech Nursery started as a small family initiative to promote organic gardening in urban homes. Over the years, we've grown into a trusted name for plant lovers across the region.
            Our commitment to quality, customer satisfaction, and environmental responsibility has helped us build lasting relationships with thousands of happy customers.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto my-16 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: "https://img.icons8.com/color/96/plant-under-sun.png",
              text: "Wide variety of indoor and outdoor plants",
            },
            {
              icon: "https://img.icons8.com/color/96/gardener.png",
              text: "Expert advice on plant care and maintenance",
            },
            {
              icon: "https://img.icons8.com/color/96/recycle.png",
              text: "Eco-friendly and organic gardening solutions",
            },
            {
              icon: "https://img.icons8.com/color/96/feedback.png",
              text: "Personalized recommendations",
            },
            {
              icon: "https://img.icons8.com/color/96/teamwork.png",
              text: "Passionate and experienced support team",
            },
            {
              icon: "https://img.icons8.com/color/96/nature-care.png",
              text: "Committed to green and healthy living",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <img src={item.icon} alt="Icon" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mt-20">
        <h2 className="text-xl font-semibold text-green-700 mb-2">Stay Connected</h2>
        <p className="text-gray-600">
          Have a question or want to visit us? Reach out via our{" "}
          <a href="/contact" className="text-green-600 underline hover:text-green-800">
            contact page
          </a>
          . You can also follow us on social media to get the latest plant care tips and updates.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
