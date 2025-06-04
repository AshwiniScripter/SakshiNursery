// src/components/Footer.tsx

import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 text-white" />
            <div>
              <p>21 Revolution Street</p>
              <p className="font-semibold text-white">Paris, France</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-white" />
            <p className="text-white font-medium">+91 8080 496332</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-white" />
            <a href="mailto:support@company.com" className="text-white hover:underline">
              info@sakshihitech.com
            </a>
          </div>
        </div>

        {/* About and Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">About the company</h3>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod convallis velit, eu auctor lacus
            vehicula sit amet.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <Twitter />
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} Sakshi Hi-Tech Nursery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
