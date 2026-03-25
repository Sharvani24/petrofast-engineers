import React from 'react';

// Hero image (banner for studs)
import studsHero from '../assets/images/3.4/studs.png';

// Stud images (based on your folder directory)
import stud1 from '../assets/images/3.4/3.4.1.png';
import stud2 from '../assets/images/3.4/3.4.2.png';

const productData = {
  studs: [
    { name: "Threaded Studs", img: stud1 },
    { name: "Threaded Studs", img: stud2 },
  ],
};

const StudsPage = () => {
  const products = productData.studs;

  return (
    <section className="w-full bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden px-6 md:px-12 mt-6">
        <img
          src={studsHero}
          alt="Threaded Studs"
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
            All Threaded Studs
          </h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-25 lg:gap-x-90 max-w-[1100px] mx-auto px-4">
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

export default StudsPage;