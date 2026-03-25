import React from 'react';
import contactBanner from '../assets/images/contact.png';

const Contact = () => {
  return (
    <main className="w-full bg-white text-gray-800">
      {/* Banner Section */}
      <div className="w-full flex justify-center bg-white -mt-1">
        <div className="w-full max-w-[1800px] overflow-hidden rounded-none">
          <img
            src={contactBanner}
            alt="Contact Banner"
            className="block w-full h-[500px] md:h-[700px] object-cover relative -top-[1px]"
          />
        </div>
      </div>

      {/* Contact Details Section */}
      <section className="max-w-[1300px] mx-auto px-6 py-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#b00000] font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide">
            CONTACT US
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20 mb-12">
          
          {[
            {
              title: "Address 1",
              icon: <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
              content: <>Shop No.C11, Six Wishes,<br />Dyaneshwar Nagar, Jijamata<br />Chauk, Talegaon Dabhade-410506</>
            },
            {
              title: "Phone Number",
              icon: <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.436-4.136-7.032-7.032l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
              content: <>+91 8080884705</>
            },
            {
              title: "Email Id",
              icon: <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
              content: <>petrofastengineers@gmail.com</>
            },
            {
              title: "Address 2",
              icon: <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
              content: <>13., Unique Industrial Estate,<br />Behind Agrwal Hospital, Village,<br />Waliv, Vasai(E).Thane-401208</>
            },
            {
              title: "Phone Number",
              icon: <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.436-4.136-7.032-7.032l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
              content: <><p>+91 9960646524</p><p>+91 8080870443</p></>
            },
            {
              title: "Email Id",
              icon: <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
              content: <>petrofastengineers@gmail.com</>
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-10 border border-black rounded-lg shadow-2xl bg-white text-center h-full min-h-[300px] justify-center">
              <div className="flex flex-col items-center w-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#b00000" className="w-12 h-12 mb-3">
                  {item.icon}
                </svg>
                <div className="font-bold text-[34px] leading-tight text-black font-serif">
                  {item.title}
                </div>
              </div>
              
              <div className="text-sm font-serif leading-relaxed text-gray-700">
                {item.content}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Footer Red Bar */}
      <div className="w-full h-12 bg-[#b00000]"></div>
    </main>
  );
};

export default Contact;