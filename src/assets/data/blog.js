import State from '../Blog_images/state.jpg'
import Css from '../Blog_images/css.jpg'
import Tailwind from '../Blog_images/tailwind.png'
import PWAs from '../Blog_images/pwa.jpg'
import Dn from '../Blog_images/dn.jpg'
import Rt from '../Blog_images/rt.jpg'
import Js from '../Blog_images/js.jpg'
import Next from '../Blog_images/next.png'
import Git from '../Blog_images/git.jpg'
import Web from '../Blog_images/web.png'
import Dems from '../Blog_images/dems.png'
import Rest from '../Blog_images/rest.png'
import Portfolio from '../Blog_images/portfolio.jpg'
import Jsec from '../Blog_images/jsec.jpg'
import Debug from '../Blog_images/debug.jpg'
import Webpack from '../Blog_images/webpack.png'
import MongoDB from '../Blog_images/mongodb.png'
import Framer from '../Blog_images/framer.jpg'
import Socket from '../Blog_images/socket.png'
import Fjs from '../Blog_images/fjs.png'

export const images = {
    State,
    Css,
    Tailwind,
    PWAs,
    Dn,
    Rt,
    Js,
    Next,
    Git,
    Web,
    Dems,
    Rest,
    Portfolio,
    Jsec,
    Debug,
    Webpack,
    MongoDB,
    Framer,
    Socket,
    Fjs
}




export const blogs = [
  {
    id: 1,
    title: "Understanding React State Management",
    description: "Learn the fundamentals of managing state in React applications.",
    content: `
      State management is one of the most critical aspects of building React applications. 
      This article explains the core concepts of React state, including local state, 
      global state, and derived state. Additionally, it introduces tools like Redux, 
      Context API, and Recoil to handle complex state needs.`,
    image: images.State,
    writtenBy: "Dharani Malairaj",
    publishedDate: "2024-11-05",
  },
  {
    id: 2,
    title: "10 CSS Tricks Every Developer Should Know",
    description: "Enhance your CSS skills with these top 10 tricks and tips.",
    content: `
      CSS is more powerful than it appears. In this post, we uncover advanced tricks 
      like using selectors, CSS Grid, Flexbox alignment, pseudo-classes, 
      and how to use custom properties to maintain consistency in your stylesheets.
    `,
    image: images.Css,
    writtenBy: "John Doe",
    publishedDate: "2015-09-21",
  },
  {
    id: 3,
    title: "Why Tailwind CSS is Revolutionizing Web Design",
    description: "Discover how Tailwind CSS simplifies styling.",
    content: `
      Tailwind CSS offers a utility-first approach to styling, enabling developers to 
      write maintainable and scalable CSS directly in their markup. This post explores 
      its key features, including responsive design, custom themes, and flexibility.
    `,
    image: images.Tailwind,
    writtenBy: "Olivia Wilson",
    publishedDate: "2004-03-02",
  },
  {
    id: 4,
    title: "Introduction to Progressive Web Apps (PWAs)",
    description: "What are PWAs and why are they important?",
    content: `
      Progressive Web Apps (PWAs) combine the best of web and mobile apps. 
      They are reliable, fast, and engaging, providing native app-like experiences. 
      Learn about service workers, caching strategies, and manifest files in this guide.
    `,
    image: images.PWAs,
    writtenBy: "Keith Weaver",
    publishedDate: "1992-11-20",
  },
  
  {
    id: 5,
    title: "Node.js vs. Deno: What Developers Should Know",
    description: "A detailed comparison between Node.js and Deno.",
    content: `
      Node.js and Deno are two powerful runtime environments for JavaScript. 
      This article compares their features, security models, and use cases 
      to help you choose the right one for your project.
    `,
    image: images.Dn,
    writtenBy: "Heidi Novak ",
    publishedDate: "2001-06-09",

  },
  {
    id: 6,
    title: "Building a Responsive Blog with React and Tailwind CSS",
    description: "Step-by-step guide to create a modern blog.",
    content: `
      This guide takes you through building a blog platform using React and 
      Tailwind CSS. It covers setting up components, dynamic routing, and creating 
      reusable styles for responsive design.
    `,
    image: images.Rt,
    writtenBy: "Tina Smith",
    publishedDate: "2007-11-07",
  
  },
  {
    id: 7,
    title: "Mastering Asynchronous JavaScript",
    description: "Understand promises, async/await, and fetch.",
    content: `
      Asynchronous JavaScript is essential for handling API calls, timers, and event loops. 
      This blog breaks down promises, async/await syntax, and the fetch API with practical examples.
    `,
    image: images.Js,
    writtenBy: "Julie Rose",
    publishedDate: "1995-08-22",
  },
  {
    id: 8,
    title: "Introduction to Next.js",
    description: "Learn about the popular React framework.",
    content: `
      Next.js is a React framework for building high-performance applications. 
      This article introduces its features like server-side rendering (SSR), 
      static site generation (SSG), and API routes.
    `,
    image: images.Next,
    writtenBy: "Brandy Hill",
    publishedDate: "2002-04-17",
  },
  {
    id: 9,
    title: "Git Commands Every Developer Must Know",
    description: "Learn essential Git commands for version control.",
    content: `
      Version control is a critical skill for developers. This post lists 
      essential Git commands such as cloning, committing, branching, and merging 
      to streamline your workflow.
    `,
    image: images.Git,
    writtenBy: "William Perry",
    publishedDate: "2011-01-14",
  },
  {
    id: 10,
    title: "How to Optimize Website Performance",
    description: "Best practices for faster websites.",
    content: `
      Website performance is crucial for user experience and SEO. This guide 
      covers techniques like lazy loading, minimizing HTTP requests, using 
      CDNs, and optimizing images.
    `,
    image: images.Web,
    writtenBy: "Julia Benjamin",
    publishedDate: "2019-05-27",
  },
  {
    id: 11,
    title: "Demystifying Web Accessibility",
    description: "Make your websites more inclusive and accessible.",
    content: `
      Web accessibility ensures your site is usable for people with disabilities. 
      Learn about ARIA roles, semantic HTML, keyboard navigation, and testing 
      tools for accessibility compliance.
    `,
    image: images.Dems,
    writtenBy: "Gregory Hill",
    publishedDate: "2013-10-16",
  },
  {
    id: 12,
    title: "Understanding APIs and RESTful Services",
    description: "Learn how APIs work and how to integrate them.",
    content: `
      APIs are a bridge between applications, allowing them to communicate. 
      This article dives into RESTful services, HTTP methods, and best practices 
      for API integration.
    `,
    image: images.Rest,
    writtenBy: "Rebekah Hester",
    publishedDate: "2004-10-31",
  },
  {
    id: 13,
    title: "How to Build a Portfolio with React",
    description: "Create a stunning developer portfolio with React.",
    content: `
      A developer portfolio showcases your skills and projects. This guide helps 
      you build one using React, focusing on design, responsiveness, and content organization.
    `,
    image: images.Portfolio,
    writtenBy: "Kelly Miles",
    publishedDate: "1998-06-08",
  },
  {
    id: 14,
    title: "What’s New in ES2024?",
    description: "Explore the latest JavaScript features.",
    content: `
      Each year, JavaScript introduces new features to enhance development. 
      Learn about the latest additions in ES2024, including pattern matching, 
      temporal API, and updates to existing functions.
    `,
    image: images.Jsec,
    writtenBy: "Erica Rosales",
    publishedDate: "1990-12-25",
  },
  {
    id: 15,
    title: "A Guide to Debugging in React",
    description: "Tips for identifying and fixing React issues.",
    content: `
      Debugging React applications can be tricky. This post provides tips for 
      identifying errors using tools like React Developer Tools, console logs, and breakpoints.
    `,
    image: images.Debug,
    writtenBy: "Christina Lane",
    publishedDate: "2005-12-23",
  },
  {
    id: 16,
    title: "Exploring the Basics of Webpack",
    description: "Understand how Webpack works in modern web development.",
    content: `
      Webpack is a popular module bundler for JavaScript applications. This article 
      covers its basics, including entry points, loaders, plugins, and configurations.
    `,
    image: images.Webpack,
    writtenBy: "Cindy Mcconnell",
    publishedDate: "2008-02-11",
  },
  {
    id: 17,
    title: "Getting Started with MongoDB",
    description: "An introduction to MongoDB for beginners.",
    content: `
      MongoDB is a NoSQL database that stores data in JSON-like documents. 
      Learn about collections, CRUD operations, and connecting MongoDB with Node.js.
    `,
    image: images.MongoDB,
    writtenBy: "Tracey Williams",
    publishedDate: "2013-03-07",
  },
  {
    id: 18,
    title: "Introduction to Framer Motion",
    description: "Create smooth animations in React.",
    content: `
      Framer Motion is a library for creating animations in React. This guide 
      explains its features, including motion components, gestures, and animation controls.
    `,
    image: images.Framer,
    writtenBy: "Michael Rogers",
    publishedDate: "2017-08-20",
  },
  {
    id: 19,
    title: "Building a Chat Application with Socket.io",
    description: "Step-by-step guide to real-time communication.",
    content: `
      Real-time communication is essential in modern applications. This post walks 
      you through building a chat app using React and Socket.io.
    `,
    image: images.Socket,
    writtenBy: "Linda Webb",
    publishedDate: "2022-07-08",
  },
  {
    id: 20,
    title: "The Future of JavaScript: Trends to Watch",
    description: "What’s next for JavaScript?",
    content: `
      JavaScript continues to evolve rapidly. This article discusses trends like 
      serverless functions, JavaScript frameworks, and the role of AI in development.
    `,
    image: images.Fjs,
    writtenBy: "Jared Tran",
    publishedDate: "2019-09-10",
  },
];
