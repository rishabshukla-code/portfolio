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
    "I'm an AI Engineer with a backend engineering background and a Master's in Information Systems from Northeastern University. I build LLM systems that aren't just impressive in a demo but scalable, reliable, and actually used by people.",
    "I currently work at IDLMeals, where I build MCP tool servers, RAG pipelines and agent workflows wired into deterministic Spring Boot services that do the actual deciding. Most of the interesting work lives in the seams — schema validation, restricted tool execution, fallback handling, and keeping retrieval fast over hundreds of thousands of embedded chunks.",
    "Before that I worked across AI and backend roles at IpserLab and Netzwerk.AI, integrating LLM powered features into production applications and building Python NLP and semantic retrieval pipelines over large unstructured document sets, along with the Java and Spring Boot services sitting behind them.",
    "The backend half still matters to me — Kafka, Kubernetes, CI/CD and the unglamorous reliability work are what let AI systems survive contact with production. I'm open to opportunities where I can build meaningful AI systems, solve real world problems, and continue growing as an engineer.",
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
    location: 'Fort Worth, TX (Remote)',
    period: 'Feb 2026 – Present',
    type: 'Full-time',
    bullets: [
      'Engineered MCP servers exposing 14 internal recipe and ingredient tools to AI agents over JSON-RPC 2.0, with allow listed tool scopes and permission boundaries governing backend operations',
      'Built production RAG workflows in Python with embeddings and vector search over 38K recipes and 9K ingredient records (~410K embedded chunks), enabling semantic retrieval before LLM inference',
      'Designed 7 AI assisted workflows bridging tool calling and RAG with deterministic Spring Boot services, enforcing Pydantic schema validation, restricted tool execution and fallback handling',
      'Optimized a data intensive retrieval layer using JPQL projections, indexed lookups and request driven field selection, reducing API payload size by 90% and improving median response time from 780ms to 320ms',
    ],
    tech: ['MCP', 'JSON-RPC 2.0', 'RAG', 'Vector Search', 'Python', 'Spring Boot', 'Pydantic', 'JPQL'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'IpserLab',
    location: 'Fort Worth, TX',
    period: 'Feb 2025 – May 2025',
    type: 'Internship',
    bullets: [
      'Integrated an LLM powered feature into an existing application using Python inference services and REST APIs, handling input preprocessing, context assembly and model response parsing across 4 application workflows',
      'Implemented prompt templates, structured outputs and response validation, evaluating against a 180 case input set and raising valid structured responses from 82% to 97%',
      'Identified and fixed a mobile animation stutter on the production site by replacing position based animation with GPU accelerated CSS transforms, raising frame rate from 24fps to a steady 60fps',
      'Created 13 reusable React components integrating asynchronous APIs and accessible UI patterns, removing roughly 600 lines of duplicated frontend logic across 5 application screens',
    ],
    tech: ['Python', 'LLM', 'Prompt Engineering', 'Structured Outputs', 'REST API', 'React', 'Accessibility'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Netzwerk.AI',
    location: 'Gulbarga, India',
    period: 'Jul 2022 – Aug 2023',
    type: 'Full-time',
    bullets: [
      'Developed Python NLP pipelines to preprocess, clean and segment ~340K unstructured documents into 2.8M searchable text chunks, supporting large scale semantic search across learning and application content',
      'Programmed semantic retrieval services by batching embedding generation at ~1.2K chunks/min into a 6GB vector index, using similarity search and metadata filtering to retrieve relevant content at scale',
      'Integrated Python based AI retrieval services with Java and Spring Boot REST APIs across 17 production endpoints, implementing authentication, validation and backend access controls for application workflows',
      'Decomposed 3 high traffic workflows into independently scalable services, offloading downstream processing through Kafka and horizontally scaled Kubernetes workers to isolate failures and increase peak throughput by 2.4 times',
      'Established CI/CD pipelines with Azure DevOps, Docker and Azure, automating builds, testing, static/dependency/container scanning, artifact publishing and deployment, cutting release time from 37 minutes to 9 minutes and raising deployment frequency from 2 to 6 releases per week',
    ],
    tech: ['Python', 'NLP', 'Embeddings', 'Vector Search', 'Kafka', 'Kubernetes', 'Azure DevOps', 'Spring Boot'],
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
