import React from 'react';
import { useParams } from 'react-router-dom';

// Hero image (default banner)
import boltsHero from '../assets/images/3.1/Bolts.png';

// Bolt images
import bolt1 from '../assets/images/3.1/3.1.1.png';
import bolt2 from '../assets/images/3.1/3.1.2.png';
import bolt3 from '../assets/images/3.1/3.1.3.png';
import bolt4 from '../assets/images/3.1/3.1.4.png';
import bolt5 from '../assets/images/3.1/3.1.5.png';
import bolt6 from '../assets/images/3.1/3.1.6.png';

// Foundation images
import foundation1 from '../assets/images/3.1/3.1.7.png';
import foundation2 from '../assets/images/3.1/3.1.8.png';
import foundation3 from '../assets/images/3.1/3.1.9.png';
import foundation4 from '../assets/images/3.1/3.1.10.png';
import foundation5 from '../assets/images/3.1/3.1.11.png';

const productData = {
  bolts: [
    { name: "Half Threaded Bolts", img: bolt1 },
    { name: "Full Threaded Bolts", img: bolt2 },
    { name: "Allen Bolt", img: bolt3 },
    { name: "Coated Bolts", img: bolt4 },
    { name: "Stainless Steel Bolts", img: bolt5 },
    { name: "Anchor Bolts", img: bolt6 },
  ],
  foundation: [
    { name: "Foundation Bolts", img: foundation1 },
    { name: "Eye Bolts", img: foundation2 },
    { name: "J Type Foundation Bolts", img: foundation3 },
    { name: "U Foundation Bolts", img: foundation4 },
    { name: "L Type Foundation Bolts", img: foundation5 },
  ],
};

const ProductPage = () => {
  const { category } = useParams();

  const products =
    category === "bolts" || category === "all"
      ? [...productData.bolts, ...productData.foundation]
      : productData[category] || [];

  return (
    <section className="w-full bg-white">
      {/* Hero Image - Responsive padding */}
      <div className="w-full overflow-hidden px-4 md:px-12 mt-6">
        <img
          src={boltsHero}
          alt="Bolts and Fasteners"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Product Content */}
      <div className="w-full py-12 md:py-16 px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#b00000] text-[32px] md:text-[40px] font-bold font-serif uppercase">
            Product Ranges
          </h2>
          <h3 className="text-black text-[20px] md:text-[25px] font-bold font-serif mt-2">
            {category === "bolts" || category === "all"
              ? "Hex Bolts & Other"
              : category === "foundation"
              ? "Foundation Bolts & Types"
              : "All Products"}
          </h3>
        </div>

        {/* --- RESPONSIVE PRODUCT GRID ---
            1. grid-cols-1 (Phone) -> sm:grid-cols-2 (Tablet) -> lg:grid-cols-3 (Desktop)
            2. gap-x-[80px]: Visible gap on desktop.
            3. justify-items-center: Keeps the locked boxes centered.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6 lg:gap-x-[80px] max-w-[1300px] mx-auto px-4 justify-items-center">
          {products.map((product, index) => (
            <div 
              key={index} 
              /* FIXED WIDTH: max-w-[360px] prevents the image/box from stretching. */
              className="flex flex-col items-center text-center bg-white border border-gray-200 shadow-xl rounded-lg p-5 w-full max-w-[360px]"
            >
              {/* 1. TITLE */}
              <h3 className="text-[17px] md:text-[18px] font-bold mb-4 font-serif text-black min-h-[50px] flex items-center">
                {product.name}
              </h3>

              {/* 2. IMAGE CONTAINER */}
              <div className="border border-gray-200 shadow-inner p-4 mb-6 w-full flex justify-center items-center h-[240px] md:h-[260px] bg-white">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* 3. BUTTON */}
              <button className="bg-[rgb(211,47,47)] text-white font-bold text-[14px] w-full py-3 rounded hover:bg-[rgb(180,40,40)] transition-colors uppercase">
                ENQUIRY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;