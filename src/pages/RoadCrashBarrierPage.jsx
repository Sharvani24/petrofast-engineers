import React from 'react';

// Hero image (banner for Road Crash Barrier Fasteners)
import crashHero from '../assets/images/3.11/Road Crash Barrier Fastener.png';

// Road Crash Barrier Fasteners images (based on your folder directory)
import crash1 from '../assets/images/3.11/3.11.1.png';
import crash2 from '../assets/images/3.11/3.11.2.png';

const productData = {
  crashBarrier: [
    { name: "Road Crash Barrier Fastener", img: crash1 },
    { name: "Road Crash Barrier Fastener", img: crash2 },
  ],
};

const RoadCrashBarrierPage = () => {
  const products = productData.crashBarrier;

  return (
    <section className="w-full bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden px-6 md:px-12 mt-6">
        <img
          src={crashHero}
          alt="Road Crash Barrier Fasteners"
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
            Road Crash Barrier Fasteners
          </h3>
        </div>

        {/* Product Row (all in one line with bigger gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-[99px] lg:gap-x-50 max-w-[1500px] mx-auto px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center text-center bg-white border border-gray-200 shadow-xl rounded-lg p-6 w-[280px]"
            >
              {/* Title */}
              <h3 className="text-[18px] font-bold mb-4 font-serif text-black">
                {product.name}
              </h3>

              {/* Image */}
              <div className="border border-gray-200 shadow-inner p-4 mb-6 w-full flex justify-center items-center h-[220px] bg-white">
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

export default RoadCrashBarrierPage;