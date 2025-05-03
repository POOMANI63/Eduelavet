import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "How can I access the course videos?",
    answer: "To access the full course videos, you can click on the Learn More button available for each course preview. It will direct you to the course details page where you can enroll and access the complete content.",
  },
  {
    question: "Can I download the videos for offline viewing?",
    answer: "Currently, video downloads are not supported. However, you can access them anytime online after enrolling in the course.",
  },
  {
    question: "Are these courses suitable for beginners?",
    answer: "Yes! Each course specifies its intended audience. For example, Introduction to Web Development is designed for beginners, while advanced courses like Mastering React.js are suitable for those with prior experience.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer: "Yes, upon successfully completing a course, you will receive a digital certificate that you can download and share on professional platforms like LinkedIn.",
  },
  {
    question: "What if I face issues while accessing the course materials?",
    answer: "If you encounter any issues, you can reach out to our support team via the Contact Us page. We’re available 24/7 to assist you with technical or content-related queries.",
  },
];

const CourseFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="bg-gray-200 mx-auto py-12 px-4 md:px-8 lg:px-16">
      <h1
        className="text-3xl font-bold text-center mb-6 text-gray-800"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={`${index * 100}`} // Stagger animations
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-sm md:text-base">{faq.question}</span>
              <span className="text-xl md:text-2xl">{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div
                className="px-4 py-2 text-gray-600 text-sm md:text-base"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFAQs;
