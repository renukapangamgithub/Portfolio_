import bookAppImage from "./images/book-app.png";
import mollyBearImage from "./images/molly-bear.png";
import coffeeShopImage from "./images/coffee-shop.png";

const projectsData = [
  {
    title: "BookStore App",
    description: "A full-stack book store app built using React for the frontend, Node.js for the backend, and MongoDB for database management. It allows users to browse, purchase, and manage books.",
    progress: 75,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    demoLink: "https://book-store-front-zeta.vercel.app/",
    github: "https://github.com/renukapangamgithub/Book-storep",
    image: bookAppImage,
  },
  {
    title: "Molly Bear Website",
    description: "An e-commerce platform for a bear shop, built using the MERN stack (MongoDB, Express, React, Node.js).Features include user authentication, shopping cart, payment gateway integration, and a chatbot to enhance customer experience by assisting with product inquiries, order tracking, and general support.",
    progress: 50,
    technologies: ["MongoDB", "Express", "React", "Node.js", "CSS"],
    demoLink: "https://molly-bears.netlify.app/",
    github: "https://github.com/renukapangamgithub/TEDDY.git",
    image: mollyBearImage,
  },
  {
    title: "Coffee Shop Website",
    description: "A React-based e-commerce website for a coffee shop, allowing users to browse products, place orders, and view their shopping cart. It features an interactive and responsive design.",
    progress: 90,
    technologies: ["React", "CSS"],
    demoLink: "https://coffee-shop-c560cc.netlify.app/",
    github: "https://github.com/renukapangamgithub/coffeeshop.git",
    image: coffeeShopImage,
  },
];

export default projectsData;
