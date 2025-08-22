
import React from 'react';

const ServiceCardsSection = () => {
  const services = [
    {
      image:
        "https://metaryhtml.websitelayout.net/img/portfolio/portfolio-01.jpg",
      title: "Petroleum And Gas",
      description: "Petroleum Engineering & Petroleum Industry",
      link: "#",
    },
    {
      image:
        "https://metaryhtml.websitelayout.net/img/portfolio/portfolio-02.jpg",
      title: "Machine Engineering",
      description: "",
      link: "#",
    },
    {
      image:
        "https://metaryhtml.websitelayout.net/img/portfolio/portfolio-03.jpg",
      title: "Flyover Construction",
      description: "",
      link: "#",
    },
    {
      image:
        "https://metaryhtml.websitelayout.net/img/portfolio/portfolio-04.jpg",
      title: "Warehouse Industry",
      description: "",
      link: "#",
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover opacity-70 hover:opacity-100 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-sm mb-2">{service.description}</p>
              <a href={service.link} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCardsSection;
