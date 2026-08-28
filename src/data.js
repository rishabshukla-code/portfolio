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
    "I'm a Software Engineer with a Master's in Information Systems from Northeastern University, focused on building backend systems that are not just functional but scalable, reliable, and actually used by people.",
    "I currently work at IDLMeals, where most of my time goes into the performance and reliability side of a data intensive platform — re-engineering retrieval layers, cutting API payloads and response times, optimizing processing pipelines, and building out test coverage in parts of the codebase that had none.",
    "Before that I worked across backend and full stack roles at IpserLab and Netzwerk.AI, shipping production React and Spring Boot features, decomposing high traffic workflows into independently scalable services, and setting up CI/CD and observability from scratch so failures could actually be detected and explained.",
    "What excites me most is the intersection of software engineering and AI. I've built multi agent workflows and retrieval based chat systems where the goal isn't just to write code but to create intelligent behavior. I'm open to opportunities where I can build meaningful systems, solve real world problems, and continue growing as an engineer in backend, full stack or AI focused roles.",
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
    title: 'Software Engineer',
    company: 'IDLMeals',
    location: 'Fort Worth, TX',
    period: 'Feb 2026 – Present',
    type: 'Full-time',
    bullets: [
      'Re-engineered a data intensive retrieval layer by replacing full entity database queries with JPQL projections, indexed lookups and request driven field selection, reducing API payload sizes by 90% and improving median response time from 780ms to 320ms on frequently accessed endpoints',
      'Optimized a data matching pipeline with hash based lookups and batch processing, reducing complexity and processing time from 4.2s to 900ms across 10,000+ records',
      'Implemented 80+ unit and integration tests, increasing code coverage by 35% and uncovering untested legacy code, then partnered with a senior engineer to assess usage and safely remove obsolete functionality',
      'Leveraged AI assisted tools to analyze errors across unfamiliar areas of the codebase, accelerating root cause identification, bug resolution and documentation workflows by 30%',
    ],
    tech: ['Spring Boot', 'JPQL', 'PostgreSQL', 'REST API', 'JUnit', 'Mockito', 'Performance Tuning'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'IpserLab',
    location: 'Fort Worth, TX',
    period: 'Feb 2025 – May 2025',
    type: 'Internship',
    bullets: [
      'Identified and fixed a mobile animation stutter on the production site by replacing position based animation with GPU accelerated CSS transforms, raising frame rate from 25fps to a steady 60fps',
      'Automated test data setup with a Spring Boot data loader, cutting manual setup from 25 minutes to a few seconds for the whole team',
      'Developed 13 reusable React components supporting multiple application workflows, integrating asynchronous APIs and accessible UI patterns while reducing duplicated frontend logic by 30% across 5 application screens',
      'Architected an internal developer diagnostics dashboard using React and Spring Boot that aggregated service health, recent failures and deployment metadata across 12+ backend services, reducing average issue triage time from 25 minutes to under 10 minutes for the engineering team',
    ],
    tech: ['React', 'Spring Boot', 'REST API', 'CSS Transforms', 'Accessibility', 'Dashboards'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Netzwerk.AI',
    location: 'Gulbarga, India',
    period: 'Jul 2022 – Aug 2023',
    type: 'Full-time',
    bullets: [
      'Decomposed 3 high traffic workflows into independently scalable services, offloading downstream processing through SQS and horizontally scaled workers to isolate failures and increase peak throughput by 2.4 times',
      'Established CI/CD pipelines with GitHub Actions, Docker and AWS, automating builds, testing, static/dependency/container scanning, artifact publishing and deployment, cutting release time from 40 minutes to 9 minutes and increasing deployment frequency from 2 to 5+ releases per week',
      'Engineered centralized observability using CloudWatch, Prometheus/Grafana, structured logging, distributed tracing and service level alerts across application and infrastructure layers, reducing mean time to detect production failures from 18 to 5 minutes and improving root cause analysis during incident postmortems',
      'Owned feature delivery across the full SDLC in a lean engineering team, balancing functionality, reliability, security and deadlines to deliver 10+ production features and platform improvements cross functionally',
    ],
    tech: ['AWS SQS', 'Docker', 'GitHub Actions', 'CI/CD', 'CloudWatch', 'Prometheus', 'Grafana'],
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
    items: ['Java (SE/EE)', 'Python', 'JavaScript', 'TypeScript', 'C/C++'],
  },
  {
    label: 'Backend & APIs',
    items: ['Spring Boot', 'Spring Security', 'Hibernate', 'Node.js', 'Express.js', 'REST APIs', 'OAuth2', 'JWT'],
  },
  {
    label: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Accessible UI Patterns', 'Responsive Design'],
  },
  {
    label: 'Databases & Messaging',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'SQS'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'CloudWatch', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Git'],
  },
  {
    label: 'Testing & Observability',
    items: ['JUnit', 'Mockito', 'Prometheus', 'Grafana', 'Distributed Tracing', 'Structured Logging'],
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
