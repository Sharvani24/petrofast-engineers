import React from 'react';

// Hero image (banner for nuts)
import nutsHero from '../assets/images/3.2/Nuts.png';

// Nut images (7 total)
import nut1 from '../assets/images/3.2/3.2.1.png';
import nut2 from '../assets/images/3.2/3.2.2.png';
import nut3 from '../assets/images/3.2/3.2.3.png';
import nut4 from '../assets/images/3.2/3.2.4.png';
import nut5 from '../assets/images/3.2/3.2.5.png';
import nut6 from '../assets/images/3.2/3.2.6.png';
import nut7 from '../assets/images/3.2/3.2.7.png';

const productData = {
  nuts: [
    { name: "Hex Nut", img: nut1 },
    { name: "Lock Nut", img: nut2 },
    { name: "Heavy Hex Nuts", img: nut3 },
    { name: "Square Nut", img: nut4 },
    { name: "Nylock Nut", img: nut5 },
    { name: "Dome Nut", img: nut6 },
    { name: "Spring Nuts", img: nut7 },
  ],
};

const HexNutsPage = () => {
  const products = productData.nuts;

  return (
    <section className="w-full bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden px-6 md:px-12 mt-6">
        <img
          src={nutsHero}
          alt="Nuts and Fasteners"
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
            Hex Nuts & Other
          </h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-[99px] lg:gap-x-50 max-w-[1500px] mx-auto px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white border border-gray-200 shadow-xl rounded-lg p-6 w-full"
            >
              {/* Title */}
              <h3 className="text-[18px] font-bold mb-4 font-serif text-black uppercase">
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

export default HexNutsPage;