import React from 'react';

// Hero image (banner for washers)
import washersHero from '../assets/images/3.3/Washers.png';

// Washer images (5 total, based on your folder directory)
import washer1 from '../assets/images/3.3/3.3.1.png';
import washer2 from '../assets/images/3.3/3.3.2.png';
import washer3 from '../assets/images/3.3/3.3.3.png';
import washer4 from '../assets/images/3.3/3.3.4.png';
import washer5 from '../assets/images/3.3/3.3.5.png';

const productData = {
  washers: [
    { name: "Taper Washer", img: washer1 },
    { name: "Plain Washer", img: washer2 },
    { name: "Square Washer / Plate Washer", img: washer3 },
    { name: "Spring Washer", img: washer4 },
    { name: "Fender (3D) Washer", img: washer5 },
  ],
};

const WashersPage = () => {
  const products = productData.washers;

  return (
    <section className="w-full bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden px-6 md:px-12 mt-6">
        <img
          src={washersHero}
          alt="Washers and Fasteners"
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
            Plain / Flat / Spring Washers
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

export default WashersPage;