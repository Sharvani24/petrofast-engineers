import React from 'react';

// Hero image (banner for lifting products)
import liftingHero from '../assets/images/3.8/Lifting Products.png';

// Lifting Products images (based on your folder directory)
import lifting1 from '../assets/images/3.8/3.8.1.png';

const productData = {
  lifting: [
    { name: "Lifting Products", img: lifting1 },
  ],
};

const LiftingProductsPage = () => {
  const products = productData.lifting;

  return (
    <section className="w-full bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden px-6 md:px-12 mt-6">
        <img
          src={liftingHero}
          alt="Lifting Products"
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
            Lifting Products
          </h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-25 lg:gap-x-32 max-w-[1000px] mx-auto px-4">
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

export default LiftingProductsPage;