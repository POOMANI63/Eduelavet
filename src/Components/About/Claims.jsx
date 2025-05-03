import React, { useEffect } from "react";
import { FaMedal } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { GiTrophy, GiDragonShield } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Claims = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="bg-gray-900 py-12">
      {/* Title Section */}
      <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-4xl font-bold text-white">Rewards</h1>
      </div>

      {/* Claims Section */}
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
        
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000">
          <div className="bg-yellow-700 text-white w-20 h-20 flex items-center justify-center rounded-full mb-4">
            <PiMedalFill size={50} />
          </div>
          <p className="text-white text-center">Awarded for Excellence in Customer Service</p>
        </div>

        {/* Claim 2 */}
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1200">
          <div className="bg-blue-700 text-white w-20 h-20 flex items-center justify-center rounded-full mb-4">
            <GiTrophy size={50} />
          </div>
          <p className="text-white text-center">Recognized as Industry Leader in Innovation</p>
        </div>

        {/* Claim 3 */}
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1400">
          <div className="bg-orange-700 text-white w-20 h-20 flex items-center justify-center rounded-full mb-4">
            <FaMedal size={50} />
          </div>
          <p className="text-white text-center">Achieved Best Workplace Certification</p>
        </div>

        {/* Claim 4 */}
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1600">
          <div className="bg-green-700 text-white w-20 h-20 flex items-center justify-center rounded-full mb-4">
            <GiDragonShield size={50} />
          </div>
          <p className="text-white text-center">Ensured Top-Level Data Security and Privacy</p>
        </div>

        {/* Claim 5 */}
        <div className="flex flex-col items-center col-span-2 md:col-span-1" data-aos="fade-up" data-aos-duration="1800">
          <div className="bg-purple-700 text-white w-20 h-20 flex items-center justify-center rounded-full mb-4">
            <FaRankingStar size={50} />
          </div>
          <p className="text-white text-center">Ranked #1 in Employee Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Claims;
