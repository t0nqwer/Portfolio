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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cashier,
  dashboard,
  instock,
  webdesign,
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
  // {
  //   id: "projects",
  //   title: "projects",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Stock Management Program",
    company_name: "Khwanta Handicraft",
    icon: instock,
    iconBg: "#383E56",
    points: [
      "Designing and implementing a comprehensive stock management program utilizing Electron.js, React.js, and other relevant technologies.",
      "The program encompasses stock management functionality with cloud synchronization, facilitating seamless stock transfers from the management system to the POS (Point of Sale) system through the cloud, along with robust reporting capabilities.",
      "My focus includes developing an intuitively designed user interface for effortless usability, ensuring compatibility for all users .",
      " From conceptualization to production, I'm  dedicated to crafting a program that meets your stock management needs with efficiency and user-friendly design.",
    ],
    tags: [
      {
        name: "electron",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Admin Dashboard",
    company_name: "Khwanta Handicraft",
    icon: dashboard,
    iconBg: "#E6DEDD",
    points: [
      "Designing and deploying a cutting-edge admin dashboard to streamline stock management processes, utilizing the dynamic combination of React.js and Node.js with MongoDB as the database backend",
      "The admin dashboard is equipped to handle intricate tasks such as maintaining detailed product information with variant sizes and colors, proficient stock management, syncing sales data seamlessly from POS systems across multiple branches, and managing customer information. Additionally, it empowers users to generate insightful reports for in-depth analysis",
      "My commitment extends to providing a responsive design, ensuring optimal functionality across various devices, and guaranteeing seamless cross-browser compatibility for a superior user experience.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Catalog Website",
    company_name: "Khwanta Handicraft",
    icon: webdesign,
    iconBg: "#383E56",
    points: [
      "Crafting and sustaining web applications with a focus on optimal SEO using Next.js and incorporating cutting-edge technologies.",
      " Implementing  responsive design, ensuring a seamless user experience across various devices, and a commitment to cross-browser compatibility for a consistently reliable application.",
    ],
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Pos System",
    company_name: "Khwanta Handicraft",
    icon: cashier,
    iconBg: "#E6DEDD",
    points: [
      "Designing and implementing a comprehensive POS system utilizing Electron.js, React.js, and Node.js, with MongoDB as the database backend.",
      "Pos system can sync data back to the stock management program, and it can also sync data to the cloud for the admin dashboard to use.",
      "My focus includes developing an intuitively designed user interface for effortless usability, ensuring compatibility for all users.",
    ],
    tags: [
      {
        name: "electron",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
