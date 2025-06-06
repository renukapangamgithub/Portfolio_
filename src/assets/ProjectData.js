import bookAppImage from "./images/book-app.png";
import mollyBearImage from "./images/molly-bear.png";
import beachifyImage from "./images/beachify.png";
import foodDeliveryImage from "./images/food-delivery.png";
import realEstateImage from "./images/real-estate.png";
import decosphereImage from "./images/decosphere.png"; // Add the image import for Decosphere Website

const projectsData = [
  {
    title: "Beachify",
    description:
      "A full-stack web application providing live beach data (using Langitube and Longitude APIs), hotel bookings with Stripe integration, tour guides, chat app with WebSocket, live weather updates, and user reviews with image uploads.",
    progress: 100,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Socket.IO",
      "Multer",
      "Tailwind CSS",
    ],
    demoLink: "https://beachify-final-frontend.onrender.com/home",
    github: "https://github.com/renukapangamgithub/beachify-Final",
    image: beachifyImage, // Ensure beachifyImage is imported or defined
  },
  {
    title: "Food Delivery App",
    description:
      "A feature-rich food delivery application built using the MERN stack. It offers functionalities like restaurant browsing, food ordering, real-time order tracking, and secure payment integration using Stripe. Includes an admin dashboard for managing restaurants, orders, and users.",
    progress: 100,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS", "Stripe"],
    demoLink: "https://food-del-frontend-3.onrender.com",
    github: "https://github.com/renukapangamgithub/food-del",
    image: foodDeliveryImage,
  },
  {
    title: "BookStore App",
    description:
      "A full-stack book store app built using React for the frontend, Node.js for the backend, and MongoDB for database management. It allows users to browse, purchase, and manage books.",
    progress: 100,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    demoLink: "https://book-frontend-1810.onrender.com",
    github: "https://github.com/renukapangamgithub/BOOK.git",
    image: bookAppImage,
  },
  {
    title: "Molly Bear Website",
    description:
      "An e-commerce platform for a bear shop, built using the MERN stack (MongoDB, Express, React, Node.js). Features include user authentication, shopping cart, payment gateway integration, and a chatbot to enhance customer experience by assisting with product inquiries, order tracking, and general support.",
    progress: 50,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    demoLink: "https://molly-bears.netlify.app/",
    github: "https://github.com/renukapangamgithub/TEDDY.git",
    image: mollyBearImage,
  },
  {
    title: "Real Estate Website",
    description:
      "A modern real estate website built using React.js and Tailwind CSS. It provides a user-friendly interface for browsing properties, viewing details, and contacting agents.",
    progress: 100,
    technologies: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    demoLink: "https://real-estate-a808dd.netlify.app",
    github: "https://github.com/renukapangamgithub/Real-Estate-website",
    image: realEstateImage,
  },
  {
    title: "Decosphere",
    description:
      "A creative and interactive platform built using the MERN stack (MongoDB, Express, React, Node.js) for showcasing various home decor products. It offers features like product browsing, detailed views, and easy navigation.",
    progress: 100,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    demoLink: "https://decosphere-frontend1.onrender.com",
    github: "https://github.com/renukapangamgithub/DecoSphere",
    image: decosphereImage,
  },
];

export default projectsData;
