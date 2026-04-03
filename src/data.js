// ============================================================
//  ALL PORTFOLIO CONTENT — edit this file to update your site
// ============================================================

export const personal = {
  name: 'Rishab Shukla',
  title: 'Software Engineer',
  tagline: 'Backend · Full-Stack · AI Systems',
  location: 'Boston, MA',
  status: 'Open to Work',
  phone: '857-318-8943',
  email: 'rishabjshukla@gmail.com',
  github: 'https://github.com/rishabshukla-code',
  linkedin: 'https://linkedin.com/in/rish-shukla',
  resumeUrl: '/Rishab_Shukla_Resume.pdf',
};

export const about = {
  bio: [
    "I'm a Software Engineer with a Master's in Information Systems from Northeastern University, focused on building systems that are not just functional but scalable, reliable, and actually used by people.",
    "I've worked across backend and full stack development, building production ready applications with Spring Boot and React, and deploying them in real environments. At IpserLab, I contributed to a live platform working on features like authentication, system design improvements, and API driven functionality that directly impacts users.",
    "What excites me most is the intersection of software engineering and AI. I've built systems that go beyond traditional applications, including multi agent AI workflows and retrieval based chat systems, where the goal isn't just to write code but to create intelligent behavior.",
    "Right now I'm looking for opportunities where I can build meaningful systems, solve real world problems, and continue growing as an engineer in backend, full stack or AI focused roles.",
  ],
  educationList: [
    {
      degree: 'Master of Science in Information Systems',
      school: 'Northeastern University',
      location: 'Boston, MA',
      period: 'Sep 2023 – Dec 2025',
      gpa: null,
    },
    {
      degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
      school: 'Visvesvaraya Technological University',
      location: 'Belgaum, India',
      period: 'Aug 2018 – Jun 2022',
      gpa: null,
    },
  ],
};

export const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'IpserLab',
    location: 'Fort Worth, TX',
    period: 'Feb 2025 – May 2025',
    type: 'Internship',
    bullets: [
      'Built a scalable microservices platform using Spring Boot, PostgreSQL, and React, improving data retrieval efficiency and cutting UI load times by 40% through smarter client side rendering',
      'Integrated OAuth2 authentication and role based access control with a clean modular backend design, added password modals and approval pipelines that improved operational efficiency by 30%',
      'Refactored backend and frontend modules using DTO optimizations and reusable React components, resulting in a 20% improvement in maintainability and noticeably better user responsiveness',
      'Built an LLM powered recipe transformation system that handles scaling and ingredient substitution using dynamic prompt pipelines with controlled, structured output',
    ],
    tech: ['Spring Boot', 'PostgreSQL', 'React', 'OAuth2', 'LLM', 'DTO', 'Microservices'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Netzwerk.AI',
    location: 'Gulbarga, India',
    period: 'Jul 2022 – Aug 2023',
    type: 'Full-time',
    bullets: [
      'Led the full SDLC of a Learning Management System using Spring Boot, JSP/JSTL, Hibernate, and MySQL, integrating 12 web pages with robust user authentication and reducing login issues by 30%',
      'Built and optimized 100+ RESTful web services, cutting backend response times by 15%, and designed MySQL schemas for 5,000+ records supporting course management for 200+ users',
      'Worked closely with cross functional teams to resolve 30+ issues through unit testing, debugging, and validation, improving overall application performance by 20%',
      'Improved platform reliability through structured exception handling, better Hibernate query patterns, and tightened validation workflows',
    ],
    tech: ['Spring Boot', 'Hibernate', 'MySQL', 'JSP/JSTL', 'Java', 'REST API'],
  },
];

export const projects = [
  {
    title: 'AI Powered Coding Assistant',
    category: 'AI',
    emoji: '🤖',
    period: 'Dec 2025 – Jan 2026',
    description: 'An agentic AI system built with LangGraph that autonomously plans, generates, and refines full stack applications from natural language prompts. Uses a Planner, Architect, and Coder pipeline with tool calling, file system execution, and validation loops for multi file code generation.',
    tech: ['LangGraph', 'GPT-OSS (Llama 3.x)', 'Groq', 'Python', 'Multi-agent', 'Tool-calling'],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: 'ChatBot using LLMs',
    category: 'AI',
    emoji: '🧠',
    period: 'Nov 2025 – Dec 2025',
    description: 'A RAG based chatbot that accepts PDF uploads, extracts and chunks content, generates embeddings, and answers questions using OpenAI and LangChain. Powered by FAISS for fast semantic search with a clean Streamlit UI for real time querying.',
    tech: ['Python', 'Streamlit', 'LangChain', 'OpenAI API', 'FAISS', 'RAG'],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: 'Vector-Music',
    category: 'AI',
    emoji: '🎵',
    period: '2026',
    description: "A Streamlit web app that generates music from text prompts using Meta's AudioCraft MusicGen model. Enter a description like \"lofi chill beats with soft piano\", choose a duration, and the app generates a .wav audio clip you can preview and download.",
    tech: ['Python', 'Streamlit', 'AudioCraft', 'MusicGen', 'PyTorch', 'TorchAudio'],
    github: 'https://github.com/rishabshukla-code/Vector-Music',
    live: null,
    featured: false,
  },
  {
    title: 'Feed Share',
    category: 'Full Stack',
    emoji: '🍱',
    period: 'Nov 2025 – Dec 2025',
    description: 'A web app for sharing surplus food from campus events with real time feed updates, location based data, and full user account management. Deployed on AWS using EC2, S3, cloud hosted MySQL, Nginx for HTTPS, and a CI/CD workflow.',
    tech: ['Spring Boot', 'Hibernate', 'MySQL', 'AWS EC2', 'S3', 'Ajax', 'Nginx', 'CI/CD'],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: 'NU Haul',
    category: 'Full Stack',
    emoji: '🛒',
    period: 'Sep 2025 – Oct 2025',
    description: 'A full stack MERN platform for Northeastern University students to buy, sell, and rent household goods. Includes advanced search filters, email verification, and a secure login system.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API'],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: 'IoT Aquaculture System',
    category: 'IoT',
    emoji: '🌊',
    period: '2021 – 2022',
    description: "A real time water quality monitoring system for aquaculture environments built during my Bachelor's degree. IoT sensors track water parameters and transmit data via ESP8266 to the cloud for live tracking and alerts.",
    tech: ['Arduino', 'ESP8266', 'C++', 'IoT Sensors', 'Cloud'],
    github: null,
    live: null,
    featured: false,
  },
];

export const skills = [
  {
    label: 'Languages',
    items: ['Python', 'Java (SE/EE)', 'C/C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Hibernate', 'React', 'Node.js', 'Express.js', 'Angular', 'Bootstrap', 'jQuery'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    label: 'Tools & Cloud',
    items: ['Git', 'GitHub', 'Docker', 'AWS EC2', 'AWS S3', 'Nginx', 'CI/CD'],
  },
  {
    label: 'AI / LLM Stack',
    items: ['LangChain', 'LangGraph', 'GPT-OSS (Llama 3.x)', 'OpenAI API', 'FAISS', 'RAG', 'Embeddings', 'Groq'],
    highlight: true,
  },
];

export const categoryColors = {
  AI:           { bg: '#f5f3ff', text: '#6d28d9', border: '#ede9fe' },
  'Full Stack': { bg: '#eff6ff', text: '#2563eb', border: '#dbeafe' },
  Backend:      { bg: '#ecfdf5', text: '#059669', border: '#d1fae5' },
  IoT:          { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
};
