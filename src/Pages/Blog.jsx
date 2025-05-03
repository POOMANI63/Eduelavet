import { blogs } from "../assets/data/blog"
import BlogCard from "../Components/Blog/BlogCard";

const Blog = () => (
  <div className="container-fluid  mx-auto py-12 mt-12 p-5 bg-zinc-200">
    <h1 className="text-4xl font-bold text-center mb-8 mx-5">Our Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  </div>
);

export default Blog;
