import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const AchievementsSection = ({ achievements }) => {
  const [currentFrontIndex, setCurrentFrontIndex] = useState(0);

  useEffect(() => {
    if (achievements.length > 0) {
      setCurrentFrontIndex(0);
    }
  }, [achievements]);

  // Auto-rotation effect - change image every second
  useEffect(() => {
    if (achievements.length <= 1) return; // Don't auto-rotate if there's only one or no achievements

    const interval = setInterval(() => {
      setCurrentFrontIndex((prevIndex) => 
        (prevIndex + 1) % achievements.length
      );
    }, 2000); // 1 second interval

    return () => clearInterval(interval);
  }, [achievements.length]);

  const handleMoreClick = () => {
    window.location.href = '/achievements';
  };

  return (
    <section id="achievements" className="bg-white mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600">
            Recognition and awards that reflect our commitment to excellence
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8 lg:gap-12">
          {/* Main Achievement Display - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <img
                src={achievements[currentFrontIndex]?.image || ""}
                alt={achievements[currentFrontIndex]?.title || "Achievement"}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-between space-y-6">
            {/* Achievement Details */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {achievements[currentFrontIndex]?.title}
              </h3>
              <p className="text-gray-600 mb-1">{achievements[currentFrontIndex]?.year}</p>
              <p className="text-gray-700">{achievements[currentFrontIndex]?.description}</p>
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full py-2">
              {achievements.map((achievement, index) => (
                <button
                  key={achievement.title}
                  onClick={() => setCurrentFrontIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 
                    ${currentFrontIndex === index 
                      ? 'ring-2 ring-green-500 ring-offset-2' 
                      : 'ring-1 ring-gray-200 opacity-70 hover:opacity-100'}`}
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Show More Button */}
            <div className="text-center">
              <button
                onClick={handleMoreClick}
                className="group relative inline-flex items-center px-8 py-3 text-base font-medium border-2 border-black rounded-full overflow-hidden transition-all duration-300 hover:border-transparent"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full group-hover:translate-x-0 bg-green-500"></span>
                <span className="relative flex items-center justify-center transition-colors duration-300 group-hover:text-white">
                  Show More Achievements
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
