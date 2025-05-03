import { BsMortarboardFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const features = [
  {
    icon: <BsMortarboardFill />,
    title: "Expert Instructors",
    description:
      "Learn from industry experts with years of experience in their fields.",
  },
  {
    icon: <ImBooks />,
    title: "Comprehensive Curriculum",
    description:
      "Our courses are designed to cover all aspects of the subject matter in detail.",
  },
  {
    icon: <FaClockRotateLeft />,
    title: "Flexible Learning",
    description: "Access course materials anytime, anywhere, at your own pace.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Community",
    description:
      "Join a community of learners from around the globe and collaborate on projects.",
  },
  {
    icon: <FaChartLine />,
    title: "Career Growth",
    description: "Boost your career prospects with our practical, hands-on training.",
  },
  {
    icon: <FaTrophy />,
    title: "Certification",
    description:
      "Earn a certificate upon completion to showcase your skills and knowledge.",
  },
];

const CourseFeatures = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <section className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Course Features
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 100}`} // Stagger animation for each feature
            >
              {/* Icon */}
              <div className="text-5xl sm:text-6xl mb-4 text-orange-600">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
