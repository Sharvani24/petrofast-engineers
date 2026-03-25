import React from 'react';

const Features = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="w-full px-[3%] md:px-[5%]">

        {/* Main Heading */}
        <div className="text-center mb-10">
          <h1 className="text-[#a11111] font-serif text-3xl md:text-[35px] font-bold">
            Welcome to Petrofast Engineers
          </h1>
        </div>

        {/* Intro Text */}
        <div
          className="text-[#444] font-serif text-[19px] md:text-[18px] leading-[1.8] text-justify mb-20px"
          style={{ textJustify: "inter-word" }}
        >
          <p className="mb-6">
            Petrofast Engineers serves the nation by producing highly reliable high tensile fasteners.
            Fasteners ranging from anchor bolts, hex nuts and hex bolts, washers, screws, thread bars,
            eye bolts, t bolts, and stainless steel structural materials are available.
          </p>
          <p>
            Petrofast Engineers believe that infrastructure plays a critical role in ensuring a company's
            growth and success. As a result, we have developed a large and capaciously built infrastructure
            facility at our end that is equipped with modern machines and equipment needed to meet our client's requirements on time.
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[#a11111] font-serif text-2xl md:text-[30px] font-bold">
            Our Distinguish Feature
          </h2>
        </div>

        {/* Feature Grid  */}
        <div className="grid md:grid-cols-3 gap-x-12 lg:gap-x-40 mb-6 w-full">

          {/* Column 1 */}
          <div className="flex flex-col items-start">
            <h3 className="text-[#111] font-serif text-lg md:text-[21px] font-bold mb-5 text-left w-full">
              Variety of Products Range
            </h3>
            <p
              className="text-[#555] font-serif text-[15px] md:text-[18px] leading-relaxed text-justify w-full"
              style={{ textJustify: "inter-word" }}
            >
              Petrofast Engineers manufactures high tensile fasteners for the civil construction,
              petroleum chemical, power and energy sectors, gas and pipeline industries, railway
              fasteners, telecommunications, automotive, and automobile industries.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h3 className="text-[#111] font-serif text-lg md:text-[21px] font-bold mb-5 text-center">
              Quality Testing
            </h3>
            <p
              className="text-[#555] font-serif text-[15px] md:text-[18px] leading-relaxed text-justify"
              style={{ textJustify: "inter-word" }}
            >
              As part of our infrastructure, Petrofast Engineers has an in-house testing unit.
              This testing unit was installed to ensure that the products are manufactured
              precisely in accordance with industrial standards. It has all of the necessary
              gadgets, tools, and instruments.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h3 className="text-[#111] font-serif text-lg md:text-[21px] font-bold mb-5 text-center">
              Materials and Coatings
            </h3>
            <p
              className="text-[#555] font-serif text-[15px] md:text-[18px] leading-relaxed text-justify"
              style={{ textJustify: "inter-word" }}
            >
              Petrofast Engineers can produce steel grades 4, 5, 6, 8, 10, 12, 2H, 8S, 10S, and
              International Standards such as DIN, IS, ISO, ANSI, BS, ASTM, ASME, JIS, EN, and others.
              Our fastener products are available in a variety of finishes such as black, zinc passivation,
              powder coating, and hot dip galvanized, among others.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;