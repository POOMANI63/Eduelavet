import { Routes, Route } from "react-router-dom";
import Header from "./RootLayout/Header";
import Footer from "./RootLayout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Categories from "./Components/Courses/Categories";
import CourseList from "./Pages/CourseList";
import CourseDetail from "./Pages/CourseDetail";
import Courses from "./Pages/Courses";
import Blog from "./Pages/Blog"
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import './App.css';
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className=" bg-gradient-to-r from-black to-gray-950 min-h-screen flex flex-col font-roboto">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/courses" element={<Courses />} />

          {/* Route for categories */}
          <Route path="/courses/categories" element={<Categories />} />

          {/* Route for specific course category */}
          <Route path="/courses/categories/:category" element={<CourseList />} />

          {/* Route for specific course details */}
          <Route path="/courses/categories/:category/:courseId" element={<CourseDetail />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    
      <Footer />
    </div>
  );
}

export default App;
