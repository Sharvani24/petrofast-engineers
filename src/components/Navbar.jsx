import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  // State to handle mobile menu visibility
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
      {/* Container: flex-row for Desktop, justify-between to place hamburger correctly on Mobile */}
      <div className="flex items-center justify-between lg:justify-start py-6 lg:py-10 px-6 lg:pl-28">
        
        {/* Logo Section */}
        <div className="flex-shrink-0 lg:mr-24">
          <Link to="/">
            <img 
              src={logo} 
              alt="Petrofast Logo" 
              className="h-10 lg:h-14 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION (Visible only on lg screens and up) --- */}
        <ul className="hidden lg:flex items-center gap-8 lg:gap-12 font-serif font-bold text-[15px] text-[#6c757d] uppercase tracking-wider">
          <li className="hover:text-[#212529] transition-colors"><Link to="/">Home</Link></li>
          <li className="hover:text-[#212529] transition-colors"><Link to="/about">About</Link></li>
          
          {/* Dropdown for Desktop */}
          <li className="group relative cursor-pointer hover:text-[#212529] transition-colors flex items-center gap-1 py-2">
            Product Range 
            <span className="text-[10px] ml-1 group-hover:rotate-180 transition-transform duration-300">▼</span>
            <ul className="absolute left-0 top-full w-80 hidden group-hover:block z-[110] shadow-2xl rounded-b-lg border-t-4 border-[#212529] overflow-hidden" style={{ backgroundColor: 'rgb(246, 227, 167)' }}>
              {products.map((item, index) => (
                <li key={index} className="border-b border-black/5 last:border-0 hover:bg-[#f0d68c] transition-colors">
                  <Link to={item.path} className="block px-6 py-3 font-medium normal-case" style={{ color: 'rgb(176, 0, 0)', fontSize: '17px' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="hover:text-[#212529] transition-colors"><Link to="/quality">Quality Certifications</Link></li>
          <li className="hover:text-[#212529] transition-colors"><Link to="/enquiry">Enquiry Form</Link></li>
          <li className="hover:text-[#212529] transition-colors"><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* --- MOBILE HAMBURGER BUTTON (Visible only on Mobile/Tablet) --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 border-2 border-gray-400 rounded-md focus:outline-none"
        >
          {/* Hamburger Icon Bars */}
          <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY (Appears when hamburger is clicked) --- */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t border-gray-100`}>
        <ul className="flex flex-col font-serif font-bold text-[16px] text-gray-700 uppercase p-6 space-y-4">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          
          {/* Mobile Product Range: Simplified as a sub-list */}
          <li className="text-[#b00000]">Product Range</li>
          <ul className="pl-4 space-y-2 normal-case font-medium text-[15px] border-l-2 border-gray-200">
            {products.slice(0, 5).map((item, index) => ( // Showing first 5 for brevity
              <li key={index}><Link to={item.path} onClick={() => setIsOpen(false)}>{item.label}</Link></li>
            ))}
            <li><Link to="/products" className="italic text-gray-500">View All Products...</Link></li>
          </ul>

          <li><Link to="/quality" onClick={() => setIsOpen(false)}>Quality Certifications</Link></li>
          <li><Link to="/enquiry" onClick={() => setIsOpen(false)}>Enquiry Form</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;