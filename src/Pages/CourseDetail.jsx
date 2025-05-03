import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import CertificateForm from "../Components/CourseDetail/CertificateForm";
import { MdPlayCircle, MdClose, MdStar } from "react-icons/md";
import YouTube from "react-youtube";
import { Lists } from "../assets/data/list"; // Assuming the Lists object is imported

const CourseDetail = () => {
  const { category, courseId } = useParams();
  const [isVideoVisible, setIsVideoVisible] = useState(false);


  const [certificateData, setCertificateData] = useState({
    name: "",
    courseName: "",
    date: "",
  });

  // Get the course data from Lists using category and courseId
  const course = Lists[category]?.find((item) => item.id === parseInt(courseId));

  if (!course) {
    return <p>Course not found!</p>;
  }

  const {
    title, // This is the course title
    image,
    videoId,
    duration,
    rating,
    isFree,
    price,
    prerequisites,
    description,
  } = course;

  // Set course name for the certificate dynamically
  React.useEffect(() => {
    setCertificateData((prevData) => ({
      ...prevData,
      courseName: title, // Dynamically setting the course name
      date: new Date().toLocaleDateString(), // Setting today's date as completion date
    }));
  }, [course]);

  const handlePlayVideo = () => {
    setIsVideoVisible(true);
  };

  const handleCloseVideo = () => {
    setIsVideoVisible(false);
  };

  return (
    <div className="bg-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Course Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-6 mt-12">
          {title}
        </h2>

        {/* Course Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-64 lg:h-80 object-cover  rounded-t-lg shadow-lg"
          />
        </div>

        {/* Course Details */}
        <div className="bg-white p-6 shadow-md  rounded-b-lg">
          <p className="text-lg md:text-xl mb-4 font-bold">Duration: {duration}</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <p className="text-lg md:text-xl font-bold mr-2">Rating:</p>
            <span className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <MdStar
                  key={index}
                  color={index < Math.floor(rating) ? "#FFD700" : "#dcdcdc"}
                  size={24}
                />
              ))}
            </span>
          </div>

          <p className="text-lg md:text-xl mb-4 font-bold">
            Prerequisites: {prerequisites}
          </p>
          <p className="text-lg md:text-xl mb-4 font-bold">
            Price:{" "}
            {isFree ? (
              "Free"
            ) : (
              <span className="text-yellow-500 font-bold">${price}</span>
            )}
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description:
          </h3>
          <ul className="list-disc pl-6 mb-4 text-sm md:text-lg">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Play Video Button */}
          <button
            onClick={handlePlayVideo}
            className="bg-orange-600 text-base text-white px-3 rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-orange-700 w-1/2 md:w-auto md:mx-0 md:px-6 py-2"
          >
            <MdPlayCircle size={24} />
            Watch Course Video
          </button>


          {/* Certificate Form */}
          <div className="mt-12">
            <CertificateForm data={certificateData} setData={setCertificateData} />
          </div>

          {/* Video Modal */}
{isVideoVisible && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-90 z-50 flex items-center justify-center">
    <div className="relative bg-gray-950 p-4 md:p-8 rounded-lg shadow-lg flex flex-col items-center max-w-full md:max-w-3xl">
      <YouTube
        videoId={videoId}
        opts={{
          height: "360",
          width: "640",
          playerVars: {
            autoplay: 0,
          },
        }}
        className="w-full"
      />
      <button
        onClick={handleCloseVideo}
        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2"
      >
        <MdClose size={24} />
      </button>
    </div>
  </div>
)}


          {/* Back Link */}
          <div className="flex justify-center mt-6">
            <Link
              to={`/courses/categories/${category}`}
              className="text-blue-500 hover:underline"
            >
              Back to {category} Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
