import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    itlogix,
    tatamotors,
    gssoc,
    carrent,
    jobit,
    tripguide,
    threejs,
    docker,
    firebase,
    mysql,
    tensorflow,
    openai,
    sass
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Proficient Programmer",
      icon: creator,
    },
  ];
  
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
    //here
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    //here
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "typescript",
      icon: typescript,
    },
    {
      name: "openai",
      icon: openai,
    },
    {
      name: "sass",
      icon: sass,
    }
    
  ];
  
  const experiences = [
    {
      title: "AI-ML Intern",
      company_name: "Tata Motors",
      icon: tatamotors,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Engaged in an AI-ML internship at Tata Motors, developing a project titled \"An optimal fleet composition over the years,\" focused on meeting supply-chain demand, minimizing overall costs and ensuring compliance with annual carbon emission limits.",
      ],
    },
    {
      title: "Software Intern",
      company_name: "IT Logix India Pvt Ltd",
      icon: itlogix,
      iconBg: "#383E56",
      date: "May 2023 - July 2023",
      points: [
        "Engaged in a two-month software internship, actively utilizing .NET, ASP.NET, and API integration to contribute to a B2B e-commerce projects and gain hands-on experience in software development.",
      ],
    },
    {
      title: "Open-source Contributor",
      company_name: "Girlscript Summer of Code",
      icon: gssoc,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Actively worked on the frontend part of open source projects such as AEC-Library and OSCode-Community during Girlscript Summer of Code. Improved user experience through UI/UX enhancements and design optimizations",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wizard Wardrobe",
      description:
        "A personal AI Stylist for effortless Outfit Coordination from Your Virtual Wardrobe supported with GPT4o Model.",
      tags: [
        {
          name: "sass",
          color: "pink-text-gradient",
        },
        {
          name: "open-ai",
          color: "blue-text-gradient",
        },
        {
          name: "indexdb",
          color: "green-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpvdXJuYWwlMjB3ZWJzaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      source_code_link: "https://github.com/AdyaVerma03/Wardrobe-Wizard",
    },
    {
      name: "CodeSavvy",
      description:
        "A modern coding platform where users can practice programming in various languages.",
      tags: [
        {
          name: "docker",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1530910417612-701222d79f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      source_code_link: "https://github.com/AdyaVerma03/codesavvy",
    },
    {
      name: "Buildfolio",
      description:
        "An innovative 'Make Your Own Portfolio' platform, empowering users to effortlessly create personalized portfolio websites.",
      tags: [
        {
          name: "react.js",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        
      ],
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
      source_code_link: "https://github.com/AdyaVerma03/buildfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };