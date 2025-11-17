
export const SITE = {
  name: "Tharun K",
  role: "Software Development Engineer",
  tagline: "Building scalable, high‑performance applications across web and cloud.",
  location: "San Jose, CA",
  email: "tharunk.codes@gmail.com",
  github: "https://github.com/tharunk-dev",
  linkedin: "https://linkedin.com/in/tharunkdev/", // placeholder as requested
  resumeUrl: "/Tharun K_Software Developement Engineer.pdf",
};

export const SKILLS = [
  "Java", "Spring Boot", "REST APIs", "Microservices", "SQL", "NoSQL",
  "Kafka", "Docker", "Kubernetes", "Jenkins", "CI/CD",
  "React", "Node.js", "JavaScript", "TypeScript", "AWS (ECS, EC2, S3, RDS, VPC, IAM)",
  "GCP", "Redis", "RabbitMQ", "MongoDB", "MySQL",
];

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
  repo?: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "E‑Commerce Web Application (MERN)",
    description: "Full‑stack e‑commerce platform with secure auth and real‑time payments.",
    highlights: [
      "JWT‑based auth, role‑based access",
      "Stripe integration for payments",
      "AWS deploy: EC2, S3, CloudFront; CI/CD via GitHub Actions; 99.9% uptime",
    ],
    tags: ["Node.js", "Express", "React", "MongoDB", "Stripe", "AWS"],
    repo: "https://github.com/tharunkothinti", // replace per‑project later
  },
  {
    title: "Real‑Time Chat Application",
    description: "WebSocket chat with groups, DMs, and presence.",
    highlights: [
      "Socket.IO with Redis Pub/Sub to scale to 10k+ concurrent users",
      "End‑to‑end encryption & presence tracking",
      "Horizontal scaling ready",
    ],
    tags: ["Node.js", "Socket.IO", "Redis", "React"],
    repo: "https://github.com/tharunkothinti",
  },
  {
    title: "Cloud‑Based Task Scheduler",
    description: "Distributed scheduler with microservices and messaging.",
    highlights: [
      "Spring Boot microservices with RabbitMQ",
      "Optimized thread pools and caching (‑40% execution time)",
      "Docker + Kubernetes autoscaling on GCP",
    ],
    tags: ["Java", "Spring Boot", "RabbitMQ", "Docker", "Kubernetes", "GCP"],
    repo: "https://github.com/tharunkothinti",
  },
  {
    title: "Online Code Compiler Platform",
    description: "Multi‑language code runner in secure Docker sandboxes.",
    highlights: [
      "Supports Java, Python, C++ via REST APIs",
      "Isolated execution with per‑job containers",
      "RBAC for admins, moderators, and users",
    ],
    tags: ["Docker", "Node.js", "REST", "RBAC"],
    repo: "https://github.com/tharunkothinti",
  },
  {
    title: "Ad‑Fraud Detection (TalkingData)",
    description: "ML pipeline on imbalanced fraud data with robust modeling.",
    highlights: [
      "Feature engineering (temporal & frequency), target encoding",
      "Compared LR/DT/RF/XGBoost/ANN; F1 0.94 (XGBoost); 100% precision (RF)",
      "Adversarial training to resist manipulated inputs",
    ],
    tags: ["Python", "XGBoost", "ML", "Data Engineering"],
    repo: "https://github.com/tharunkothinti",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer II",
    company: "Goldman Sachs",
    period: "Jun 2023 – Present",
    bullets: [
      "Java microservices for Marcus digital banking; 1M+ daily requests; 99.9% uptime",
      "Optimized SQL/NoSQL; page load −30%, DB latency 200ms→120ms",
      "Integrated Spring Boot services with React; feature delivery +25%",
      "Jenkins + Docker + K8s: release cycle 2w→3d; deployment errors −40%",
      "Design discussions enabling 2× concurrent users under strict compliance",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Qualcomm",
    period: "Dec 2020 – Jul 2022",
    bullets: [
      "Java microservices for Snapdragon platform; supported top OEMs",
      "REST APIs improved cross‑team interoperability (FW/OS/App)",
      "Multithreaded pipelines; backend latency −35%",
      "Jenkins/Docker/K8s CI/CD: 3w→5d; errors −40%",
      "Designed scalable services for 1M+ concurrent device connections",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Cognizant",
    period: "Aug 2019 – Nov 2020",
    bullets: [
      "Distributed backends in Java + Spring Boot for real‑time sync",
      "Monolith→microservices migration; deployment downtime −50%",
      "3rd‑party payments/auth/messaging integrations; secure transactions",
      "JUnit/Mockito tests to 85% coverage; prod bugs −30%",
      "AWS ECS/S3/RDS deploys with HA and DR readiness",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "M.S. in Computer Science",
    school: "Northern Arizona University, Flagstaff, AZ",
    note: "GPA 3.80",
  },
];

