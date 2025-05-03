import React, { useEffect } from "react";
import { feedBack } from "../../assets/data/feedback.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = () => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const emptyStars = totalStars - filledStars;

    return (
      <>
        {/* Filled Stars */}
        {Array(filledStars)
          .fill()
          .map((_, index) => (
            <span key={`filled-${index}`} className="text-yellow-500 text-xl">
              ★
            </span>
          ))}
        {/* Empty Stars */}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <span key={`empty-${index}`} className="text-gray-300 text-xl">
              ☆
            </span>
          ))}
      </>
    );
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Testimonials That Inspire
        </h1>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedBack.map((student, index) => (
            <div
              key={student.id}
              className="bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col items-center transition transform hover:scale-105 duration-300"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay={`${index * 200}`} // Stagger the animation for each card
            >
              <img
                src={student.image}
                alt={student.name}
                className="h-20 w-20 rounded-full object-cover mb-4 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
              <div className="flex">{renderStars(student.rating)}</div>
              <p className="text-gray-300 mt-4 text-center italic">
                "{student.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
