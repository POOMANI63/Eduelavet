import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetail = ({ blog }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <h1
        className="text-4xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {blog.title}
      </h1>
      <p
        className="text-sm text-gray-500"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Written by <span className="font-medium">{blog.writtenBy}</span> on{" "}
        <span className="font-medium">{blog.publishedDate}</span>
      </p>
      <p
        className="mt-6 text-gray-800 leading-relaxed"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetail;
