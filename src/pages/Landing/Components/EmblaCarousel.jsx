// EmblaCarousel.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EmblaCarousel = ({ items = [], renderItem, autoPlay = true, autoPlaySpeed = 3000 }) => {
  
  const marqueeSpeed = 80;

  return (
    <div className="relative">
      <Marquee 
        gradient={false} 
        speed={marqueeSpeed} 
        pauseOnHover={autoPlay} 
        className="w-full"
      >
        {/* Duplicate items for seamless looping like in PartnersSection */}
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[350px] w-full pr-6 flex-shrink-0"
          >
            {renderItem(item)}
          </div>
        ))}
      </Marquee>

    </div>
  );
};

export default EmblaCarousel;
