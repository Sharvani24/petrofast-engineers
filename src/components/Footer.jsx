import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#b00000] text-white font-serif pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold mb-6 tracking-wider">COMPANY INFO.</h4>
          <ul className="list-disc pl-5 space-y-4 text-[18px]">
            <li className="transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="transition-colors">
              <Link to="/about">About Us</Link>
            </li>
            <li className="transition-colors">
              <Link to="/quality">Quality Certificates</Link>
            </li>
            {/* Export Market */}
            <li className="cursor-default">
              <span>Export Market</span>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="text-xl font-bold mb-6 tracking-wider">CUSTOMER SUPPORT</h4>
          <ul className="list-disc pl-5 space-y-4 text-[18px]">
            <li className="transition-colors">
              <Link to="/enquiry">Enquiry Form</Link>
            </li>
            <li className="transition-colors">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h4 className="text-xl font-bold mb-6 tracking-wider">DOWNLOADS</h4>
          <ul className="list-disc pl-5 space-y-4 text-[18px]">
            <li className="transition-colors cursor-pointer">Product Catalogue</li>
            <li className="transition-colors cursor-pointer">Fasteners Bolt Standards</li>
            <li className="transition-colors cursor-pointer">Fasteners Nut Standards</li>
          </ul>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="w-full text-center mt-24 pt-8 border-t border-white/10 text-[18px] opacity-90">
        © Copyright. Petrofast Engineers All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;