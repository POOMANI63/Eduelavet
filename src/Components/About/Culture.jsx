import React, { useEffect } from "react";
import { BsChatRightDots } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";
import { GiBookStorm } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const Culture = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <section className="w-full py-12 bg-gray-50">
      {/* Header Section */}
      <div className="container mx-auto px-6 text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Culture Pillars
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          These aren’t just pretty words to post on the office wall. This is who we are. 
          It’s how we work. And it’s how we approach every interaction with each other and our customers.
        </p>
      </div>

      {/* Pillars Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Pillar 1 */}
        <div className="bg-white p-6 rounded-lg shadow-2xl text-center" data-aos="fade-up" data-aos-duration="1000">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <FaHandshake className="text-orange-500 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Customer Obsessed</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            We understand our customers' needs, analyze market trends and competitors, and aim to exceed expectations 
            to deliver exceptional value. Our commitment to customer satisfaction is the cornerstone of our success.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white p-6 rounded-lg shadow-2xl text-center" data-aos="fade-up" data-aos-duration="1200">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <GiBookStorm className="text-orange-500 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Always Learning</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            We continuously improve our operations, expertise, and customer impact. We learn by studying both inside 
            and outside the company, reviewing KPIs and data, reflecting on past experiences, and respectfully challenging each other.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white p-6 rounded-lg shadow-2xl text-center" data-aos="fade-up" data-aos-duration="1400">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <LuBrainCircuit className="text-orange-500 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Aligned and Focused</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            We focus on quality execution of our strategic priorities, using our programs to stay coordinated and drive results. 
            By setting aside lower-priority tasks, we ensure we follow through on our commitments.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white p-6 rounded-lg shadow-2xl text-center" data-aos="fade-up" data-aos-duration="1600">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <BsChatRightDots className="text-orange-500 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Direct and Respectful</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            We provide honest, actionable, real-time feedback and hold each other accountable to deliver on our commitments 
            in a constructive manner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Culture;
