import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,DailyEarn,NewsPortal,org,

    clg,school,schoolll,
 
    port_3d, 
  } from "../assets";

  const profiles = [
    {
      link: "https://www.geeksforgeeks.org/user/ankit300i10w/",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
  ];

  const achievements = [
    {
      title: "Awarded Best Performer in Chess at the 2019 School Annual Sports Event.",
    },
    {
      title: "Acted as Team Lead in a college project, managing team coordination, task distribution, and ensuring timely project delivery.",
    },
    
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
  
  
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    {
      id: "java",
      title: "Java",
    },
  
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const javaProject = [
   
    {
  name: "Organizational Chart Backend",
  description:
    "Developed a backend service using Java Spring Boot to support a dynamic organizational chart system. Features include employee invite flows, role hierarchies, and profile management through secure RESTful APIs.",
  tags: [
    {
      name: "Java",
      color: "blue-text-gradient",
    },
    {
      name: "Spring Boot",
      color: "green-text-gradient",
    },
    {
      name: "REST API",
      color: "pink-text-gradient",
    },
  ],
    image: org,
  // Replace with your actual image import
  // Add deployed link if API is hosted
  source_code_link: "https://github.com/ankit-ya/DemoWorked/tree/demo-worked/Demo",
}

    
  ];
  
  
  
  export const webProject = [
    {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://ankit-ya.github.io/Portfolio/",
      source_code_link: "https://github.com/ankit-ya/Portfolio",
    },
    {
  name: "Daily Earn",
  description:
    "Built a MERN stack web application for tracking daily earnings, with features like user authentication task management.Admin and User Dashboard Present . Deployed with a modern UI and responsive design for optimal user experience.",
  tags: [
    {
      name: "MongoDB",
      color: "green-text-gradient",
    },
    {
      name: "ExpressJS",
      color: "blue-text-gradient",
    },
    {
      name: "ReactJS",
      color: "pink-text-gradient",
    },
    {
      name: "NodeJS",
      color: "yellow-text-gradient",
    },
  ],
  image: DailyEarn, // Replace with your actual image import
  source_link: "https://daily-earn-s7mh.vercel.app/",
  source_code_link: "https://github.com/ankit-ya/Daily-Earn",
},
{
  name: "NewsPortal",
  description:
    "Developed a responsive News Portal web application using React and NewsAPI. Users can browse the latest news articles categorized by topics like Sports, Education, and more. Styled with Bootstrap for a clean and intuitive UI.",
  tags: [
    {
      name: "ReactJS",
      color: "blue-text-gradient",
    },
    {
      name: "NewsAPI",
      color: "green-text-gradient",
    },
    {
      name: "Bootstrap",
      color: "pink-text-gradient",
    },
  ],
  image: NewsPortal, // Replace with your actual image import
  source_link: "https://news-portal-web-application.vercel.app/",
  source_code_link: "https://github.com/ankit-ya/NewsPortal-Web-Application",
}


  ];
  
  export const otherProject = [
    {
      name: "Multilingual Multiple Choice Question Generation",
      description:
        "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
   
      source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
      source_code_link: "https://github.com/shinchancode/Final-Year-Project",
    },

  
    
  ];
  
  const experiences = [
   
    {
      title: "Front End Developer Intern",
      company_name: "Shramii",
      icon: "https://shramii.com/SHRAMII.png",
      iconBg: "#383E56",
      date: "Feb 2025 - July 2025",
    
      points: [
        "Contributed to the development of responsive web interfaces using React.js, Vite, and Tailwind CSS, ensuring cross-device compatibility.",
        "Built and maintained employee and employer dashboards featuring modules like task management, payroll, shift planning, and punch clock attendance.",
        "Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.",
        "Utilized modern development tools such as Vite and VS Code to build, preview, and debug web interfaces efficientl  during the development lifecycle.",
      ],
      link: "https://github.com/Shiv7/shramikFEModule/tree/feature/dashboard-responsive",
 
    },
    
  ];
  
  const educations = [
    {
      degree: "Bachelor of Technology ",
      branch:
        "Computer Science and Engineering",
      marks:
        "CGPA : 8.42 / 10",
      name: "Bansal Institute of Engineering and Teachnology(AKTU)",
      year: "(2021 - 2025)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
        "Percentage : 70.00 %",
      name: " SVM Senior Secondary School, Sultanpur, U.P",
      year: "2021",
      image: school,
    },
    {
      degree:
        "10th Grade",
          branch : "Science", 
     
      marks:
        "Percentage : 68.90 %",
      name: "JDS PUB School, Varanasi , U.P",
      year: "2019",
      image: schoolll,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
