import React, { useEffect, useRef } from "react";
import ownerImg from "../images/owner.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const taglineRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Tagline animation
    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
    );

    // Core Value cards animation on scroll
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: i * 0.1,
        }
      );
    });
  }, []);

  return (
    <div className="bg-green-50 min-h-screen py-10 px-6 md:px-20 font-sans">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">
          Welcome to <span className="font-serif">Sakshi Hi-Tech</span> Nursery
        </h1>
        <p ref={taglineRef} className="text-gray-700 text-lg mb-8">
          Carefully Grown. Beautifully Delivered.
        </p>
      </div>

      {/* Founder Section */}
      <section className="max-w-5xl mx-auto my-12 text-center">
        <img
          src={ownerImg}
          alt="Founder Mr. Vijay Trambakrao Khaire"
          className="w-100 h-95 mx-auto object-cover rounded-xl shadow-lg"
          loading="lazy"
        />
        <h2 className="mt-4 text-xl font-bold text-green-900">Mr. Vijay Trambakrao Khaire</h2>
        <p className="text-green-700 font-medium">Founder</p>
      </section>

      {/* OGN Section */}
      <section className="max-w-7xl mx-auto my-10 px-6 text-center md:text-left md:flex md:items-start gap-10">
        <div className="mt-8 md:mt-0">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Sakshi Hi-Tech Nursery, Nashik
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            Om Gayatri Nursery (OGN) was the first venture of Om Gayatri Group launched in 2009.
            Started by my brother and me, this enterprise laid the foundation for the growth and expansion
            of the Om Gayatri Group you know of today. Launched as a two-person team, our customers,
            farmers and employees saw our larger vision and joined us in expanding the nursery.
            <br /><br />
            We are still at the cusp of the new Food Revolution that’s started across the world. The global
            challenge before us is how to feed a growing population living longer whilst accepting the
            difficult reality of decreasing land under cultivation. Each acre of land must now produce and
            continue to yield higher and better-quality food.
            <br /><br />
            This is both, a challenge and an opportunity. Om Gayatri Nursery has always been ahead of the
            curve by investing in the latest technologies, tools and people. While we offer the best quality
            seedlings of ornamental plants and horticultural crops, we’re also careful to not chase volumes
            by sacrificing quality.
            <br /><br />
            This nursery has spawned other successful agri-businesses such as Om Gayatri Bench Tech, Om
            Gayatri Agro Mall, and Om Gayatri Farmer Producer Company, each catering to niche areas
            within the agri-industry.
            <br /><br />
            I invite you to explore Om Gayatri Nursery. Join us in our immediate mission of positively
            impacting the lives of at least one million farmers in the years to come!
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-green-50 py-16 px-6 md:px-20">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-green-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Quality First",
                description: "Every plant reflects our promise of health, endurance, and beauty.",
                image:
                  "https://america-diy.s3.us-west-1.amazonaws.com/418/conversions/unnamed-%281%29-large.jpg",
              },
              {
                title: "Eco-Conscious",
                description: "We follow sustainable practices to protect our environment.",
                image:
                  "https://s7ap1.scene7.com/is/image/TslDXP/cover_image?fmt=webp",
              },
              {
                title: "Innovation",
                description: "Modern methods ensure smarter, stronger, and faster plant growth.",
                image:
                  "https://img.freepik.com/free-photo/plant-growing-from-soil_23-2151729539.jpg?semt=ais_hybrid&w=740",
              },
              {
                title: "Customer-Centric",
                description: "Guidance, care tips, and personal service for every plant parent.",
                image:
                  "https://thumbs.dreamstime.com/b/young-people-working-greenhouse-attractive-female-agricultural-engineer-communicating-male-worker-holding-fresh-lettuce-115129781.jpg",
              },
              {
                title: "Integrity",
                description: "We believe in honesty, trust, and long-term relationships.",
                image:
                  "https://plus.unsplash.com/premium_photo-1661421746164-b8b53de3bd4e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMHNoYWtlfGVufDB8fDB8fHww",
              },
              {
                title: "Passion for Greenery",
                description: "Our love for nature drives us to go the extra mile, every time.",
                image:
                  "https://img.freepik.com/free-photo/green-field-with-cloudy-morning-sky-with-hills_181624-22466.jpg?semt=ais_hybrid&w=740",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                ref={addToRefs}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h4 className="text-green-800 font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
