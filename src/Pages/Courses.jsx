import { Outlet } from "react-router-dom";
import Head from '../Components/Courses/Head'
import Categories from "../Components/Courses/Categories";
import CourseFeatures from "../Components/Courses/CourseFeatures";
import CourseFAQs from '../Components/Courses/CourseFAQs'
import LearningPathways from "../Components/Courses/LearningPathways";






const Courses = () => {
  return (
    <div className="container-fluid mx-auto">
      <Head />
      <Outlet />
      <Categories />
      <CourseFeatures />
      <LearningPathways />
      <CourseFAQs />  
      
      
      
    </div>
  );
};

export default Courses;
