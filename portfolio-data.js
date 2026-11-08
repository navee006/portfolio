/**
 * PORTFOLIO CONFIGURATION DATA
 * 
 * Update this file to customize your portfolio content!
 * Everything here automatically populates into the website.
 */

const portfolioData = {
  // Personal Info
  personal: {
    name: "Naveen",
    surname: "Kumar",
    fullName: "Naveen Kumar",
    title: "Senior Full-Stack Software Engineer",
    tagline: "Crafting robust, scalable web architectures and intuitive digital experiences.",
    status: "Available for new opportunities",
    availableForHire: true,
    location: "Bangalore, India",
    email: "naveen.dev@example.com",
    phone: "+91 98765 43210",
    yearsOfExperience: "4+",
    projectsCompleted: "30+",
    techMastered: "18+",
    githubContributions: "1,400+",
    avatarUrl: "asset/HPIM0777.JPG",
    resumeUrl: "#", // Replace with your resume PDF link
    bio: [
      "I am a passionate Software Engineer specializing in modern web architectures, distributed backend systems, and responsive frontends.",
      "With a strong foundation in computer science and full-cycle product development, I bridge the gap between design vision and high-performance engineering. I love solving tough algorithmic challenges, optimizing database query pipelines, and crafting pixel-perfect interfaces.",
      "When I'm not coding, you'll find me exploring open-source projects, writing technical articles, or mentoring upcoming developers."
    ],
    social: [
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Twitter / X", url: "https://twitter.com", icon: "twitter" },
      { name: "Email", url: "mailto:naveen.dev@example.com", icon: "mail" }
    ]
  },

  // Core Pillars / Highlights
  highlights: [
    {
      icon: "code",
      title: "Full-Stack Development",
      description: "End-to-end development using modern React, TypeScript, Node.js, and Python microservices with clean code principles."
    },
    {
      icon: "server",
      title: "Backend & Systems",
      description: "Designing resilient RESTful & GraphQL APIs, distributed caching with Redis, message queues, and relational / NoSQL databases."
    },
    {
      icon: "cloud",
      title: "Cloud & DevOps",
      description: "Containerization with Docker, CI/CD pipeline automation via GitHub Actions, and deployment on AWS (ECS, Lambda, S3) and Vercel."
    },
    {
      icon: "zap",
      title: "Performance & DX",
      description: "Sub-second load times, SEO optimization, rigorous testing suites (Jest, Cypress), and seamless developer workflows."
    }
  ],

  // Skills organized by category
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React / Next.js", level: 95, icon: "atom" },
        { name: "TypeScript / JavaScript", level: 92, icon: "file-code" },
        { name: "Tailwind CSS", level: 90, icon: "palette" },
        { name: "HTML5 / CSS3", level: 95, icon: "layout" },
        { name: "Redux / Zustand", level: 88, icon: "layers" },
        { name: "Vue.js", level: 75, icon: "feather" }
      ]
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Node.js / Express", level: 90, icon: "server" },
        { name: "Python / FastAPI", level: 85, icon: "terminal" },
        { name: "Go (Golang)", level: 78, icon: "cpu" },
        { name: "REST & GraphQL APIs", level: 92, icon: "network" },
        { name: "Microservices", level: 82, icon: "boxes" },
        { name: "WebSockets", level: 80, icon: "radio" }
      ]
    },
    {
      category: "Databases & Storage",
      items: [
        { name: "PostgreSQL", level: 88, icon: "database" },
        { name: "MongoDB", level: 85, icon: "hard-drive" },
        { name: "Redis Caching", level: 82, icon: "zap" },
        { name: "Prisma / TypeORM", level: 86, icon: "table" }
      ]
    },
    {
      category: "Cloud, DevOps & Tools",
      items: [
        { name: "Docker & Containers", level: 85, icon: "box" },
        { name: "AWS (S3, EC2, Lambda)", level: 80, icon: "cloud" },
        { name: "Git & GitHub CI/CD", level: 92, icon: "git-branch" },
        { name: "Linux / Bash", level: 85, icon: "terminal" },
        { name: "Jest / Vitest", level: 84, icon: "check-circle" }
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: "cloud-nexus",
      title: "CloudNexus - DevOps Observability Dashboard",
      category: "Full-Stack",
      tagline: "Real-time metrics, log streaming, and automated health alerts for containerized microservices.",
      description: "Engineered a production-ready cloud observability platform that aggregates telemetry metrics and logs across Docker and Kubernetes clusters. Features interactive charts, anomaly detection alerts, and Slack webhook integrations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Node.js", "Redis", "TimescaleDB", "Tailwind CSS"],
      metrics: "Processes 2M+ metrics daily with sub-50ms query responses",
      liveUrl: "https://example.com/demo/cloudnexus",
      githubUrl: "https://github.com/example/cloudnexus",
      featured: true
    },
    {
      id: "nexus-commerce",
      title: "OmniCart - Headless E-Commerce Platform",
      category: "Full-Stack",
      tagline: "Ultra-fast Next.js storefront backed by Stripe, GraphQL, and serverless edge functions.",
      description: "Architected a scalable headless shopping experience with optimistic UI updates, multi-currency checkout via Stripe, localized product catalogs, and an intuitive merchant admin dashboard with inventory tracking.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "Stripe API", "Tailwind CSS"],
      metrics: "Achieved 99 Lighthouse performance score and 30% checkout conversion lift",
      liveUrl: "https://example.com/demo/omnicart",
      githubUrl: "https://github.com/example/omnicart",
      featured: true
    },
    {
      id: "ai-promptflow",
      title: "PromptFlow - Collaborative AI Workflow Builder",
      category: "AI & Tools",
      tagline: "Visual node-based canvas for chaining LLM prompts, embeddings, and data transformers.",
      description: "Built a drag-and-drop workflow canvas allowing developers and product teams to chain Gemini and OpenAI models, execute Python sandboxed expressions, test prompts in real-time, and export as REST endpoints.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["React Flow", "FastAPI", "Python", "Vector DB", "Docker"],
      metrics: "1,500+ stars on GitHub and active open-source community",
      liveUrl: "https://example.com/demo/promptflow",
      githubUrl: "https://github.com/example/promptflow",
      featured: true
    },
    {
      id: "secure-auth-gateway",
      title: "ZeroAuth - Distributed Identity & RBAC Gateway",
      category: "Backend",
      tagline: "High-throughput OAuth2 / OIDC authentication service with session revocation.",
      description: "Designed and implemented a lightweight authentication gateway supporting multi-factor authentication, granular RBAC permissions, cryptographically verified JWT tokens, and instant session revocation via Redis pub/sub.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      tags: ["Go", "Redis", "PostgreSQL", "OAuth2", "Docker"],
      metrics: "Handles 15,000+ authentication requests/sec with p99 < 12ms",
      liveUrl: "https://example.com/demo/zeroauth",
      githubUrl: "https://github.com/example/zeroauth",
      featured: false
    },
    {
      id: "dev-collab-docs",
      title: "Syncdoc - Real-time Collaborative Markdown Editor",
      category: "Frontend",
      tagline: "Conflict-free collaborative documentation editor using CRDTs and WebSockets.",
      description: "An intuitive in-browser technical documentation workspace featuring live multi-cursor collaboration, instant syntax highlighting, KaTeX math rendering, and export to PDF/HTML.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Yjs (CRDT)", "WebSockets", "Monaco Editor"],
      metrics: "Zero-conflict sync across 100+ concurrent users per room",
      liveUrl: "https://example.com/demo/syncdoc",
      githubUrl: "https://github.com/example/syncdoc",
      featured: false
    },
    {
      id: "micro-task-engine",
      title: "CronQ - Distributed Asynchronous Job Scheduler",
      category: "Backend",
      tagline: "Fault-tolerant background job execution engine with retry policies and dead-letter queues.",
      description: "A plug-and-play distributed task queue designed for mission-critical web applications. Provides priority scheduling, exponential backoff retries, cron expressions, and an interactive web inspector for task debugging.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Redis", "BullMQ", "Docker", "Express"],
      metrics: "99.99% execution reliability across over 10M processed tasks",
      liveUrl: "https://example.com/demo/cronq",
      githubUrl: "https://github.com/example/cronq",
      featured: false
    }
  ],

  // Career Experience
  experience: [
    {
      period: "2023 - Present",
      role: "Senior Software Engineer",
      company: "TechNova Solutions",
      location: "Bangalore, India",
      type: "Full-Time",
      description: "Leading frontend and backend development for core enterprise platforms, mentoring engineers, and steering cloud modernization initiatives.",
      achievements: [
        "Architected a micro-frontend migration that improved team deployment velocity by 40%.",
        "Redesigned the distributed caching layer, dropping database query load by 55% during peak traffic.",
        "Mentored 6 junior and mid-level software engineers across clean code and automated testing practices."
      ],
      skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      period: "2021 - 2023",
      role: "Full-Stack Software Engineer",
      company: "HyperScale Labs",
      location: "Remote",
      type: "Full-Time",
      description: "Built scalable web apps, integrated REST/GraphQL APIs, and enhanced database schema performance for high-growth SaaS products.",
      achievements: [
        "Developed custom real-time collaboration features using WebSockets and Redis pub/sub.",
        "Built automated CI/CD deployment pipelines using GitHub Actions, cutting release cycles from days to minutes.",
        "Reduced initial bundle size by 38% through lazy loading, tree shaking, and asset compression."
      ],
      skills: ["React", "Next.js", "Python / FastAPI", "MongoDB", "Redis", "Tailwind CSS"]
    },
    {
      period: "2020 - 2021",
      role: "Software Developer Intern",
      company: "CloudByte Systems",
      location: "Bangalore, India",
      type: "Internship",
      description: "Collaborated with agile engineering squads to build responsive UI components, write unit tests, and resolve backend API bottlenecks.",
      achievements: [
        "Developed reusable design system components adopted across 4 client web applications.",
        "Achieved 90%+ unit test coverage across key payment and authentication modules."
      ],
      skills: ["JavaScript", "HTML/CSS", "Node.js", "Express", "Jest", "Git"]
    }
  ],

  // Education & Certifications
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Visvesvaraya Technological University",
      period: "2017 - 2021",
      grade: "First Class with Distinction (8.6 CGPA)",
      details: "Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Distributed Computing."
    }
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: "2024",
      badge: "aws"
    },
    {
      name: "Meta Certified Front-End Developer Professional",
      issuer: "Meta / Coursera",
      year: "2023",
      badge: "meta"
    },
    {
      name: "Docker Certified Associate (DCA)",
      issuer: "Docker Inc.",
      year: "2023",
      badge: "docker"
    }
  ],

  // Terminal easter-egg commands
  terminalCommands: {
    help: "Available commands:\n  about      - Display brief summary about Naveen\n  skills     - List technical proficiencies\n  projects   - Show notable featured projects\n  experience - View work history\n  contact    - Get contact email & social links\n  clear      - Clear terminal screen\n  sudo       - Try it if you dare ;)",
    about: "Naveen Kumar | Senior Full-Stack Software Engineer\nPassionate about building highly scalable web systems, clean architecture, and delightful user interfaces.",
    skills: "Core Tech Stack:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux\n• Backend: Node.js, Express, Python FastAPI, Go, GraphQL, REST\n• Databases: PostgreSQL, MongoDB, Redis\n• Cloud & DevOps: Docker, AWS (S3, EC2, Lambda), CI/CD, Linux",
    projects: "Featured Projects:\n1. CloudNexus - DevOps Observability Dashboard\n2. OmniCart - Headless E-Commerce Platform\n3. PromptFlow - Collaborative AI Workflow Builder\n4. ZeroAuth - Distributed Identity Gateway\n(Explore the Projects section above for live links & source code!)",
    experience: "Experience Overview:\n• 2023 - Present: Senior Software Engineer at TechNova Solutions\n• 2021 - 2023: Full-Stack Software Engineer at HyperScale Labs\n• 2020 - 2021: Software Developer Intern at CloudByte Systems",
    contact: "Let's connect!\n• Email: naveen.dev@example.com\n• GitHub: https://github.com\n• LinkedIn: https://linkedin.com\n• Location: Bangalore, India",
    sudo: "Permission denied: You are not in the sudoers file. This incident will be reported to Santa Claus 🎅"
  }
};

// Export for module systems or attach to window for browser script
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
