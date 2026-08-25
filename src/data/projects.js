import agro from "../assets/projects/agroconnect.png";
import spring from "../assets/projects/springboot.png";
import bus from "../assets/projects/busspass.png";
import portfolio from "../assets/projects/portfolio.png";

const projects = [
  {
    title: "AgroConnect",
    image: agro,
    description:
      "A full-stack web application that connects farmers with agricultural labourers. Farmers can post jobs, labourers can apply, and both can manage applications through a secure dashboard built using Java technologies.",
    tech: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/SrikanthNarisetty4",
    demo: "#",
  },

  {
    title: "Spring Boot CRUD API",
    image: spring,
    description:
      "A RESTful CRUD application developed using Spring Boot with layered architecture, Spring Data JPA, Hibernate, and MySQL. Supports complete Create, Read, Update, and Delete operations.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "REST API",
    ],
    github: "https://github.com/SrikanthNarisetty4",
    demo: "#",
  },

  {
    title: "Bus Pass Management System",
    image: bus,
    description:
      "A web application that digitizes the bus pass application process. Users can apply, renew, and manage passes online through an easy-to-use interface.",
    tech: [
      "Python",
      "Django",
      "SQLite",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    github: "https://github.com/SrikanthNarisetty4",
    demo: "#",
  },

  {
    title: "Personal Portfolio Website",
    image: portfolio,
    description:
      "A responsive portfolio website showcasing my skills, projects, education, and contact information with modern UI, animations, and glassmorphism effects.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
      "JavaScript",
    ],
    github: "https://github.com/SrikanthNarisetty4",
    demo: "#",
  },
];

export default projects;