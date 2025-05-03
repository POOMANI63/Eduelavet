import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Categories = () => {
  const categories = [
    { title: "Web Development", route: "web-development" },
    { title: "Programming Languages", route: "programming-languages" },
    { title: "Data Science", route: "data-science" },
    { title: "Cybersecurity", route: "cybersecurity" },
    { title: "Mobile App Development", route: "mobile-app-development" },
    { title: "Blockchain Technology", route: "blockchain-technology" },
    { title: "Game Development", route: "game-development" },
    { title: "Cloud Computing", route: "cloud-computing" },
    { title: "UI/UX Design", route: "ui-ux-design" },
    { title: "Photography & Video Editing", route: "photography-video-editing" },
    { title: "Digital Marketing", route: "digital-marketing" },
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Course Categories
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 100}`} // Delay for each category
            >
              <h2 className="text-xl text-center sm:text-2xl font-semibold text-orange-600 mb-4 hover:text-orange-800">
                <Link to={`/courses/categories/${category.route}`}>
                  {category.title}
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
