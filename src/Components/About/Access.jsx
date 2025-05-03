import React, { useEffect } from "react";
import Five from "../../assets/Home_images/five.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Access = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="bg-white px-6 py-12">
      {/* Outer Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Section: Text */}
        <div
          className="lg:w-1/2 text-center lg:text-left"
          data-aos="fade-right" // AOS animation for text
          data-aos-duration="1000"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Access to technology creates change
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Pluralsight, we see firsthand how technology makes the impossible possible. 
            That's why Pluralsight One exists: to accelerate our mission of advancing the world’s tech 
            workforce by unlocking opportunity for the underrepresented, increasing access to tech skill 
            development, and promoting diversity in the tech workforce.
          </p>
          <button className="p-3 px-6 bg-orange-500 text-white rounded-3xl hover:bg-orange-600 transition duration-300">
            Enjoy Learning
          </button>
        </div>

        {/* Right Section: Images */}
        <div
          className="w-full md:w-1/2 px-4 flex justify-center items-center mb-6 md:mb-0"
          data-aos="zoom-in" // AOS animation for image
          data-aos-duration="1000"
        >
          <img
            src={Five}
            alt="Technology Image"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Access;
