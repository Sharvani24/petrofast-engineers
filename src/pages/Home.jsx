import React from 'react';
import homeImg from '../assets/images/nuts.png'; 

const Home = () => {
  return (
    <section className="w-full">
      <div className="w-full">
        <img 
          src={homeImg} 
          alt="Fasteners Banner" 
          className="w-full h-[900px] object-cover object-center block"
        />
      </div>
    </section>
  );
};

export default Home;