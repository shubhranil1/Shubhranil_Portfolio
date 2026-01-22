import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import heroImg from '../assets/hero_image.png';
import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
    heroImg
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    tags: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'javascript']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [
  {
    title: "My Portfolio Website",
    description: "A personal portfolio to showcase projects and skills, ",
    image: projectImg1,
    tech: ["React", "Node.js","javascript", "tailwind CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Online Educatin Landing Page",
    description: "A responsive landing page for an online education platform with course listings and user testimonials.",
    image: projectImg2,
    tech: ["Html", "Css", "JavaScript", ],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "College Website",
    description: "Making a simple college website for providing information to students and faculty.",
    image: projectImg3,
    tech: ["Html", "Css", "Bootstrap"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Racing Game",
    description: "create a normal racing game .",
    image: projectImg4,
    tech: ["Html", "Css", "JavaScript"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  
];



