import bookAppImage from "./images/book-app.png";
import mollyBearImage from "./images/molly-bear.png";
import beachifyImage from "./images/beachify.png";
import foodDeliveryImage from "./images/food-delivery.png";
import realEstateImage from "./images/real-estate.png";
import decosphereImage from "./images/decosphere.png"; // Add the image import for Decosphere Website
import interviewIQImage from "./images/interviewIQImage.png";

const projectsData = [
   {
    title: "InterviewIQ.AI",
    description:
      "An AI-powered interview preparation platform where users upload their resume (PDF) to receive personalized AI-generated interview questions and intelligent feedback. Features secure authentication, credit-based access with Razorpay payments, and an interactive dashboard for interview practice.",
    progress: 100,
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT",
      "Razorpay",
      "Framer Motion",
      "Render",
    ],
    demoLink: "https://interviewiqagent-2frontend.onrender.com/",
    github: "https://github.com/renukapangamgithub/InterviewIQAgent",
    image: interviewIQImage,
  },
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
