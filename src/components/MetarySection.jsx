import React from 'react';

const MetarySection = () => {
    return (
      <div className="relative w-full py-24 flex items-center justify-center overflow-hidden">
        {/* Container for the text with image overlay */}
        <div className="relative text-center">
          {/* Orange Line */}
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
          {/* Text with Image Overlay */}
          <div className="relative inline-block">
            <h1
              className="text-6xl md:text-7xl lg:text-9xl font-bold text-transparent tracking-wide bg-clip-text"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/construction-silhouette_1150-8336.jpg?semt=ais_hybrid&w=740&q=80)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              Metary
            </h1>
          </div>
        </div>
      </div>
    );
};

export default MetarySection;