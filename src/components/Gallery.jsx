import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    "src/assets/images/bolts.png",
    "src/assets/images/flatWashers.png",
    "src/assets/images/squareWashers.png",
    "src/assets/images/headBolts.png",
    "src/assets/images/pipes.png",
    "src/assets/images/rods.png",
    "src/assets/images/squareWashers.png",
    "src/assets/images/rings.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 4;

  const nextSlide = () => {
    if (currentIndex < images.length - visibleImages) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const buttonStyle = (isDisabled) => ({
    border: '5px solid #b00000', 
    borderRadius: '50%',
    height: '60px',
    width: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: isDisabled ? 'default' : 'pointer', 
    background: 'white',
    color: '#b00000', 
    fontWeight: '900',
    position: 'relative',
    zIndex: '10',
    padding: '0',
    lineHeight: '1',
    transition: 'all 0.2s ease',
    opacity: 1 
  });

  return (
    <section className="w-full bg-white pt-12">
      <div className="text-center mb-12">
        <h2 
          className="font-serif font-bold text-[#b00000]"
          style={{ fontSize: '34px' }}
        >
          Products Gallery
        </h2>
      </div>

      <div className="relative w-[98%] max-w-[1800px] mx-auto">
        <div className="bg-[#666] py-5 overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out px-[2%]"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` 
            }}
          >
            {images.map((img, index) => (
              <div key={index} className="min-w-[25%] flex justify-center items-center"> 
                <div className="p-1 w-[70%] aspect-square">
                  <img 
                    src={img} 
                    alt={`Product ${index}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 w-full">
          <div className="flex justify-between w-full max-w-[500px] px-4">
            <button 
              onClick={prevSlide} 
              style={buttonStyle(currentIndex === 0)}
              className={currentIndex === 0 ? "" : "hover:bg-[#b00000] hover:text-white active:scale-95"}
            >
               <span style={{ fontSize: '30px', marginBottom: '4px' }}>&lt;</span>
            </button>
            
            <button 
              onClick={nextSlide} 
              style={buttonStyle(currentIndex >= images.length - visibleImages)}
              className={currentIndex >= images.length - visibleImages ? "" : "hover:bg-[#b00000] hover:text-white active:scale-95"}
            >
               <span style={{ fontSize: '30px', marginBottom: '4px' }}>&gt;</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="h-8"></div> 
    </section>
  );
};

export default Gallery;