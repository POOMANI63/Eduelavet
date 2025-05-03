import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Head = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="text-white py-8 px-4 sm:px-8 mt-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Heading Section */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Master Software Skills with Our Expert-Led Course
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Learn Anytime, Anywhere
        </p>

        {/* Button */}
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-md md:text-lg font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Browse Courses
        </button>
      </div>
    </div>
  );
};

export default Head;
