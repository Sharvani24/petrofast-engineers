import React from 'react';

// Hero image (banner for Rounded Bars/Rods)
import barsHero from '../assets/images/3.6/Rounded bars_rods.png';

// Rounded Bars/Rods images (based on your folder directory)
import bar1 from '../assets/images/3.6/3.6.1.png';
import bar2 from '../assets/images/3.6/3.6.2.png';
import bar3 from '../assets/images/3.6/3.6.3.png';
import bar4 from '../assets/images/3.6/3.6.4.png';
import bar5 from '../assets/images/3.6/3.6.5.png';
import bar6 from '../assets/images/3.6/3.6.6.png';


const productData = {
  bars: [
    { name: "J-Bolt", img: bar1 },
    { name: "L-Bolt", img: bar2 },
    { name: "Straight Bolt / Foundation Bolt", img: bar3 },
    { name: "U-Bolt", img: bar4 },
    { name: "Anchor-Foundation Bolt", img: bar5 },
    { name: "Anchor-Foundation Bolt", img: bar6 },
  ],
};

const RoundedBarsPage = () => {
  const products = productData.bars;

  return (
    <section className="w-full bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden px-6 md:px-12 mt-6">
        <img
          src={barsHero}
          alt="Rounded Bars and Rods"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Product Content */}
      <div className="w-full py-16 px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[#b00000] text-[40px] font-bold font-serif uppercase">
            Product Ranges
          </h2>
          <h3 className="text-black text-[25px] font-bold font-serif mt-2">
            J-Bolt/I-Bolt/U-Bolt/L-Bolt
          </h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-99 lg:gap-x-60 max-w-[1600px] mx-auto px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white border border-gray-200 shadow-xl rounded-lg p-6 w-full"
            >
              {/* Title */}
              <h3 className="text-[18px] font-bold mb-4 font-serif text-black">
                {product.name}
              </h3>

              {/* Image */}
              <div className="border border-gray-200 shadow-inner p-4 mb-6 w-full flex justify-center items-center h-[260px] bg-white">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Button */}
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

export default RoundedBarsPage;