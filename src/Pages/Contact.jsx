import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from "@react-spring/web";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  // React Spring animation
  const modalAnimation = useSpring({
    scale: isSubmitted ? 1 : 0,
    opacity: isSubmitted ? 1 : 0,
    config: { tension: 300, friction: 20 },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Auto-hide after 3 seconds
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4 mt-12 relative">
      {/* Contact Form */}
      <div
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
        data-aos="fade-up" // Add AOS animation
      >
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Alert Modal */}
      {isSubmitted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <animated.div
            style={modalAnimation}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="animate-bounce bg-green-600 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414-1.414l-6.293 6.293L5.707 7.293a1 1 0 10-1.414 1.414l3.5 3.5a1 1 0 001.414 0l7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hello, {formData.name}!</h2>
            <p className="text-gray-600">
              Your message has been submitted successfully! Thank you for your response. We will
              contact you soon!
            </p>
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default Contact;
