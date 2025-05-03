import React, { useEffect } from 'react';
import Women from '../../assets/Home_images/women.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EduElevate = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-300 container-fluid flex justify-center items-center min-h-screen px-4 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl">
        {/* Content Section */}
        <div className="md:w-1/2 w-full p-6 flex justify-start items-center" data-aos="fade-right" data-aos-duration="1000">
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold mb-2 text-gray-900">
              <span className="text-orange-500">W</span>hy <span className="text-orange-500">E</span>duElevate?
            </p>
            <p className="text-5xl font-extrabold mb-2">Global's Best Online</p>
            <p className="text-orange-500 text-4xl mb-4 font-bold">Software Learning Platform</p>
            <div className="text-gray-500">
              <p className="font-semibold text-lg md:text-xl mb-4">
                EduElevate is a cutting-edge platform designed to help learners develop the skills they need to excel in the ever-evolving tech industry. With a focus on quality education and hands-on experience, EduElevate provides the most up-to-date courses, expert instructors, and a supportive learning environment to empower you to achieve your goals faster.
              </p>
              <p className="font-semibold text-lg md:text-xl">
                Whether you're a beginner or an experienced developer, EduElevate offers tailored learning paths that match your skill level and interests. Join a global community of learners and elevate your career with the best software learning platform.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center items-center mt-8 md:mt-0" data-aos="fade-left" data-aos-duration="1000">
          <img src={Women} alt="EduElevate" className="w-3/4 md:w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default EduElevate;
