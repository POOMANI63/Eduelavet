import React, { useEffect } from "react";
import VisionImage from "../../assets/Home_images/vision.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <section className="w-full py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:justify-between">
        
        {/* Text Section */}
        <div
          className="w-full md:w-1/2 px-4 text-center md:text-left"
          data-aos="fade-right" // AOS animation for text
          data-aos-duration="1000"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Our vision is to empower individuals and organizations with the knowledge and tools to create a brighter
            future. Together, we envision a sustainable and inclusive future powered by learning and growth.
          </p>
          <button className="p-3 px-6 bg-orange-500 text-white rounded-3xl hover:bg-orange-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 px-4 flex justify-center items-center"
          data-aos="fade-left" // AOS animation for image
          data-aos-duration="1000"
        >
          <img
            src={VisionImage}
            alt="Vision"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
