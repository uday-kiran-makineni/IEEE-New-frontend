import React from 'react';
import { galleryItems } from '../data/content';
import Masonry from '../../../components/reactcom/Masonry';
import { ArrowRight } from 'lucide-react';

export const GallerySection = () => {
  return (
    <section id="gallery" className="w-full ">
      <div className="px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600">
            A visual journey through our events and activities
          </p>
        </div>

        {/* Fixed Height and Full Width Gallery */}
        <div className="relative h-[500px] w-full overflow-hidden">
          {/* Top Light Dim Overlay */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-100 to-transparent z-10 pointer-events-none" />

          {/* Masonry Content Container */}
          <div className="relative z-0 w-full h-full">
            <Masonry
              items={galleryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>

          {/* Bottom Light Dim Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent z-10 pointer-events-none" />
        </div>

        {/* View Gallery Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.location.href = '/gallery'}
            className="group relative inline-flex items-center px-8 py-3 text-base font-medium border-2 border-black rounded-full overflow-hidden transition-all duration-300 hover:border-transparent"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full group-hover:translate-x-0 bg-green-500"></span>
            <span className="relative flex items-center justify-center transition-colors duration-300 group-hover:text-white">
              View Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
