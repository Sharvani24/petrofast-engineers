import React from 'react';
import commonBanner from '../assets/images/common.png'; 
import isoCert from '../assets/images/certificate.png';

const QualityCert = () => {
  return (
    <section id="quality" className="w-full bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden">
        <img
          src={commonBanner}
          alt="Quality Banner"
          className="w-full h-auto object-cover max-h-[600px]"
        />
      </div>

      {/* Text Content */}
      <div className="w-full py-16 px-6 md:px-20 text-left">
        
        {/* Main Heading */}
        <h2 className="text-[#b00000] font-serif text-[35px] md:text-[36px] font-bold mb-8 text-center">
          Quality Certifications
        </h2>

        {/* Intro Paragraph */}
        <p className="text-[#333333] font-serif text-[20px] font-normal mb-2 text-justify leading-[1.6]">
          We achieved high quality through professional competence, high working motivation, and a service-oriented attitude. Every Petrofast Engineers employee is accountable for the quality of his or her work.
        </p>

        {/* Bulleted List Details */}
        <div className="text-[#333333] font-serif text-[20px] font-normal mb-14 text-justify leading-[1.6] space-y-1">
          <p>- All Petrofast Engineers products are tested and approved in accordance with international standards or our own more stringent internal test procedures developed with the harsh field conditions in mind. In addition, we provide specific testing to our clients' needs based on the project specifications.</p>
          <p>- All fasteners are tested for chemical composition, mechanical properties, dimensions, and coating thickness in accordance with industry standards.</p>
          <p>- All instruments are calibrated in accordance with internal ISO procedures.</p>
          <p>- NDT testing, such as dye penetrant (DP) testing, is performed on fabricated items.</p>
          <p>- PMI testing is performed on exotic materials such as duplex steel, nickel alloys, and as specified by the client. Stringent in-process and final inspection ensures that all products are defect-free.</p>
          <p>- Petrofast Engineers is an ISO 9001:2015 certified organisation.</p>
        </div>

        {/* ISO CERTIFICATION IMAGE SECTION */}
        <div>
          <h3 className="text-[#b00000] font-serif text-[23px] font-bold mb-8 uppercase text-center">
            ISO CERTIFICATION
          </h3>
          
          {/* Certificate Image - Size increased and frame removed */}
          <div className="flex justify-center mt-2">
            <div className="w-full max-w-[1000px]">
              <img 
                src={isoCert} 
                alt="ISO Certificate" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualityCert;