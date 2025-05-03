import { useParams, Link } from "react-router-dom";
import { Lists } from "../assets/data/list"; // Import the Lists data containing courses
import { FaEye, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// Helper function to render rating stars
const renderRating = (rating) => {
  const validRating = Number(rating);

  // Ensure the rating is valid
  if (isNaN(validRating) || validRating < 0 || validRating > 5) {
    return <p className="text-gray-500">No Rating Available</p>;
  }

  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-gray-300" />
        ))}
    </div>
  );
};

const CourseList = () => {
  const { category } = useParams(); // Get category from URL parameters

  // Decode the URL-encoded category
  const decodedCategory = decodeURIComponent(category);

  // Fetch the courses for the current category from the Lists object
  const categoryCourses = Lists[decodedCategory] || [];

  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 capitalize text-center mt-10 text-gray-700">
          {decodedCategory.replace("-", " ")}
        </h2>

        {categoryCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                  {course.title}
                </h2>
                <div className="mb-4">{renderRating(course.rating)}</div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {course.duration}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/courses/categories/${decodedCategory}/${course.id}`}
                    className="text-blue-500 hover:underline flex items-center text-sm md:text-base"
                  >
                    <FaEye className="mr-2" /> View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No courses found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
