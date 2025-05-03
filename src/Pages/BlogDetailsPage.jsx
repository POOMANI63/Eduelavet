import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../assets/data/blog";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  if (!blog) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Blog Not Found</h1>
        <p className="text-gray-500 mt-4">
          The blog you're looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="container-fluid mx-auto py-10 px-4 my-16 bg-gradient-to-r from-slate-950 to-gray-800">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mx-auto">
        {/* Blog Header Section */}
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg text-gray-200">{blog.description}</p>
        </div>

        {/* Blog Main Content */}
        <div className="p-8 bg-gray-100">
          <div
            className="mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg border border-black"
            />
          </div>
          <div
            className="prose prose-lg prose-indigo max-w-none mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <p className="leading-relaxed text-gray-900">{blog.content}</p>
          </div>

          {/* Author and Date */}
          <div
            className="mt-12 text-center text-sm"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <p className="text-gray-500">
              Written by{" "}
              <span className="font-semibold text-gray-700">{blog.writtenBy}</span>
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Published on {blog.publishedDate || "MM/DD/YYYY"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
