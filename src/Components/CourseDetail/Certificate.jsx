import Logo from '../../assets/Home_images/logos.png';

const Certificate = ({ recipientName, courseName, completionDate, duration, certificateId }) => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white border-4 border-black rounded-lg shadow-lg w-full max-w-4xl p-4 sm:p-8">
        {/* Logo */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <img
            src={Logo}
            alt="EduElevate Logo"
            className="h-10 w-12"
          />
          <div className="text-xl sm:text-3xl font-bold cursor-pointer text-orange-600">
            EduElevate
          </div>
        </div>

        {/* Certificate Title */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-700 mt-4">
          Certificate of Completion
        </h1>

        {/* Recipient Name */}
        <p className="text-sm sm:text-lg text-gray-500 text-center mt-4">
          This certificate is proudly awarded to
        </p>
        <h2 className="text-xl sm:text-3xl font-bold text-blue-700 text-center mt-2">
          {recipientName || "John Doe"}
        </h2>

        {/* Course Name */}
        <p className="text-sm sm:text-lg text-gray-500 text-center mt-4">
          For successfully completing the course
        </p>
        <h3 className="text-lg sm:text-2xl font-semibold text-gray-700 text-center mt-2">
          {courseName || "UI Design with Figma"}
        </h3>

        {/* Course Details */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-gray-500 text-sm sm:text-base">
            <span className="font-bold">Duration:</span> {duration || "4 Weeks"}
          </p>
          <p className="text-gray-500 text-sm sm:text-base">
            <span className="font-bold">Issued on:</span> {completionDate || "MM/DD/YYYY"}
          </p>
        </div>

        {/* Certificate Message */}
        <p className="text-sm sm:text-lg text-gray-500 text-center mt-4 sm:mt-6">
          Congratulations on your dedication and hard work in mastering{" "}
          <span className="font-bold">{courseName || "this course"}!</span>
        </p>

        {/* Certificate ID */}
        <p className="text-xs sm:text-sm text-gray-400 text-center mt-4 sm:mt-6">
          Certificate ID: {certificateId || "C-12345-2024"}
        </p>

        {/* Signatures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div className="text-center">
            <div className="w-32 sm:w-40 h-px bg-gray-300 mx-auto"></div>
            <p className="mt-2 text-sm font-semibold text-gray-700">Authorized Person</p>
            <p className="text-sm text-gray-500">Founder & CEO, EduElevate</p>
          </div>
          <div className="text-center">
            <div className="w-32 sm:w-40 h-px bg-gray-300 mx-auto"></div>
            <p className="mt-2 text-sm font-semibold text-gray-700">Course Instructor</p>
            <p className="text-sm text-gray-500">EduElevate Academy</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-xs sm:text-sm">
            EduElevate - Empowering Online Learners
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Visit us at{" "}
            <a href="https://www.eduelevate.com" className="text-blue-500 underline">
              www.eduelevate.com
            </a>{" "}
            | contact@eduelevate.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
