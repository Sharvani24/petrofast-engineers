import React from 'react';

// Hero image (banner for Trading Products)
import tradingHero from '../assets/images/3.12/Trading Products.png';

// Trading Products images
import trading1 from '../assets/images/3.12/3.12.1.png';
import trading2 from '../assets/images/3.12/3.12.2.png';
import trading3 from '../assets/images/3.12/3.12.3.png';
import trading4 from '../assets/images/3.12/3.12.4.png';
import trading5 from '../assets/images/3.12/3.12.5.png';
import trading6 from '../assets/images/3.12/3.12.6.png';

const productData = {
  trading: [
    { name: "Round Bars", img: trading1 },
    { name: "Stainless Steel Round Bars", img: trading2 },
    { name: "Pipes & Tubes", img: trading3 },
    { name: "Pipes & Tubes", img: trading4 },
    { name: "Flanges", img: trading5 },
    { name: "Gaskets", img: trading6 },
  ],
};

const TradingProductsPage = () => {
  const products = productData.trading;

  return (
    <main className="w-full bg-white">
      {/* Hero Image - Responsive padding for mobile/desktop */}
      <div className="w-full overflow-hidden px-4 md:px-12 mt-6">
        <img
          src={tradingHero}
          alt="Trading Products"
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
            Trading Products
          </h3>
        </div>

        {/* --- RESPONSIVE GRID ---
            1. grid-cols-1 (Mobile) -> sm:grid-cols-2 (Tablet) -> lg:grid-cols-3 (Desktop)
            2. justify-items-center: Keeps the cards centered when they have a max-width.
            3. max-w-[1300px]: Provides a better layout than 1800px which spreads cards too far.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6 lg:gap-x-[80px] max-w-[1300px] mx-auto px-4 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              /* max-w-[360px] "locks" the size so it doesn't stretch on big screens */
              className="flex flex-col items-center text-center bg-white border border-gray-200 shadow-[0_0px_15px_rgba(0,0,0,0.1)] p-5 w-full max-w-[360px] rounded-none"
            >
              <h3 className="text-[17px] md:text-[18px] font-bold mb-4 font-serif text-black min-h-[50px] flex items-center">
                {product.name}
              </h3>

              {/* Image Container - Fixed height ensures all boxes look uniform */}
              <div className="border border-gray-200 shadow-md p-2 mb-6 w-full flex justify-center items-center h-[240px] md:h-[260px] bg-white">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Button */}
              <button className="bg-[rgb(211,47,47)] text-white font-bold text-[15px] w-full py-3 hover:bg-[rgb(180,40,40)] transition-colors uppercase rounded-none">
                ENQUIRY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TradingProductsPage;