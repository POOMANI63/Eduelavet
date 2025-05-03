import React, { useEffect } from 'react';
import { logos } from '../../assets/data/logodata.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Collaboration = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section className="max-h-screen bg-gray-300 py-12">
      <div className="container-fluid mx-auto text-center px-4">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
          Our Collaboration
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-12" data-aos="fade-up" data-aos-duration="1200">
          Trusted by leading global companies.
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center"
              data-aos="zoom-in" 
              data-aos-duration="1500" 
              data-aos-delay={`${index * 100}`} // Stagger animation for each logo
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
