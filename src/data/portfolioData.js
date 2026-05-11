import { 
  FaNodeJs, 
  FaReact, 
  FaDocker, 
  FaGitAlt, 
  FaDatabase, 
  FaLock, 
  FaLayerGroup, 
  FaNetworkWired, 
  FaServer, 
  FaChartLine, 
  FaAws, 
  FaMicrochip,
  FaTrain
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiGo, 
  SiVite, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiPrisma, 
  SiNginx, 
  SiVercel, 
  SiRender 
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { TbBrandNextjs } from 'react-icons/tb';

import ht1 from '../assets/ht/ht1.png';
import ht2 from '../assets/ht/ht2.png';
import ht3 from '../assets/ht/ht3.png';
import ht4 from '../assets/ht/ht4.png';
import ht5 from '../assets/ht/ht5.png';
import ht6 from '../assets/ht/ht6.png';

import tps1 from '../assets/tps/tps1.png';
import tps2 from '../assets/tps/tps2.png';
import tps3 from '../assets/tps/tps3.png';
import tps4 from '../assets/tps/tps4.png';
import tps5 from '../assets/tps/tps5.png';
import tps6 from '../assets/tps/tps6.png';

import mtf1 from '../assets/mtf/mtf1.png';
import mtf2 from '../assets/mtf/mtf2.png';
import mtf3 from '../assets/mtf/mtf3.png';
import mtf4 from '../assets/mtf/mtf4.png';
import mtf5 from '../assets/mtf/mtf5.png';
import mtf6 from '../assets/mtf/mtf6.png';
import mtf7 from '../assets/mtf/mtf7.png';
import mtf8 from '../assets/mtf/mtf8.png';

import bld1 from '../assets/bld/bld1.png';
import bld2 from '../assets/bld/bld2.png';
import bld3 from '../assets/bld/bld3.png';
import bld4 from '../assets/bld/bld4.png';
import bld5 from '../assets/bld/bld5.png';
import bld6 from '../assets/bld/bld6.png';
import bld7 from '../assets/bld/bld7.png';

import tst11 from '../assets/tst/tst11.png';
import tst12 from '../assets/tst/tst12.png';
import tst13 from '../assets/tst/tst13.png';
import tst14 from '../assets/tst/tst14.png';
import tst15 from '../assets/tst/tst15.png';

export const personalInfo = {
  name: "M.Talha Zaheer",
  role: "Backend-Focused MERN/Golang Developer",
  headline: "Backend-Focused MERN/Golang Developer with a passion for building Scalable Web Systems",
  shortBio: "I specialize in backend-heavy full-stack development, API design, database architecture, authentication, integrations, and system planning.",
  email: "tzaheer72@gmail.com",
  github: "https://github.com/TalhaZaheer1",
  linkedin: "https://www.linkedin.com/in/m-talha-zaheer/",
  twitter: "https://twitter.com"
};

export const skills = {
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "Golang", icon: SiGo },
    { name: "REST APIs", icon: FaNetworkWired },
    { name: "Authentication", icon: FaLock },
    { name: "RBAC", icon: FaLock }
  ],
  frontend: [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: TbBrandNextjs },
    { name: "Vite", icon: SiVite },
    { name: "Tailwind CSS", icon: SiTailwindcss }
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma }
  ],
  devops: [
    { name: "Git", icon: FaGitAlt },
    { name: "Docker basics", icon: FaDocker },
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: VscAzure },
    { name: "Nginx", icon: SiNginx },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiRender },
    { name: "Railway", icon: FaTrain }
  ],
  systemDesign: [
    { name: "Architecture design", icon: FaLayerGroup },
    { name: "API design", icon: FaNetworkWired },
    { name: "Scalability", icon: FaChartLine },
    { name: "Database modeling", icon: FaDatabase },
  ]
};

export const projects = [
  {
    id: 1,
    title: "Hired and Trained",
    thumbnail: ht1,
    images: [ht1, ht2, ht3, ht4, ht5, ht6],
    description: "A multi-role platform connecting event organizers, jobseekers, and coaches.",
    tags: ["MERN", "Stripe Connect", "OAuth", "SSO", "RBAC"],
    problemSolved: "Event organizers, coaches, and jobseekers often rely on disconnected tools for event posting, registrations, coaching sessions, payments, assessments, and communication.",
    backendHighlight: "Platform includes Stripe payments, Stripe Connect, OAuth, SSO, RBAC, dashboards for each role, admin approval workflows, and an event recommendation system.",
    liveDemo: "https://www.hiredandtrained.com",
    codeUrl: ""
  },
  {
    id: 2,
    title: "TAPS",
    thumbnail: tps1,
    images: [tps1, tps2, tps3, tps4, tps5, tps6],
    description: "An internal operations tool for a school bus business to manage employees, shifts, and payroll.",
    tags: ["MERN", "RBAC", "Excel Export/Import"],
    problemSolved: "The school bus business needed a reliable internal system to manage drivers, shifts, attendance, and payroll without relying on manual spreadsheets that are slow and error-prone.",
    backendHighlight: "Interconnected employee and timesheet entities, automated total pay calculation per pay period, and a complete audit trail to track every operation.",
    liveDemo: "",
    codeUrl: ""
  },
  {
    id: 3,
    title: "Metaflow",
    thumbnail: mtf1,
    images: [mtf1, mtf2, mtf3, mtf4, mtf5, mtf6, mtf7, mtf8],
    description: "An AI marketing platform providing structure, memory, and workflow logic for marketing operations.\n(I worked on this platform but did not create it myself)",
    tags: ["Next.js", "AI", "Stripe"],
    problemSolved: "Marketing teams struggle with scattered strategies. Output isn't the hard part; judgment, consistency, and avoiding repeated cognitive cycles are.",
    backendHighlight: "Implemented a credit deduction system based on AI token usage and integrated Stripe-based credit purchasing for usage-based workflows.",
    liveDemo: "https://metaflow.life",
    codeUrl: ""
  },
  {
    id: 4,
    title: "Bildit",
    thumbnail: bld1,
    images: [bld1, bld2, bld3, bld4, bld5, bld6, bld7],
    description: "A multivendor B2B2B SaaS platform for agencies to manage clients, funnels, leads, and billing.",
    tags: ["Next.js", "Node.js", "Stripe", "Shadcn"],
    problemSolved: "Agencies use separate tools for client management, funnels, leads, and billing, creating operational complexity.",
    backendHighlight: "Built unique Accounts Architecture, Stripe subscriptions, Stripe Connect (charge application fee per sale), custom checkouts, and project management integrations.",
    liveDemo: "https://bildit.vercel.app",
    codeUrl: ""
  },
  {
    id: 5,
    title: "T-Shirt Configurator",
    thumbnail: tst11,
    images: [tst11, tst12, tst13, tst14, tst15],
    description: "A 3D model editor for football teams to create custom jersey designs.",
    tags: ["React", "Three.js", "3D Rendering"],
    problemSolved: "Football teams needed an interactive way to design kits instead of relying on flat 2D mockups, making it difficult to visualize the final product.",
    backendHighlight: "Integrated Three.js to allow users to apply assets, change text, adjust fonts, customize colors/stripes, and preview the final design interactively.",
    liveDemo: "",
    codeUrl: ""
  }
];

export const experience = [
  {
    id: 1,
    role: "Senior Backend Developer Placeholder",
    company: "Tech Corp Placeholder",
    duration: "Jan 2022 - Present",
    points: [
      "Designed and implemented RESTful APIs serving 1M+ requests daily.",
      "Optimized database queries, reducing average latency by 40%.",
      "Mentored junior developers on system design principles."
    ]
  },
  {
    id: 2,
    role: "Full Stack MERN Developer Placeholder",
    company: "Startup Placeholder",
    duration: "Mar 2019 - Dec 2021",
    points: [
      "Built the core product MVP from scratch using React and Node.js.",
      "Integrated secure payment gateways (Stripe) and third-party APIs.",
      "Setup CI/CD pipelines using GitHub Actions."
    ]
  }
];

export const backendThinking = [
  {
    id: 1,
    title: "Scalable APIs",
    description: "Designing RESTful APIs that are versioned, well-documented, and built to handle high concurrency with low latency.",
    icon: FaNetworkWired
  },
  {
    id: 2,
    title: "Clean Database Design",
    description: "Focusing on normalization, proper indexing, and choosing the right database paradigm (SQL vs NoSQL) for the specific use case.",
    icon: FaDatabase
  },
  {
    id: 3,
    title: "Authentication & RBAC",
    description: "Implementing secure stateless and stateful authentication flows, along with fine-grained Role-Based Access Control.",
    icon: FaLock
  },
  {
    id: 4,
    title: "Architecture & Maintainability",
    description: "Writing clean, modular code with layered architectures. Taking care of upstream/downstream dependencies, maintainability, and long-term scalability.",
    icon: FaMicrochip
  }
];
