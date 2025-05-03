import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogCard = ({ blog }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div
      className="border rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Image section */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover md:h-60 lg:h-72"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
      
      {/* Content section */}
      <div className="p-4 bg-white flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4" data-aos="fade-up" data-aos-duration="1000">
            Written by <span className="font-semibold">{blog.writtenBy}</span> on {blog.publishedDate}
          </p>
          <p className="text-gray-600 mb-6 line-clamp-3" data-aos="fade-up" data-aos-duration="1000">
            {blog.description}
          </p>
        </div>
        
        {/* Read More button */}
        <Link to={`/blog/${blog.id}`} data-aos="fade-up" data-aos-duration="1000">
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto text-center">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
