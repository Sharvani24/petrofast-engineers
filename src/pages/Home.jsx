import React from 'react';
import homeImg from '../assets/images/banner image.png'; 

const Home = () => {
  return (
    <section className="w-full">
      <div className="w-full">
        <img 
          src={homeImg} 
          alt="Fasteners Banner" 
          /* h-auto: allows the image to shrink proportionally 
             max-h-[80vh]: keeps it from being too tall on large screens
          */
          className="w-full h-auto max-h-[80vh] object-cover object-center block"
        />
      </div>
    </section>
  );
};

export default Home;