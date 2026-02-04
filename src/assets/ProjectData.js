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
      "A full-stack beach discovery platform offering live beach data, hotel and tour bookings, real-time chat, weather updates, and user reviews with image uploads for a complete travel planning experience.",
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
      "A food delivery application allowing users to browse restaurants, place orders, track deliveries in real time, and make secure payments, with an admin dashboard for management.",
    progress: 100,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS", "Stripe"],
    demoLink: "https://food-del-frontend-3.onrender.com",
    github: "https://github.com/renukapangamgithub/food-del",
    image: foodDeliveryImage,
  },
  {
    title: "BookStore App",
    description:
      "A full-stack bookstore application where users can browse, purchase, and manage books through a clean UI backed by a scalable Node.js and MongoDB backend.",
    progress: 100,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    demoLink: "https://book-frontend-1810.onrender.com",
    github: "https://github.com/renukapangamgithub/BOOK.git",
    image: bookAppImage,
  },
  {
    title: "Molly Bear Website",
    description:
      "An e-commerce website for a toy store featuring user authentication, shopping cart, secure payments, and an integrated chatbot to assist users with product queries and orders.",
    progress: 50,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    demoLink: "https://molly-bears.netlify.app/",
    github: "https://github.com/renukapangamgithub/TEDDY.git",
    image: mollyBearImage,
  },
  {
    title: "Real Estate Website",
    description:
      "A responsive real estate website built with React and Tailwind CSS, enabling users to browse properties, view details, and connect with agents through a modern UI.",
    progress: 100,
    technologies: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    demoLink: "https://real-estate-a808dd.netlify.app",
    github: "https://github.com/renukapangamgithub/Real-Estate-website",
    image: realEstateImage,
  },
  {
    title: "Decosphere",
    description:
      "A decor showcase platform designed for browsing home decor products with interactive UI components and smooth navigation for an enhanced user experience.",
    progress: 100,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    demoLink: "https://decosphere-frontend1.onrender.com",
    github: "https://github.com/renukapangamgithub/DecoSphere",
    image: decosphereImage,
  },
];

export default projectsData;
