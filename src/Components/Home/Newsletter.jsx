import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email input
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate subscription action
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear the email input field
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <section className="newsletter-section bg-gray-300 py-16 text-black">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h2
          className="text-3xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Subscribe to Our Newsletter
        </h2>
        <p
          className="text-lg text-gray-600 mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Stay updated with the latest news, events, and special offers!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 w-full sm:w-auto border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium shadow-md focus:outline-none"
          >
            Subscribe
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 ${
              message.includes("Thank you") ? "text-green-600" : "text-red-600"
            }`}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
