import React, { useState, useEffect } from "react";
import Girl from "../../assets/Home_images/girl-logo.png";
import PythonLogo from "../../assets/Home_images/python-logo.png";
import Ethical from "../../assets/Home_images/ethical-logo.jpg";
import UiUxLogo from "../../assets/Home_images/ui-ux-logo.png";
import SwiftLogo from "../../assets/Home_images/swift-logo.jpg";
import FigmaLogo from "../../assets/Home_images/figma-logo.png";
import UnityLogo from "../../assets/Home_images/unity-logo.png";
import ReactLogo from "../../assets/Home_images/react-logo.png";
import DeepLogo from "../../assets/Home_images/deep-logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const words = [
    "onboard quicker",
    "streamline process",
    "deliver faster",
    "build tech skills",
    "innovate smarter",
    "upgrade your skills",
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length); // Loop back to the first word after the last
    }, 1000); // 1000ms (1 second) interval between words

    AOS.init(); // Initialize AOS

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="container-fluid pt-16 md:pt-20 mb-4">
      <div className="text-gray-200 p-8">
        {/* Text Content */}
        <div className="text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold" data-aos="fade-up">
            EduElevate empowers you to
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl mt-3 font-extrabold" data-aos="fade-up" data-aos-delay="300">
            {words[currentWord]}
          </p>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl" data-aos="fade-up" data-aos-delay="600">
            Develop critical tech skills. Cut cycle times. Build happier, healthier tech teams.
          </p>
          <p className="mt-2 text-lg md:text-xl lg:text-2xl" data-aos="fade-up" data-aos-delay="900">
            And innovate smarter using AI. All with EduElevate.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600" data-aos="zoom-in">
            Register for Free
          </button>
        </div>

        <div className="relative mt-10 flex justify-center items-center">
          {/* Girl Image */}
          <img src={Girl} alt="girl" className="max-w-xs md:max-w-lg lg:max-w-xl" data-aos="fade-up" data-aos-delay="1200" />

          {/* Logos Container */}
          <div className="absolute inset-0 flex flex-wrap justify-between items-center px-2 md:px-10">
            {/* Left Logos */}
            <div className="flex flex-col items-center space-y-6 md:space-y-8">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg" data-aos="fade-up" data-aos-delay="1000">
                <img src={PythonLogo} alt="Python" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg" data-aos="fade-up" data-aos-delay="1000">
                <img src={Ethical} alt="Ethical Hacking" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg" data-aos="fade-up" data-aos-delay="1000">
                <img src={FigmaLogo} alt="Figma" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg" data-aos="fade-up" data-aos-delay="1000">
                <img src={UnityLogo} alt="Unity" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
            </div>

            {/* Right Logos */}
            <div className="flex flex-col items-center space-y-6 md:space-y-8">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg" data-aos="fade-up" data-aos-delay="1000">
                <img src={UiUxLogo} alt="UI/UX" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg" data-aos="fade-up" data-aos-delay="1000">
                <img src={SwiftLogo} alt="Swift" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg" data-aos="fade-up" data-aos-delay="1000">
                <img src={ReactLogo} alt="React" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg" data-aos="fade-up" data-aos-delay="1000">
                <img src={DeepLogo} alt="Deep Learning" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
