
"use client";

import React, { useEffect, useState } from "react";

const ServiceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      image: "https://metaryhtml.websitelayout.net/img/service/service-01.jpg",
      title: "Industrial Construction",
    },
    {
      image: "https://metaryhtml.websitelayout.net/img/service/service-05.jpg",
      title: "Civil Engineering",
    },
    {
      image: "https://metaryhtml.websitelayout.net/img/service/service-03.jpg",
      title: "Oil & Gas Engineering",
    },
    {
      image: "https://metaryhtml.websitelayout.net/img/service/service-04.jpg",
      title: "Mechanical Engineering",
    },
    {
      image: "https://metaryhtml.websitelayout.net/img/service/service-06.jpg",
      title: "Electrical Engineering",
    },
    {
      image: "https://metaryhtml.websitelayout.net/img/service/service-02.jpg",
      title: "Construction Management",
    },
  ];

  const visibleItems = 3; // Number of images to show at once

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - visibleItems ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="relative w-full bg-gray-900 text-white py-12 px-4">
      <div className="text-center mb-8">
        <span className="text-orange-500 text-sm font-semibold">SERVICE</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
          Providing the best services for our customers
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0 flex items-center justify-center px-2"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-4 text-center w-full">
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold px-4 py-2 rounded">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#ff6900] bg-opacity-50 rounded-full p-2"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? services.length - visibleItems : prevIndex - 1
            )
          }
        >
          ❮
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#ff6900] bg-opacity-50 rounded-full p-2"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === services.length - visibleItems ? 0 : prevIndex + 1
            )
          }
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;
