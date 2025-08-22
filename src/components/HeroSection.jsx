import React from 'react';

const HeroSection = () => {
    return (
      <div className="relative w-full bg-gray-900 text-white flex items-center justify-center min-h-screen overflow-hidden">
        {/* Non-repeating Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url(https://metaryhtml.websitelayout.net/img/banner/slide-04.jpg)",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Power & Automation
            <br />
            Technologies
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl mx-auto">
            We are driving protection giving organization everywhere on the
            world doing more than 25 years.
          </p>
          <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300">
            Explore services
          </button>
        </div>

        
      </div>
    );
};

export default HeroSection;