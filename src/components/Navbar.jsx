import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    { label: "Bolts", path: "/products/bolts" },
    { label: "Nuts", path: "/products/nuts" },
    { label: "Washers", path: "/products/washers" },
    { label: "Studs", path: "/products/studs" },
    { label: "Threaded Rods/Bolts", path: "/products/threaded-rods-bolts" },
    { label: "Rounded Bars/Rods", path: "/products/rounded-bars-rods" },
    { label: "Clamps", path: "/products/clamps" },
    { label: "Lifting Products", path: "/products/lifting-products" },
    { label: "Civil Constructions Fasteners", path: "/products/civil-constructions-fasteners" },
    { label: "Petrochemical/ Pipelines", path: "/products/petrochemical-pipelines" },
    { label: "Road Crash Barrier Fasteners", path: "/products/road-crash-barrier-fasteners" },
    { label: "Trading Products", path: "/products/trading-products" },
  ];

  return (
    <nav className="w-full bg-white relative z-[100] border-b border-gray-100 shadow-sm">
      {/* Main Header Row */}
      <div className="flex items-center justify-between lg:justify-start py-6 lg:py-10 px-6 lg:pl-28">
        
        {/* Logo */}
        <div className="flex-shrink-0 lg:mr-24">
          <Link to="/">
            <img 
              src={logo} 
              alt="Petrofast Logo" 
              className="h-10 lg:h-14 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        {/* font-serif applied here */}
        <ul className="hidden lg:flex items-center gap-8 lg:gap-12 font-serif font-bold text-[17px] text-[#6c757d] tracking-wider">
          <li className="hover:text-black transition-colors"><Link to="/">Home</Link></li>
          <li className="hover:text-black transition-colors"><Link to="/about">About</Link></li>
          
          <li className="group relative cursor-pointer hover:text-black transition-colors flex items-center gap-1 py-2">
            Product Range 
            <span className="text-[10px] ml-1 group-hover:rotate-180 transition-transform duration-300">▼</span>
            <ul className="absolute left-0 top-full w-80 hidden group-hover:block z-[110] shadow-2xl rounded-b-lg border-t-4 border-[#212529] overflow-hidden" style={{ backgroundColor: 'rgb(246, 227, 167)' }}>
              {products.map((item, index) => (
                <li key={index} className="border-b border-black/5 last:border-0 hover:bg-[#f0d68c] transition-colors">
                  <Link to={item.path} className="block px-6 py-3 font-medium" style={{ color: 'rgb(176, 0, 0)', fontSize: '18px' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="hover:text-black transition-colors"><Link to="/quality">Quality Certifications</Link></li>
          <li className="hover:text-black transition-colors"><Link to="/enquiry">Enquiry Form</Link></li>
          <li className="hover:text-black transition-colors"><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 border border-gray-300 rounded focus:outline-none"
        >
          <div className="w-6 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-500"></div>
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white pb-6`}>
        {/* Changed from font-sans to font-serif */}
        <ul className="flex flex-col font-serif font-bold text-[16px] text-[#6c757d] space-y-1">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="block py-2.5 px-6 hover:text-black">Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="block py-2.5 px-6 hover:text-black">About</Link></li>
          
          <li className="px-6 py-2.5 flex items-center gap-2 hover:text-black cursor-pointer">
            Product Range <span className="text-[10px]">▼</span>
          </li>

          {/* Small, Compact Product Box */}
          <div className="px-6">
            <ul className="bg-[#f6e3a7] border border-black/10 rounded-sm w-[280px] sm:w-[320px]">
              {products.map((item, index) => (
                <li key={index} className="border-b border-black/5 last:border-0">
                  <Link 
                    to={item.path} 
                    onClick={() => setIsOpen(false)} 
                    className="block px-4 py-2 text-[#b00000] font-medium text-[15px] hover:bg-[#f0d68c]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <li><Link to="/quality" onClick={() => setIsOpen(false)} className="block py-2.5 px-6 hover:text-black">Quality Certifications</Link></li>
          <li><Link to="/enquiry" onClick={() => setIsOpen(false)} className="block py-2.5 px-6 hover:text-black">Enquiry Form</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2.5 px-6 hover:text-black">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;