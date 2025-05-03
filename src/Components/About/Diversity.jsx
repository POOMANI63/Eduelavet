import React, { useEffect } from "react";
import Image from "../../assets/Home_images/image_2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Diversity = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <section className="w-full py-12 md:py-16 bg-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 px-4 flex justify-center items-center mb-6 md:mb-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={Image}
            alt="Diversity"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
        {/* Text Section */}
        <div
          className="w-full md:w-1/2 px-4 text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
            Diversity and Belonging
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Breaking barriers and increasing equal access to opportunity is crucial to advancing the world’s tech workforce.
          </p>
          <button className="p-3 px-6 bg-orange-500 text-white rounded-3xl hover:bg-orange-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Diversity;
