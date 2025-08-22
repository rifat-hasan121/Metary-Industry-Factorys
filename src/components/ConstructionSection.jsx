import React from 'react';

const ConstructionSection = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <span className="text-orange-500 text-sm font-semibold">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Construction & Industrial Agency
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
            The organization has put more than Rs. 3,500 crore into new
            framework and overhauling plans under different passageways
            including streets and rail routes too a wide reach.
          </p>
          <ul className="text-gray-600 text-sm md:text-base space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> We Are Bring
              Quality Services
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Experience And
              Talented
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Offer 24/7 Quick
              Support
            </li>
          </ul>
          <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
            LEARN MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://metaryhtml.websitelayout.net/img/content/about-01.jpg"
            alt="Construction Workers"
            className="rounded-lg object-cover w-full max-w-xs md:max-w-md lg:max-w-lg shadow-lg"
          />
        </div>
      </div>
    );
};

export default ConstructionSection;