// All site content lives here. Replace every "#" link with your real URL.
export const me = {
  name: "Harsh Kumar Pandey",
  role: "Software Engineer",
  location: "Bengaluru, India",
  email: "harshpandey12378@gmail.com",
  photo: "/profile.jpeg", // Images in /public are served from the site root.
  resume: "https://drive.google.com/file/d/1uqd_BqqchulULoZeoXFyR0wyCxeYvJX2/view?usp=sharing", // Google Drive resume link
  links: { github: "https://github.com/Harsh-Kumar-Pandey", linkedin: "https://www.linkedin.com/in/harsh-pandey-dev/", leetcode: "https://leetcode.com/u/Harsh_12378/" , codeforces: "https://codeforces.com/profile/harshpandey12378"},
  intro: [
    "Hi, I’m Harsh, a Full Stack Developer passionate about building scalable and high performance applications. I enjoy diving deep into backend technologies and understanding how large scale systems are designed and optimized.",
    "Through projects and internships, I’ve gained hands on experience in developing real world applications, writing production ready code, and solving complex technical problems.",
    "Always learning, building, and growing!!",
  ],
};

export const phrases = ["stay fast under load.", "fail gracefully.", "scale without drama.", "are easy to debug."];

export const stats = [
  { n: "850+", l: "LeetCode problems solved" },
  { n: "1700+", l: "LeetCode contest rating" },
  {n: "10+", l: "full-stack projects built"},
  {n:"50+", l:"Codeforces problems solved"},
  { n: "350→40ms", l: "chat history latency in NodeTalk" },
];

export const marquee = ["Node.js", "Spring Boot", "Redis", "Kafka", "PostgreSQL", "MongoDB", "React", "Docker", "System design"];

export const projects = [
  {
    title: "Distributed API Gateway & Observability System",
    summary:
      "A gateway that protects services with Redis-backed token bucket rate limiting, trips circuit breakers before failures cascade, and ships logs and metrics through Kafka instead of blocking requests.",
    points: ["Token bucket rate limiting in Redis", "Logging moved off the request path to Kafka", "Opossum circuit breakers stop cascading failures", "Redis and Kafka containerized with Docker"],
    tags: ["Express.js", "React", "Redis", "Kafka", "Docker"],
    code: "https://github.com/Harsh-Kumar-Pandey/Distributed-API-Gateway", live: "",
  },
  {
    title: "NodeTalk: real-time messaging",
    summary:
      "A 1-on-1 chat app on Socket.io. Serving chat history from Redis cut MongoDB reads by over 40% and dropped retrieval from 350ms to 40ms.",
    points: ["React Query cut UI paint time from 1000ms to under 10ms", "Compound indexes on hot fields like senderId", "WebSocket delivery for instant messages"],
    tags: ["Express.js", "React", "Socket.io", "Redis", "MongoDB"],
    code: "https://github.com/Harsh-Kumar-Pandey/NodeTalk", live: "https://nodetalk-client.vercel.app/",
  },
  {
    title: "VERTEX Club Website",
    summary:
      "A digital portal for the VERTEX club, including a scalable fest registration system, coordinator dashboard, and automated event communications.",
    points: [
      "Developed a robust backend secured with Google reCAPTCHA and custom rate limiting.",
      "Delivered the college fest registration system, supporting 500+ users with zero downtime.",
      "Built an admin dashboard with real-time Excel and CSV data exports for club coordinators.",
      "Integrated automated emails for registration confirmations and real-time event updates.",
      "Owned the end-to-end deployment pipeline to ensure high availability for the club's primary digital portal.",
    ],
    tags: ["Google reCAPTCHA", "Rate limiting", "Admin dashboard", "Excel/CSV export", "Email automation"],
    code: "https://github.com/Harsh-Kumar-Pandey/vertex-website", live: "https://vertex.dsce.club/",
  },
  {
    title: "Movie Deck",
    summary:
      "A movie exploration app for discovering trending films, searching by title, and managing a personalized watchlist, with AI-powered recommendations.",
    points: [
      "Discover trending movies and search titles using the external TMDB API.",
      "Added API rate limiting to manage requests to external services.",
      "Implemented infinite scrolling for a seamless browsing experience.",
      "Integrated JWT authentication and Google OAuth for convenient sign-in.",
      "Stored each user's personal watchlist in MongoDB.",
      "Added AI-powered movie suggestions using Mistral AI.",
    ],
    tags: ["TMDB API", "Rate limiting", "Infinite scrolling", "JWT", "Google OAuth", "MongoDB", "Mistral AI"],
    code: "https://github.com/Harsh-Kumar-Pandey/The-MovieDeck", live: "https://moviedeck-app.netlify.app/",
  },
];

export const experience = {
  company: "BlueStock",
  role: "Software Development Engineer Intern",
  when: "Oct 2025 to Nov 2025, Remote",
  points: [
    "Built core REST microservices with Node.js and PostgreSQL, with structured error handling and automated API schema validation.",
    "Added JWT authentication and role-based access control across 15+ API endpoints.",
    "Worked with cross-functional teams to fix critical production bugs, cutting API response latency by 15%.",
  ],
};

export const skills = [
  { g: "Languages", i: ["Java", "JavaScript", "SQL"] },
  { g: "Backend", i: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT and RBAC", "Object-oriented design"] },
  { g: "Data and messaging", i: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "BullMQ"] },
  { g: "Frontend", i: ["React.js", "Next.js", "HTML and CSS"] },
  { g: "Tools", i: ["Git and GitHub", "Docker", "AWS EC2"] },
];

export const achievements = [
  { t: "3rd place, Udaya 1.0 Hackathon", d: "Built an ed-tech tool for student learning." },
  { t: "Member, Vertex Club", d: "Led developers using Agile to build the club's digital portal from scratch, now used by 500+ people." },
  { t: "Full-stack development", d: "Built 10+ full-stack projects." },
  { t: "Problem solving", d: "850+ LeetCode problems solved in Java with a 1700+ contest rating, plus 50+ on Codeforces." },
];

export const education = {
  school: "Dayananda Sagar College of Engineering, Bengaluru",
  degree: "B.E. in Electronics & Telecommunication",
  when: "2023 to 2027",
  extra: "CGPA 8.34 / 10. Coursework: DSA, OS, DBMS.",
};
