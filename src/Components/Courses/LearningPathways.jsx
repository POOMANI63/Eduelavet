import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { pathways } from "../../assets/data/pathways";

const LearningPathways = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1
        className="text-3xl text-white sm:text-4xl font-bold text-center mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Learning Pathways
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pathways.map((pathway, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={`${index * 100}`} // Stagger animations
          >
            {/* Pathway Title */}
            <h2
              className="text-xl sm:text-2xl font-semibold text-orange-600 mb-4"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {pathway.title}
            </h2>

            {/* Description */}
            <p
              className="text-gray-700 text-sm sm:text-base mb-4"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {pathway.description}
            </p>

            {/* Courses List */}
            <h3
              className="text-lg font-medium text-gray-800 mb-2"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Courses Included:
            </h3>
            <ul
              className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              {pathway.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>

            {/* Progress Tracker */}
            <div className="mb-4" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
              <h4 className="text-gray-800 font-medium text-sm sm:text-base mb-2">
                Progress:
              </h4>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-orange-600 h-4 rounded-full"
                  style={{ width: `${pathway.progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                {pathway.progress}% completed
              </p>
            </div>

            {/* Call-to-Action */}
            <button
              className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Explore Pathway
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPathways;
