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
    "I'm a Software Developer with a Master's in Information Systems from Northeastern University, focused on building backend and full stack systems that aren't just functional but scalable, reliable, and actually used by people.",
    "I currently work at IDLMeals, where I replaced polling with Kafka driven WebSocket updates, tracked down a race condition in a critical claim flow before real time push could amplify it, and took test coverage on that migration from 61% to 90%. A lot of the work is performance — moving expensive computation off the main thread so interactions stay fast on large datasets.",
    "Before that I worked across backend and full stack roles at IpserLab and Netzwerk.AI, building internal React and Spring Boot tooling, decomposing high traffic workflows into independently scalable services with Kafka and Kubernetes, and setting up CI/CD and observability so failures could actually be detected and explained.",
    "Alongside the day job I build with LLMs — multi agent coding workflows and retrieval based chat systems — which keeps me close to where the tooling is heading. I'm open to opportunities where I can build meaningful systems, solve real world problems, and continue growing as an engineer.",
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
    title: 'Software Developer',
    company: 'IDLMeals',
    location: 'Fort Worth, TX (Remote)',
    period: 'Feb 2026 – Present',
    type: 'Full-time',
    bullets: [
      'Designed Spring Boot Kafka consumers that push backend state changes to React clients over WebSockets, replacing polling and cutting API requests by 80% and update latency from 3s to 70ms',
      'Troubleshot a pre-existing race condition in the claim flow that real time push would amplify, diagnosed the root cause, fixed it with an atomic conditional update, and documented the fix',
      'Wrote 80+ JUnit/Mockito tests for the WebSocket migration, raising code coverage from 61% to 90%, then confirmed with access logs that no clients still used the legacy endpoints before removing obsolete code',
      'Evaluated and adopted Web Workers and virtualized rendering to re-engineer a data intensive React/JavaScript workflow, moving expensive computation off the main thread and cutting interaction latency from 420ms to 110ms on datasets of 50K+ records',
    ],
    tech: ['Spring Boot', 'Kafka', 'WebSockets', 'React', 'JUnit', 'Mockito', 'Web Workers'],
  },
  {
    title: 'Software Developer Intern (Co-op)',
    company: 'IpserLab',
    location: 'Fort Worth, TX',
    period: 'Feb 2025 – May 2025',
    type: 'Co-op',
    bullets: [
      'Analyzed user needs with engineers as end users, then prototyped and built an internal diagnostics dashboard in React and Java/Spring Boot aggregating service health, failures and deployment metadata across 12+ services, reducing troubleshooting time from 20 to under 10 minutes',
      'Automated test data setup with a Java/Spring Boot data loader, cutting manual setup from 10 minutes to a few seconds for the whole team',
      'Identified and fixed a mobile animation stutter on the production site by replacing position based animation with GPU accelerated CSS transforms, raising frame rate from 25fps to a steady 60fps',
      'Developed 13 reusable React components and centralized API calls in custom hooks across 5 screens, cutting screen code by 18%',
    ],
    tech: ['React', 'Java', 'Spring Boot', 'Custom Hooks', 'CSS Transforms', 'Dashboards'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Netzwerk.AI',
    location: 'Gulbarga, India',
    period: 'Jul 2022 – Aug 2023',
    type: 'Full-time',
    bullets: [
      'Decomposed 3 high traffic Java/Spring Boot workflows into independently scalable services, offloading downstream processing through Kafka and horizontally scaled Kubernetes workers to isolate failures and increase peak throughput by 2.4×',
      'Established CI/CD pipelines with Azure DevOps, Docker and Azure, automating builds, testing, static/dependency/container scanning, artifact publishing and deployment, cutting release time from 40 minutes to 9 minutes and increasing deployment frequency from 2 to 5+ releases per week',
      'Engineered centralized observability using Azure Monitor, Application Insights, structured logging and distributed tracing, reducing mean time to detect production failures from 18 to 5 minutes and improving root cause analysis in incident postmortems',
      'Partnered with product and QA to deliver 6 production features across the full SDLC, from requirements analysis and technical specifications to design reviews, testing and release, translating business requirements into working software and flagging delivery risks early',
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'Kubernetes', 'Azure DevOps', 'Docker', 'Azure Monitor'],
  },
];

export const projects = [
  {
    title: 'Coder Buddy',
    category: 'AI',
    emoji: '🤖',
    period: 'Dec 2025 – Jan 2026',
    description: 'A multi agent AI system built with LangGraph where specialized agents collaborate to turn a natural language prompt into a working, multi file codebase. Uses a Planner, Architect and Coder pipeline with tool calling, file system execution, and validation loops.',
    tech: ['LangGraph', 'Groq', 'Python', 'Multi-agent', 'Tool-calling'],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: 'RAG Chatbot',
    category: 'AI',
    emoji: '🧠',
    period: 'Nov 2025 – Dec 2025',
    description: 'A document aware AI chatbot that accepts PDF uploads, extracts and chunks content, generates embeddings, and retrieves relevant context to produce grounded, accurate answers. Powered by FAISS for fast semantic search with a clean Streamlit UI for real time querying.',
    tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'RAG', 'Embeddings'],
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
    description: 'A full stack platform built with Java, Spring Boot, Hibernate and MySQL that lets Northeastern students post and discover leftover food from campus events through a live, AJAX updated feed. Deployed on AWS using EC2, S3, cloud hosted MySQL and Nginx for HTTPS.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'AJAX', 'AWS EC2', 'Nginx'],
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
    title: 'Inventory Management App',
    category: 'Full Stack',
    emoji: '📦',
    period: '2026',
    description: 'An inventory CRUD application built with ASP.NET Core, using Dapper for lightweight data access and AutoMapper for object mapping, paired with a jQuery and AJAX driven frontend for creating, updating and tracking stock records without full page reloads.',
    tech: ['ASP.NET Core', 'C#', 'Dapper', 'AutoMapper', 'JavaScript', 'jQuery'],
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
    items: ['Java 17', 'Jakarta EE', 'Python', 'C#', 'JavaScript'],
  },
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'jQuery', 'HTML/CSS'],
  },
  {
    label: 'Backend & APIs',
    items: ['Spring Boot', 'Spring Security', 'Hibernate', 'Spring Data JPA', 'Maven/Gradle', 'REST APIs', 'JWT'],
  },
  {
    label: 'Databases & Messaging',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'WebSockets'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Azure', 'Azure DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Git', 'GitHub Actions'],
  },
  {
    label: 'Practices',
    items: ['Agile', 'Object-Oriented Programming', 'Unit/Integration Testing', 'Debugging & Troubleshooting'],
  },
  {
    label: 'AI / LLM Stack',
    items: ['LangChain', 'LangGraph', 'OpenAI API', 'Groq', 'FAISS', 'RAG', 'Embeddings'],
    highlight: true,
  },
];

export const categoryColors = {
  AI:           { bg: '#f5f3ff', text: '#6d28d9', border: '#ede9fe' },
  'Full Stack': { bg: '#eff6ff', text: '#2563eb', border: '#dbeafe' },
  Backend:      { bg: '#ecfdf5', text: '#059669', border: '#d1fae5' },
  IoT:          { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
};
