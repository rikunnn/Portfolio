import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Riku",
  lastName: "Nakamura",
  name: `Riku Nakamura`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "riku.nakamura@example.com",
  location: "America/Denver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Japanese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Updates about my projects and learning journey</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rikunakamura",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rikunakamura/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building full-stack applications with modern technologies</>,
  featured: {
    display: false,
    title: "",
    href: "",
  },
  subline: (
    <>
      I&apos;m Riku, a Computer Science student at Ensign College with a passion for full-stack development.
      <br /> I build practical applications using Next.js, Java, and modern web technologies.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Riku is a Computer Science student at Ensign College with a strong interest in full-stack development.
        He is currently learning frontend technologies including HTML, CSS, and JavaScript, while also studying
        Java for backend development. With hands-on experience in building real-world applications, Riku
        combines technical skills with practical problem-solving abilities.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Project Experience",
    experiences: [
      {
        company: "Accounting Firm - Productivity Management System",
        timeframe: "2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed a productivity management application for an accounting firm using Next.js
            and Google Sheets API to streamline workflow tracking and reporting.
          </>,
          <>
            Implemented real-time data synchronization between the web application and Google Sheets,
            improving team efficiency and data accessibility.
          </>,
        ],
        images: [],
      },
      {
        company: "HR Company - Matching Application",
        timeframe: "2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built a matching application for a recruitment company using Next.js, ChatGPT API,
            and Google Sheets API to automate candidate-job matching processes.
          </>,
          <>
            Integrated AI-powered matching algorithms to analyze candidate profiles and job requirements,
            significantly reducing manual screening time.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Ensign College",
        description: <>Studying Computer Science with focus on full-stack development and software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>Building responsive and interactive user interfaces with modern web technologies.</>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Backend Development",
        description: (
          <>Developing server-side applications and APIs using Java and related technologies.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
        ],
        images: [],
      },
      {
        title: "Full Stack Development",
        description: (
          <>Building complete web applications with Next.js and integrating external APIs for enhanced functionality.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "API Integration",
            icon: "code",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
