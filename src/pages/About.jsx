import React from 'react';
import aboutImg from '../assets/images/about.png';

const About = () => {
  return (
    <section id="about" className="w-full bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden">
        <img
          src={aboutImg}
          alt="About Petrofast Team"
          className="w-full h-auto object-cover max-h-[600px]"
        />
      </div>

      {/* Text Content */}
      <div className="w-full py-16 px-6 md:px-20 text-left">
        
        {/* Heading */}
        <h2 className="text-[#b00000] font-serif text-[35px] md:text-[36px] font-bold mb-2 font-serif text-center">
          Welcome to Petrofast Engineers
        </h2>

        {/* Intro Paragraph */}
        <p className="text-black font-serif text-[20px] font-normal mb-5 text-justify leading-[1.5]">
          Petrofast Engineers is the leading manufacturer of fasteners and suppliers ideally located in Vasai,
          Maharashtra with 5000 sq. ft area for manufacturing and stocking of fasteners. Petrofast
          Engineers is a Team of professional who are specialists in Fastener manufacturing.
        </p>

        {/* Informational Blocks */}
        <div className="space-y-14">
          
          <div>
            <h3 className="text-[#b00000] font-serif text-[23px] font-bold mb-4 uppercase font-serif text-center">
              MANUFACTURING FACILITIES
            </h3>
            <p className="text-black text-[20px] font-serif mb-5 text-justify leading-[1.5]">
              Full support equipment like metal cutting, roll threading, cut threading, drilling, bending,
              pressing, tapping, welding, is available. This setup will serve our clientele around the region
              meeting the delivery time expectations. <br />
              We manufacture series of fasteners to IS, BS, DIN, ASTM, ASME, ANSI etc in Carbon steel,
              Stainless steel and other exotic steel materials.
            </p>
          </div>

          <div>
            <h3 className="text-[#b00000] font-serif text-[23px] font-bold mb-4 uppercase font-serif text-center">
              ISO CERTIFICATION
            </h3>
            <p className="text-black text-[20px] font-serif font-normal mb-5 text-justify leading-[1.5]">
              Petrofast Engineers is ISO 9001 : 2015 certified company and is dedicated to providing quality
              products and excellent customer service. <br /> Our firm sustains a quality assurance program which
              covers our purchased products as well as those items which we make or process.
            </p>
          </div>

          <div>
            <h3 className="text-[#b00000] font-serif text-[23px] font-bold mb-4 uppercase font-serif text-center">
              OUR COMMITMENT
            </h3>
            <p className="text-black font-serif text-[20px] font-normal mb-5 text-justify leading-[1.5]">
              Petrofast Engineers is committed to invest in improving the manufacturing technology, invest
              in hi-tech equipment and train manpower periodically and effectively which are necessary to
              meet the quality objectives and customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-[#b00000] font-serif text-[23px] font-bold mb-4 uppercase font-serif text-center">
              TEAM SPIRIT AND ETHICS
            </h3>
            <p className="text-black font-serif text-[20px] font-normal mb-5 text-justify leading-[1.5]">
              Petrofast Engineers encourages team work. This helps to integrate staff within the company
              for Continuous improvement. Petrofast Engineers operates in a highly ethical manner toward
              customers, suppliers, and employees alike, fulfilling work commitments and faithfully
              respecting the values of the team spirit. We have a highly motivated staff who are determined
              to make doing business with a pleasant experience. Please give us a try the next time you
              need bolts, nuts, screws, washers. We would love to have the opportunity to show you how
              we can take care of your needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;