import Html from '../../assets/List/html.jpg'
import Js from '../../assets/List/js.jpg'
import React from '../../assets/List/react.jpg'
import Next from '../../assets/List/next.png'
import Web_design from '../../assets/List/web-design.jpg'
import Python from '../../assets/List/python.jpg'
import Mjs from '../../assets/List/mjs.png'
import Java from '../../assets/List/java.jpg'
import C_Plus from '../../assets/List/cplus.jpg'
import Rust from '../../assets/List/rust.jpg'
import Cs from '../../assets/List/cs.jpg'
import Ruby from '../../assets/List/ruby.png'
import Dv from '../../assets/List/dv.jpg'
import Ml from '../../assets/List/ml.jpg'
import Statistics from '../../assets/List/statistics.jpg'
import Analysis from '../../assets/List/analysis.jpg'
import Dl from '../../assets/List/dl.jpg'
import Ethical from '../../assets/List/ethical.jpg'
import Network from '../../assets/List/network.jpg'
import Penetration from '../../assets/List/penetration.jpg'
import Forensics from '../../assets/List/forensics.jpg'
import Flutter from '../../assets/List/flutter.jpg'
import Native from '../../assets/List/native.png'
import iOS from '../../assets/List/ios.jpg'
import Dart from '../../assets/List/dart.png'
import Design from '../../assets/List/design.jpg'
import Blockchain from '../../assets/List/blockchain.jpg'
import Bitcoin from '../../assets/List/bitcoin.jpg'
import Bfundamentals from '../../assets/List/bfundamentals.jpg'
import Game from '../../assets/List/game.jpg'
import Unity from '../../assets/List/unity.jpg'
import AWS from '../../assets/List/aws.jpg'
import Google from '../../assets/List/google.jpg'
import Azure from '../../assets/List/azure.jpg'
import Figma from '../../assets/List/figma.jpg'
import UI from '../../assets/List/ui.jpg'
import Prototype from '../../assets/List/prototype.jpg'
import Color from '../../assets/List/colors.jpg'
import Photo from '../../assets/List/photo.jpg'
import Video from '../../assets/List/video.jpg'
import Email from '../../assets/List/photo.jpg'
import Social from '../../assets/List/social.jpg'
import Seo from '../../assets/List/seo.jpg'



export const images = {
    Html,
    Js,
    React,
    Next,
    Web_design,
    Python,
    Mjs,
    Java,
    C_Plus,
    Rust,
    Cs,
    Ruby,
    Dv,
    Ml,
    Statistics,
    Analysis,
    Dl,
    Ethical,
    Network,
    Penetration,
    Forensics,
    Flutter,
    Native,
    iOS,
    Dart,
    Design,
    Blockchain,
    Bitcoin,
    Bfundamentals,
    Game,
    Unity,
    AWS,
    Google,
    Azure,
    Figma,
    UI,
    Prototype,
    Color,
    Photo,
    Video,
    Email,
    Social,
    Seo

}

export const Lists = {
    "web-development": [
      { id: 1, title: "HTML & CSS Basics", image: images.Html,videoId: "GAZVvpjxYQY", duration: "3 weeks",rating: 4.5,
  isFree: true,price: 0,prerequisites: "Basic computer skills",
  description: [
          "Understand the structure of HTML and CSS",
          "Learn to create responsive layouts",
          "Develop skills to style web pages with CSS",
          "Explore the basics of HTML forms and input types",
          "Practice through interactive coding exercises",
          "Build your first static webpage from scratch",
        ]
         },
      { id: 2, title: "JavaScript Fundamentals", image: images.Js, videoId: "2Ji-clqUYnA",duration: "4 weeks",rating:4.7,
  isFree: true,price: 0,prerequisites: "HTML & CSS knowledge",
        description: [
           "Learn the core concepts of JavaScript, including variables and data types",
           "Master functions, loops, and conditional statements",
           "Understand the DOM and how to manipulate web page elements",
           "Discover how to handle events and create interactive web applications",
           "Explore JavaScript debugging techniques and error handling",
           "Get introduced to ES6 features like arrow functions and template literals",
        ],
       },
      { id: 3, title: "React for Beginners",image: images.React, videoId: "SqcY0GlETPk",duration: "5 weeks", rating: 4.8, isFree: true,price: 0,prerequisites: "JavaScript basics",description: [
         "Understand the basics of React, including components and JSX",
         "Learn how to manage state using hooks like useState and useEffect",
         "Build reusable components for a modular codebase",
         "Create dynamic single-page applications (SPAs) using React Router",
         "Learn how to fetch data from APIs and display it in your app",
         "Implement best practices for maintaining scalable React projects",
        ],
       },
      { id: 4,title: "Nextjs Quick Start", image: images.Next, videoId: "vwSlYG7hFk0", duration: "3 weeks", rating: 4.6,isFree: false,price: 20,
  prerequisites: "React basics",description: [
         "Learn the basics of server-side rendering (SSR) and static site generation (SSG)",
         "Understand the folder structure and routing mechanism of Nextjs",
         "Build a performance-optimized web application using Nextjs",
         "Fetch data at build time, runtime, and on-demand with Nextjs data fetching methods",
         "Deploy your Nextjs application on popular hosting platforms",
         "Leverage advanced features like API routes and image optimization",
        ],
       },
      { id: 5, title: "Responsive Web Design",image: images.Web_design, videoId: "x4u1yp3Msao",duration: "2 weeks",
  rating: 4.4,isFree: true,price: 0,prerequisites: "HTML & CSS knowledge",description: [
         "Learn the principles of responsive web design and mobile-first approaches",
         "Use CSS media queries to create adaptable layouts for different devices",
         "Build fluid grid systems for better content alignment",
         "Explore modern CSS techniques like Flexbox and Grid for responsive designs",
         "Optimize images and assets for faster loading on mobile devices",
         "Gain experience creating accessible websites for all users"
        ],
       },
    ],
    "programming-languages": [
    { id: 6, title: "Learn Python",
      image: images.Python,
      videoId: "kqtD5dpn9C8",
      duration: "6 weeks", 
      rating: 4.8,
      isFree: true,price: 0,
      prerequisites: "None",
      description: [
       "Understand Python syntax, data types, and variables",
       "Write programs using control structures like loops and conditionals",
       "Explore Python's powerful standard libraries and modules",
       "Handle files and perform data analysis with Python",
       "Learn how to debug and troubleshoot Python applications",
       "Build real-world projects like calculators, web scrapers, and more"
      ],

     },
    { id: 7, 
      title: "Mastering JavaScript", 
      image: images.Mjs, 
      videoId: "E3XxeE7NF30",
      duration: "5 weeks",
      rating: 4.7,
      isFree: false,price: 25,
      prerequisites: "JavaScript basics",
      description: [
       "Explore advanced JavaScript concepts like closures and callbacks",
       "Learn asynchronous programming with Promises and Async/Await",
       "Master object-oriented programming in JavaScript",
       "Understand the event loop and how JavaScript handles concurrency",
       "Work with modern JavaScript frameworks and tools",
       "Build complex web applications using advanced JavaScript techniques"
      ],
     },
    { id: 8, 
      title: "Master Java in 20 Days",
      image: images.Java, 
      videoId: "eIrMbAQSU34",
      duration: "4 weeks",
      rating: 4.6,
      isFree: true,price: 0,
      prerequisites: "Programming basics",
      description: [
         "Learn Java basics including syntax, variables, and data types",
         "Master object-oriented programming concepts like inheritance and polymorphism",
         "Work with Java collections, streams, and file handling",
         "Develop console-based and GUI applications using Java",
         "Explore advanced topics like multithreading and exception handling",
         "Build practical projects like a library management system or a to-do app"
      ],
      
     },
    { id: 9, 
      title: "C++ for Competitive Programming",
      image: images.C_Plus, 
      videoId: "8jLOx1hD3_o",
      duration: "6 weeks",
      rating: 4.5,
      isFree: true,price: 0,
      prerequisites: "Basic programming knowledge",
      description: [
      "Understand the syntax and structure of C++ for problem-solving",
      "Master algorithms and data structures like arrays, stacks, and queues",
      "Learn advanced topics like dynamic programming and graph theory",
      "Optimize code for faster execution and reduced memory usage",
      "Solve real-world competitive programming challenges on platforms like Codeforces",
      "Gain insights into debugging techniques and efficient coding practices"
      ],
     },
    { id: 10, 
      title: "Rust for Beginners",
      image: images.Rust,
      videoId: "fPk-fyP9MFM",
      duration: "3 weeks",
      rating: 4.4,
      isFree: true,price: 0,
      prerequisites: "Basic programming knowledge",
      description: [
         "Learn the basics of Rust syntax and memory management",
         "Understand Rust's unique ownership model for safety and performance",
         "Write concurrent programs using Rust's threading and async features",
         "Explore Rust's ecosystem and libraries for web and system programming",
         "Build a CLI tool or a web server using Rust",
         "Learn to debug and test Rust applications efficiently"
      ],
     },
    { id: 11, 
      title: "C# Game Development",
      image: images.Cs,
      videoId: "TgqAqniukTg",
      duration: "5 weeks", 
      rating: 4.7,
      isFree: false,price: 18,
      prerequisites: "Familiarity with programming and object-oriented concepts",
      description: [
        "Learn the basics of game development using C#",
        "Explore game engines like Unity or Unreal Engine",
        "Understand physics, animations, and game mechanics",
        "Develop your first 2D or 3D game from scratch",
        "Gain insights into debugging and optimizing games",
        "Publish and test your game for different platforms"
      ],

     },
    { id: 12, 
      title: "Learn Ruby in a Week",
      image: images.Ruby,
      videoId: "t_ispmWmdjY",
      duration: "1 week", 
      rating: 4.3,
      isFree: true,price: 0,
      prerequisites: "Basic knowledge of programming fundamentals",
      description: [
        "Learn Ruby's syntax and data structures",
        "Explore concepts like classes, modules, and methods",
        "Understand file handling and error handling in Ruby",
        "Build simple scripts and small applications",
        "Practice coding challenges to reinforce learning",
        "Lay the foundation for exploring Ruby on Rails for web development"
      ],
    },
  ],
  "data-science":[
    { id: 13,
      title: "Data Visualization with Python",
      image: images.Dv,
      videoId: "tse_8LLWtfY",
      duration: "6 weeks",
      rating: 4.8,
      isFree: true,price: 0,
      prerequisites: "Basic knowledge of Python programming",
      description: [
        "Learn the fundamentals of data visualization with libraries like Matplotlib and Seaborn",
        "Understand different types of plots and when to use them",
        "Explore interactive visualizations using Plotly",
        "Analyze trends, patterns, and insights from data",
        "Work on real-world datasets to build compelling visual stories",
        "Learn to communicate data-driven insights effectively"
      ],

     },
    { id: 14,
      title: "Introduction to Machine Learning",
      image: images.Ml,
      videoId: "Gv9_4yMHFhI",
      duration: "6 weeks", 
      rating: 4.7,
      isFree: true,price: 0,
      prerequisites:"Familiarity with Python and basic linear algebra concepts",
      description: [
        "Understand core machine learning algorithms like regression, classification, and clustering",
        "Learn how to preprocess and clean datasets",
        "Work with libraries like Scikit-learn and TensorFlow",
        "Explore concepts of overfitting, underfitting, and hyperparameter tuning",
        "Build your first predictive models on real-world data",
        "Get introduced to ethical considerations in machine learning"

      ],
     },
    { id: 15, 
      title: "Master Statistics for Data Science",
      image: images.Statistics,
      videoId: "Lv0xcdeXaGU",
      duration: "5 weeks",
      rating: 4.6,
      isFree: false,price: 35,
      prerequisites:"Basic math and probability knowledge",
      description: [
        "Understand descriptive and inferential statistics",
        "Learn hypothesis testing, confidence intervals, and p-values",
        "Master statistical distributions and their applications",
        "Apply statistical methods to real-world datasets",
        "Explore the relationship between variables using correlation and regression analysis",
        "Gain practical insights into A/B testing for data-driven decisions"
      ],

     },
    { id: 16,
      title: "SQL for Data Analysis",
      image: images.Analysis,
      videoId: "7mz73uXD9DA",
      duration: "4 weeks",
      rating: 4.5,
      isFree: true,price: 0,
      prerequisites:"Familiarity with basic database concepts",
      description: [
        "Learn to write SQL queries to retrieve, filter, and aggregate data",
        "Understand joins, subqueries, and window functions",
        "Practice on large datasets for business and scientific analysis",
        "Learn how to optimize queries for performance",
        "Explore database management techniques and data warehousing concepts",
        "Build dashboards using SQL with tools like Tableau or Power BI"
      ],


     },
    { id: 17,
      title: "Deep Learning Basics",
      image: images.Dl,
      videoId: "VyWAvY2CF9c",
      duration: "7 weeks", 
      rating: 4.7,
      isFree: true,price: 0,
      prerequisites:"Knowledge of Python and basic machine learning concepts",
      description: [
        "Understand neural networks and their architectures",
        "Learn the fundamentals of backpropagation and gradient descent",
        "Work with libraries like Keras and PyTorch for building deep learning models",
        "Build models for image recognition and text processing tasks",
        "Explore overfitting, regularization, and dropout techniques",
        "Get hands-on with real-world datasets to build deep learning applications"
      ],

     },
  ],
  "cybersecurity": [
    { id: 18,
      title: "Ethical Hacking for Beginners",
      image: images.Ethical, 
      videoId: "w_oxcjPOWos",
      duration: "4 weeks", 
      rating: 4.6,
      isFree: true,price: 0,
      prerequisites: "Basic understanding of computer systems and networking",
      description: [
        "Learn the fundamentals of ethical hacking and its role in cybersecurity",
        "Explore tools and techniques for vulnerability scanning and assessment",
        "Understand the phases of penetration testing: reconnaissance, exploitation, and reporting",
        "Practice ethical hacking in controlled environments",
        "Learn about legal and ethical considerations in hacking",
        "Develop skills to identify and mitigate potential security threats"

      ],

     },
    { id: 19,
      title: "Network Security Basics", 
      image: images.Network, 
      videoId: "NQ1cvwEvh44",
      duration: "5 weeks", 
      rating: 4.5,
      isFree: true,price: 0,
      prerequisites:"Knowledge of basic networking concepts",
      description: [
        "Understand the importance of securing network infrastructures",
        "Learn about firewalls, VPNs, and intrusion detection systems",
        "Explore common network vulnerabilities and how to mitigate them",
        "Configure network security protocols and encryption methods",
        "Practice securing networks through hands-on exercises",
        "Gain insights into managing and monitoring secure network systems"

      ],

     },
    { id: 20,
      title: "Penetration Testing 101",
      image: images.Penetration,
      videoId: "dqm-Lv03AN4",
      duration: "3 weeks", 
      rating: 4.4,
      isFree: false,price: 30,
      prerequisites:"Basic knowledge of operating systems and networking",
      description: [
        "Learn the methodology and techniques of penetration testing",
        "Understand vulnerability scanning and exploit development",
        "Work with popular penetration testing tools like Metasploit and Nmap",
        "Identify and document security weaknesses in various systems",
        "Develop skills to prepare detailed penetration testing reports",
        "Practice ethical penetration testing in lab environments"

      ],

     },
    { id: 21,
      title: "Digital Forensics Overview", 
      image: images.Forensics, 
      videoId: "ZUqzcQc_syE",
      duration: "6 weeks", 
      rating: 4.7,
      isFree: false,price: 50,
      prerequisites:"Basic IT and cybersecurity knowledge",
      description: [
        "Understand the role of digital forensics in incident response",
        "Learn techniques for collecting and preserving digital evidence",
        "Analyze files, logs, and metadata to uncover security breaches",
        "Work with tools like Autopsy and EnCase for forensic investigations",
        "Explore the legal and ethical aspects of digital forensics",
        "Gain hands-on experience in analyzing cybercrime cases"

      ],

     },
  ],
    "mobile-app-development": [
      {
        id: 22,
        title: "Build Apps with Flutter",
        image: images.Flutter,
        videoId: "D4nhaszNW4o",
        duration: "6 weeks",
        rating: 4.8,
        isFree: true,price: 0,
        prerequisites: "Basic programming knowledge",
        description: [
          "Learn the fundamentals of Flutter and Dart",
          "Create responsive and beautiful UI designs",
          "Understand state management with Flutter",
          "Build cross-platform mobile applications",
          "Explore debugging and testing in Flutter",
        ],
      },
      {
        id: 23,
        title: "React Native Crash Course",
        image: images.Native,
        videoId: "ZBCUegTZF7M",
        duration: "5 weeks",
        rating: 4.7,
        isFree: true,price: 0,
        prerequisites: "Knowledge of JavaScript",
        description: [
          "Understand React Native fundamentals",
          "Learn to create reusable components",
          "Build mobile apps for iOS and Android",
          "Integrate APIs into mobile applications",
          "Master React Native debugging tools",
        ],
      },
      {
        id: 24,
        title: "iOS Swift Basics",
        image: images.iOS,
        videoId: "t_mypMqSXNw",
        duration: "4 weeks",
        rating: 4.6,
        isFree: false,price: 20,
        prerequisites: "Familiarity with MacOS",
        description: [
          "Learn the basics of Swift programming",
          "Build simple iOS apps from scratch",
          "Understand UI design in Xcode",
          "Work with iOS libraries and frameworks",
          "Explore app testing and deployment",
        ],
      },
      {
        id: 25,
        title: "Dart Programming Simplified",
        image: images.Dart,
        videoId: "JZukfxvc7Mc",
        duration: "3 weeks",
        rating: 4.5,
        isFree: false,price: 27,
        prerequisites: "Basic programming knowledge",
        description: [
          "Understand Dart syntax and features",
          "Learn object-oriented programming in Dart",
          "Work with Dart collections and data structures",
          "Build simple console applications",
          "Prepare for Flutter app development",
        ],
      },
      {
        id: 26,
        title: "Mobile UI Design Best Practices",
        image: images.Design,
        videoId: "ENA50EGKUoI",
        duration: "2 weeks",
        rating: 4.4,
        isFree: true,price: 0,
        prerequisites: "Basic design knowledge",
        description: [
          "Understand the principles of mobile UI design",
          "Learn to create user-friendly interfaces",
          "Design responsive layouts for different devices",
          "Explore popular design tools for prototyping",
          "Optimize designs for performance and accessibility",
        ],
      },
    ],
    "blockchain-technology": [
      {
        id: 27,
        title: "Blockchain Security Essentials",
        image: images.Blockchain,
        videoId: "WWZ3FaMyex8",
        duration: "5 weeks",
        rating: 4.6,
        isFree: true,price: 0,
        prerequisites: "Basic understanding of blockchain",
        description: [
          "Learn about security challenges in blockchain",
          "Understand cryptography and consensus mechanisms",
          "Explore secure smart contract development",
          "Analyze real-world blockchain attacks",
          "Build strategies for securing blockchain systems",
        ],
      },
      {
        id: 28,
        title: "Cryptocurrency Explained",
        image: images.Bitcoin,
        videoId: "Zoz9gvhLgpM",
        duration: "4 weeks",
        rating: 4.5,
        isFree: false,price: 40,
        prerequisites: "Basic knowledge of digital currencies",
        description: [
          "Understand the basics of cryptocurrency",
          "Learn about Bitcoin, Ethereum, and altcoins",
          "Explore wallets, mining, and blockchain",
          "Study the legal aspects of cryptocurrency",
          "Analyze market trends and trading strategies",
        ],
      },
      {
        id: 29,
        title: "Blockchain Basics for Beginners",
        image: images.Bfundamentals,
        videoId: "QCvL-DWcojc",
        duration: "3 weeks",
        rating: 4.7,
        isFree: true,price: 0,
        prerequisites: "No prior knowledge required",
        description: [
          "Learn the foundation of blockchain technology",
          "Understand blocks, chains, and consensus",
          "Explore blockchain applications beyond crypto",
          "Work with tools like MetaMask and Etherscan",
          "Build a strong base for advanced blockchain topics",
        ],
      },
    ],
    "game-development": [
      {
        id: 30,
        title: "Introduction to Game Development",
        image: images.Game,
        videoId: "eANjGomWZp4",
        duration: "4 weeks",
        rating: 4.8,
        isFree: true,price: 0,
        prerequisites: "Basic programming knowledge",
        description: [
          "Learn the fundamentals of game development",
          "Understand game physics and mechanics",
          "Explore game engines like Unity and Unreal",
          "Design characters, environments, and levels",
          "Create simple 2D and 3D games",
        ],
      },
      {
        id: 31,
        title: "2D Game Development with Unity",
        image: images.Unity,
        videoId: "nPigL-dIqgE",
        duration: "6 weeks",
        rating: 4.7,
        isFree: false,price: 53,
        prerequisites: "Basic knowledge of Unity",
        description: [
          "Understand Unity interface and workflows",
          "Create and animate 2D sprites",
          "Implement physics and collisions in 2D games",
          "Build UI and integrate sound effects",
          "Publish your game on different platforms",
        ],
      },
    ],
    "cloud-computing": [
      {
        id: 32,
        title: "AWS Basics for Beginners",
        image: images.AWS,
        videoId: "k1RI5locZE4",
        duration: "5 weeks",
        rating: 4.7,
        isFree: true,price: 0,
        prerequisites: "Basic IT knowledge",
        description: [
          "Learn AWS core services and features",
          "Understand cloud infrastructure and deployment",
          "Work with S3, EC2, and Lambda functions",
          "Explore IAM and security in AWS",
          "Get hands-on with AWS Management Console",
        ],
      },
      {
        id: 33,
        title: "Google Cloud Essentials",
        image: images.Google,
        videoId: "e385hDgXaAQ",
        duration: "4 weeks",
        rating: 4.6,
        isFree: true,price: 0,
        prerequisites: "Basic understanding of cloud computing",
        description: [
          "Explore Google Cloud products and services",
          "Learn to set up and manage cloud projects",
          "Work with Compute Engine and Cloud Storage",
          "Implement networking and security in GCP",
          "Analyze data using BigQuery",
        ],
      },
      {
        id: 34,
        title: "Azure DevOps Simplified",
        image: images.Azure,
        videoId: "4BibQ69MD8c",
        duration: "3 weeks",
        rating: 4.5,
        isFree: true,price: 0,
        prerequisites: "Basic programming and IT knowledge",
        description: [
          "Learn the fundamentals of Azure DevOps",
          "Understand CI/CD pipelines in Azure",
          "Work with Azure Repos and Test Plans",
          "Automate deployments with Azure Pipelines",
          "Monitor and manage cloud applications",
        ],
      },
    ],
    "ui-ux-design": [
      {
        id: 35,
        title: "UI Design with Figma",
        image: images.Figma,
        videoId: "c9Wg6Cb_YlU",
        duration: "4 weeks",
        rating: 4.7,
        isFree: true,price: 0,
        prerequisites: "Basic design knowledge",
        description: [
          "Learn to use Figma for UI design",
          "Understand layout and typography principles",
          "Create responsive web and mobile designs",
          "Collaborate and prototype with Figma tools",
          "Build UI designs from scratch",
        ],
      },
      {
        id: 36,
        title: "UX Research Fundamentals",
        image: images.UI,
        videoId: "kQ_6faxhyIw",
        duration: "3 weeks",
        rating: 4.6,
        isFree: true,price: 0,
        prerequisites: "No prior knowledge required",
        description: [
          "Understand the UX research process",
          "Learn techniques for user interviews",
          "Analyze user behavior and feedback",
          "Create user personas and journey maps",
          "Prepare for user-centered design projects",
        ],
      },
      {
        id: 37,
        title: "Prototyping with Adobe XD",
        image: images.Prototype,
        videoId: "FOE_GIOEMIA",
        duration: "5 weeks",
        rating: 4.8,
        isFree: false,price: 15,
        prerequisites: "Basic understanding of UI/UX principles",
        description: [
          "Learn to prototype with Adobe XD",
          "Create interactive and clickable mockups",
          "Understand workflows for user testing",
          "Design animations and transitions",
          "Export and share prototypes effectively",
        ],
      },
      {
        id: 38,
        title: "Color Theory for Designers",
        image: images.Color,
        videoId: "-4lMJ4is2pE",
        duration: "2 weeks",
        rating: 4.5,
        isFree: true,price: 0,
        prerequisites: "Basic design knowledge",
        description: [
          "Understand the psychology of colors",
          "Learn to create balanced color palettes",
          "Explore tools for color selection",
          "Apply color theory to UI and branding",
          "Develop an eye for aesthetically pleasing designs",
        ],
      },
    ],
   "photography-video-editing": [
  {
    id: 36,
    title: "Photography Basics",
    image: images.Photo,
    videoId: "qlKR_cEIORY",
    duration: "3 weeks",
    rating: 4.8,
    isFree: true,
    price: 0,
    prerequisites: "A camera or smartphone",
    description: [
      "Understand the basics of photography",
      "Learn camera settings and composition techniques",
      "Master lighting and exposure control",
      "Explore different photography styles",
      "Edit photos using basic editing tools"
    ]
  },
  {
    id: 37,
    title: "Advanced Video Editing",
    image: images.Video,
    videoId: "qDHnCFMZ9HA",
    duration: "6 weeks",
    rating: 4.6,
    isFree: false,
    price: 50,
    prerequisites: "Basic video editing knowledge",
    description: [
      "Learn advanced video editing techniques",
      "Master transitions and effects",
      "Understand color grading and audio syncing",
      "Work with professional editing tools like Premiere Pro",
      "Create polished video projects from start to finish"
    ]
  }
],
"digital-marketing": [
  {
    id: 38,
    title: "Digital Marketing Fundamentals",
    image: images.Seo,
    videoId: "XdAMRDBpZv4",
    duration: "5 weeks",
    rating: 4.9,
    isFree: true,
    price: 0,
    prerequisites: "Basic internet knowledge",
    description: [
      "Understand the principles of digital marketing",
      "Learn SEO and SEM basics",
      "Create effective social media strategies",
      "Understand content marketing techniques",
      "Analyze campaign performance using tools like Google Analytics"
    ]
  },
  {
    id: 39,
    title: "Social Media Advertising",
    image: images.Social,
    videoId: "I2pwcAVonKI",
    duration: "4 weeks",
    rating: 4.7,
    isFree: false,
    price: 40,
    prerequisites: "Familiarity with social media platforms",
    description: [
      "Learn to create and manage ad campaigns",
      "Understand targeting and audience segmentation",
      "Optimize ads for better performance",
      "Work with Facebook Ads Manager and Google Ads",
      "Develop a comprehensive social media advertising strategy"
    ],
  },
  {
    id: 40,
    title: "Email Strategies in Digital Marketing",
    image: images.Email,
    videoId: "U3damKkHT9c",
    duration: "3 weeks",
    rating: 4.8,
    isFree: false,
    price: 30,
    prerequisites: "Basic knowledge of digital marketing",
    description: [
      "Learn to create effective email campaigns",
      "Understand audience segmentation and targeting",
      "Master writing engaging subject lines and content",
      "Explore A/B testing and performance optimization",
      "Use tools like Mailchimp and HubSpot for automation",
      "Analyze and improve email campaign performance"
    ],
  },
  
],

  
}