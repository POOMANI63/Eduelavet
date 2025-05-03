import React, { useEffect } from "react";
import MissionImage from "../../assets/Home_images/mission.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <section className="w-full py-12 md:py-16 bg-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
        
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 px-4 flex justify-center items-center mb-6 md:mb-0"
          data-aos="fade-right" // AOS animation for image
          data-aos-duration="1000"
        >
          <img
            src={MissionImage}
            alt="Mission"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 px-4 text-center md:text-left"
          data-aos="fade-left" // AOS animation for text
          data-aos-duration="1000"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Our mission is to leverage technology and creativity to deliver top-notch educational resources, enabling
            individuals to achieve their goals. We are committed to fostering growth and innovation while maintaining
            an unwavering focus on quality and accessibility.
          </p>
          <button className="p-3 px-6 bg-orange-500 text-white rounded-3xl hover:bg-orange-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
