import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  csharp,
  azure,
  dotnet,
  mssql,
  python,
  bootstrap,
  nodejs,
  mongodb,
  git,
  figma,
  nc,
  ailiving,
  fiverr,
  ef,
  goatrello,
  shareme,
  ecommerce,
  musiccollection,
  esports,
  piggame,
  simon,
  guessmynumber,
  soiloptix,
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
    id: "tech",
    title: "Tech Stack",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Back-end Developement",
    icon: backend,
  },
  {
    title: "Software Development",
    icon: creator,
  },
  {
    title: "Mobile App Developement",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
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
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Microsoft SQL Server",
    icon: mssql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Microsoft Azure",
    icon: azure,
  },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Operations Coordinator",
    company_name: "Ai Living Inc.",
    icon: ailiving,
    iconBg: "#fff",
    date: "September 2018 - October 2020",
    points: [
      "Planned and executed multiple interior design exhibitions at national and provincial levels.",
      "Provided strategic direction to internal teams for meeting sales targets.",
      "Conducted thorough financial performance reviews and reported findings to the general manager.",
      "Implemented daily operational plans, including employee assignments and promotional strategies.",
    ],
  },
  {
    title: "Peer Tutor",
    company_name: "Niagara College",
    icon: nc,
    iconBg: "#fff",
    date: "September 2022 - January 2023",
    points: [
      "Collaborated with students to complete homework assignments, identify areas for improvement, and address skill gaps.",
      "Promoted effective study habits and learning skills.",
    ],
  },
  {
    title: "Web Developer (Freelance)",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#fff",
    date: "June 2023 - Present",
    points: [
      "Built web applications with web development best practices using React.js/ASP.NET MVC.",
      "Transformed app designs into front-end code.",
      "Gathered and refined specifications and requirements from clients.",
      "Debuged errors, troubleshoot issues, and performed routine performance optimizations.",
    ],
  },
  {
    title: "Frontend Developer (Volunteer)",
    company_name: "Empowered Futures",
    icon: ef,
    iconBg: "#fff",
    date: "September 2023 - Present",
    points: [
      "Assisted with the on-going video project and built necessary pages using React.js",
      "Developed and maintained company's codebase and architecture.",
      "Collaborated closely with other team members, debuged errors and troubleshoot issues.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was a pleasure to work with Yuhao in programming courses and entrepreneurship. He is an outstanding learner both practically and theoretically. Yuhao maintained high academic grades in my classes.Yuhao is trustworthy, organized, responsible, hardworking, detail-oriented, and demonstrates exceptional problem-solving capability.",
    name: "Peter Vanscoy",
    designation: "Professor",
    company: "Niagara College",
    image: nc,
  },
  {
    testimonial:
      "Congratulations on completing this chapter to move on to the next exciting one! All the best, and please, keep me posted as to what happens next for you 🙂!",
    name: "Marsha Baddeley",
    designation: "Professor",
    company: "Niagara College",
    image: nc,
  },
  {
    testimonial:
      "The website they made for us is very solid. We can't thank them enough!",
    name: "Andrew Benton",
    designation: "DevOps Manager",
    company: "SoilOptix Inc.",
    image: soiloptix,
  },
];

const projects = [
  {
    name: "Goatrello",
    description:
      "Workflow tracking web application that allows users to search, track, and manage on-going projects, providing a convenient and efficient solution for client needs.",
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "Entity Framework",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "jQuery",
        color: "orange-text-gradient",
      },
    ],
    image: goatrello,
    source_code_link: "https://github.com/khalilpyh/Goatrello",
  },
  {
    name: "ShareMe",
    description:
      "A photo-sharing social media web app with a responsive UI interface that allows people to share and download photos.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
      {
        name: "OAuth 2.0",
        color: "orange-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/khalilpyh/ShareMe",
  },
  {
    name: "Ecommerce",
    description:
      "An e-commerce store of headphones allows customers to add items to carts and make the purchase through Stripe.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/khalilpyh/Ecommerce",
  },
  {
    name: "Music Collection",
    description:
      "A progressive web app that manages musician, album, and song records with an integrated identity system.",
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "Entity Framework",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: musiccollection,
    source_code_link: "https://mvcmusic20221206.azurewebsites.net/",
  },
  {
    name: "Esports Manager",
    description:
      "A multi-platform E-sports management app that consumes game, team, and player data from a Web API.",
    tags: [
      {
        name: ".NET MAUI",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "Entity Framework",
        color: "pink-text-gradient",
      },
      {
        name: "XML",
        color: "orange-text-gradient",
      },
    ],
    image: esports,
    source_code_link: "https://github.com/khalilpyh/EsportsManagement_MAUI",
  },
  {
    name: "Pig Game(Dice Game)",
    description:
      "A dice game in which two players race to reach 100 points. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player holds and scores the sum of the rolls.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: piggame,
    source_code_link: "https://github.com/khalilpyh/pig-game",
  },
  {
    name: "Simon Game",
    description:
      "Classic simon game in which the bot creates a series of tones and lights and requires a user to repeat the sequence. ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/khalilpyh/simon-game",
  },
  {
    name: "Guess My Number",
    description: "Guess the number that is randomly generated.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: guessmynumber,
    source_code_link: "https://github.com/khalilpyh/guess-my-number",
  },
];

export { services, technologies, experiences, testimonials, projects };
