import React, { useEffect } from "react";
import Image from "../../assets/Home_images/about_image.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Teams = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="w-full relative pt-16 pb-8 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row justify-center items-center">
        {/* Text Section */}
        <div
          className="w-full md:w-1/2 px-4 text-center md:text-left"
          data-aos="fade-right" // Animation for text
          data-aos-duration="1000"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
            Transform your tech teams
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At EduElevate, we’re inspiring and empowering the tech workforce to achieve their goals, and that starts
            with making your teams more proficient, your work more efficient and effective—and giving you more to
            celebrate.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 px-4 flex justify-center items-center mt-6 md:mt-0"
          data-aos="zoom-in" // Animation for the image
          data-aos-duration="1000"
        >
          <img
            src={Image}
            alt="Team"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Teams;
