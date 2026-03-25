import React, { useState } from 'react';
import enquiryBanner from '../assets/images/enquiry.png';

const Enquiry = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  const FormRow = ({ label, type = "text" }) => (
    <div className="flex flex-col md:flex-row items-center w-full mb-6">
      
      <label className="w-full md:w-[20%] text-left font-bold text-black text-[18px]">
        {label}
      </label>
      
      <input 
        type={type} 
        required 
        className="w-full md:w-[80%] border-2 border-black p-2 h-[45px] 
                   shadow-[0_2px_3px_grey] 
                   focus:outline-none focus:ring-1 focus:ring-gray-400" 
      />
    </div>
  );

  return (
    <section id="enquiry" className="w-full bg-white">
      <div className="w-full flex justify-center bg-white -mt-1">
              <div className="w-full max-w-[1800px] overflow-hidden rounded-none">
                <img
                  src={enquiryBanner}
                  alt="Contact Banner"
                  className="block w-full h-[500px] md:h-[700px] object-cover relative -top-[1px]"
                />
              </div>
            </div>
      <div className="w-full py-12 px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-[#e31e24] font-serif text-[42px] md:text-[52px] mb-1 text-center font-normal">
          Enquiry Form
        </h2>
        <h3 className="text-gray-900 font-serif text-center mb-14 text-[26px]">
          Please Fill the Form Below
        </h3>

        <form onSubmit={handleSubmit} className="w-full max-w-6xl flex flex-col items-center">
          <div className="w-full">
            <FormRow label="Your Name" />
            <FormRow label="Company Name" />
            <FormRow label="Email Id" type="email" />
            <FormRow label="Address" />
            <FormRow label="City" />
            <FormRow label="State" />
            <FormRow label="Contact Number" type="tel" />
            <FormRow label="Country" />
            <FormRow label="Enquiry" />
          </div>

          <div className="text-center mt-12">
            <button 
              type="submit" 
              className="bg-[#fb3c1b] text-white font-bold w-[320px] h-[55px] text-[22px] 
                         hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      <div className="w-full h-12 bg-[#b00000]"></div>
    </section>
  );
};

export default Enquiry;