/**
 * RESUME CONFIGURATION DATA (Magic UI Portfolio Template)
 * Modeled after src/data/resume.tsx
 * 
 * Accurately updated for: Naveena Ruby Thomas
 * LinkedIn: https://www.linkedin.com/in/naveena-ruby-thomas
 * Institution: Amal Jyothi College of Engineering (B.Tech CSE, Batch 2024–2028)
 */

const RESUME_DATA = {
  name: "Naveena Ruby Thomas",
  initials: "NRT",
  url: "https://www.linkedin.com/in/naveena-ruby-thomas",
  location: "Kerala, India",
  locationLink: "https://www.google.com/maps/place/Kerala",
  description:
    "Computer Science & Engineering Undergraduate at Amal Jyothi College of Engineering. Passionate about software engineering, data structures, and modern web development.",
  summary:
    "I am a Computer Science & Engineering student at Amal Jyothi College of Engineering (B.Tech CSE, 2024–2028 batch), recognized on the Manager's / Principal's Honours List for academic excellence. I have a strong foundation in core programming, problem-solving, and algorithmic thinking. I love building responsive web applications, exploring open-source technologies, and collaborating on impactful engineering projects.",
  avatarUrl: "asset/profile.jpeg",
  
  navbar: [
    { href: "#hero", icon: "home", label: "Home" },
    { href: "#about", icon: "user", label: "About" },
    { href: "#education", icon: "graduation-cap", label: "Education" },
    { href: "#skills", icon: "code-2", label: "Skills" },
    { href: "#projects", icon: "folder-git-2", label: "Projects" },
    { href: "#hackathons", icon: "trophy", label: "Honours" },
    { href: "#contact", icon: "mail", label: "Contact" },
  ],

  contact: {
    email: "naveenarubythomas@gmail.com",
    tel: "+91 98765 43210",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/naveena-ruby-thomas",
        icon: "linkedin",
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/navee006",
        icon: "github",
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:naveenarubythomas@gmail.com",
        icon: "mail",
        navbar: true,
      },
    },
  },

  skills: [
    { name: "C / C++", icon: "cpu" },
    { name: "Python", icon: "terminal" },
    { name: "Java", icon: "coffee" },
    { name: "JavaScript", icon: "file-code-2" },
    { name: "Data Structures & Algorithms", icon: "layers" },
    { name: "HTML5 & CSS3", icon: "layout" },
    { name: "Tailwind CSS", icon: "palette" },
    { name: "React", icon: "atom" },
    { name: "SQL & Databases", icon: "database" },
    { name: "Git & GitHub", icon: "git-branch" },
    { name: "Object-Oriented Programming", icon: "boxes" },
    { name: "Linux / Bash", icon: "terminal" },
  ],

  education: [
    {
      school: "Amal Jyothi College of Engineering",
      href: "https://www.amaljyothi.ac.in",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      logoUrl: "",
      start: "2024",
      end: "2028",
      details: "Recognized on the Manager's / Principal's Honours List for Academic Distinction. Coursework in Data Structures, Algorithms, Discrete Mathematics, OOP, and Computer System Architecture.",
    },
    {
      school: "Higher Secondary Education (Class XII)",
      href: "#",
      degree: "Computer Science Stream",
      logoUrl: "",
      start: "2022",
      end: "2024",
      details: "Graduated with High Academic Distinction with focus on Mathematics, Physics, Chemistry, and Computer Science.",
    },
  ],

  work: [
    {
      company: "Amal Jyothi College of Engineering",
      href: "https://www.amaljyothi.ac.in",
      badges: ["Academic"],
      location: "Kottayam, Kerala",
      title: "Student Developer & Technical Member",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "Actively participating in engineering workshops, coding competitions, and collegiate developer initiatives. Building personal and academic software projects to strengthen full-stack fundamentals.",
    },
  ],

  projects: [
    {
      title: "Smart Campus Portal & Academic Hub",
      href: "https://github.com",
      dates: "2024",
      active: true,
      description:
        "A responsive student portal designed to manage academic timetables, course assignments, and resource sharing with an intuitive modern UI.",
      technologies: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "HTML5",
        "LocalStorage",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com",
          icon: "github",
        },
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80",
      video: "",
    },
    {
      title: "Algorithm Visualizer & Complexity Analyzer",
      href: "https://github.com",
      dates: "2024",
      active: true,
      description:
        "An interactive visualization tool demonstrating sorting algorithms (Merge Sort, Quick Sort, Bubble Sort) and pathfinding algorithms with step-by-step state animations.",
      technologies: [
        "Python",
        "JavaScript",
        "CSS Animations",
        "Data Structures",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com",
          icon: "github",
        },
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
      video: "",
    },
    {
      title: "Personal Portfolio & Developer Showcase",
      href: "https://github.com",
      dates: "2024",
      active: true,
      description:
        "Crafted a high-performance personal developer portfolio leveraging Magic UI aesthetics, responsive Tailwind layouts, and interactive components.",
      technologies: [
        "HTML5",
        "Tailwind CSS",
        "JavaScript",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com",
          icon: "github",
        },
      ],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Manager's / Principal's Honours List",
      dates: "2024 - 2025",
      location: "Amal Jyothi College of Engineering",
      description:
        "Recognized on the prestigious institutional Honours List for exceptional academic performance and exemplary standing in the Department of Computer Science & Engineering.",
      image: "",
      links: [
        {
          title: "Institution",
          icon: "award",
          href: "https://www.amaljyothi.ac.in",
        },
      ],
    },
    {
      title: "College Technical Symposium & Hackathon",
      dates: "2024",
      location: "Kerala, India",
      description:
        "Participated in collegiate algorithm sprints and software design challenges, engineering innovative solutions for campus utility problems.",
      image: "",
      links: [
        {
          title: "Details",
          icon: "globe",
          href: "https://www.linkedin.com/in/naveena-ruby-thomas",
        },
      ],
    },
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = RESUME_DATA;
}

