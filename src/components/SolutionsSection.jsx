
import React from 'react';

const SolutionsSection = () => {
 

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <span className="text-orange-500 text-sm font-semibold">FAQ</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
          Solutions for residentials & industries!
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
          Constructor clarifies how you can appreciate top of the line flooring
          patterns like finished wood and with new cover flooring.
        </p>
        <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
          LEARN MORE
        </button>
      </div>

      {/* Right FAQ Section */}
      <div className="md:w-1/3 space-y-4">
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold text-orange-500">
            1. Where i can find instructions to technology process?
          </div>
          <div className="collapse-content text-sm">
            We are committed to providing our customers with exceptional service
            while offering our employees the best training. There are many
            variations of passages of lorem ipsum is simply free text.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold text-orange-500">
            2. How to work with industrium?
          </div>
          <div className="collapse-content text-sm">
            We are committed to providing our customers with exceptional service
            while offering our employees the best training. There are many
            variations of passages of lorem ipsum is simply free text.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold text-orange-500">
            3. Basic part of property for human life?
          </div>
          <div className="collapse-content text-sm">
            We are committed to providing our customers with exceptional service
            while offering our employees the best training. There are many
            variations of passages of lorem ipsum is simply free text.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
