const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 12, suffix: "+", label: "Months of Coding" },
  { value: 9, suffix: "+", label: "Projects Completed" },
  { value: 6, suffix: "+", label: "Courses Completed" },
  { value: 100, suffix: "%", label: "Motivation to Learn" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Enhanced AI User",
    modelPath: "/models/chatgpt.glb",
    scale: 140,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      '"Yurii delivered frontend part in a really short time and participated on a backend part of the website. It was a pleasure to work with him."',
    imgPath: "/images/SafeAuto.png",
    logoPath: "/images/safeauto-import-logo.png",
    title: "Full Stack Developer",
    date: "April - June 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the SafeAuto website.",
      "Collaborated closely with UI/UX designer to ensure seamless user experiences.",
      "Optimized website for maximum speed and scalability.",
    ],
  },
  {
    review:
      "I become more confident. Building pet projects, improving my skills every day. No excuses, no weekends, just constant grinding.",
    imgPath: "/images/practice.png",
    logoPath: "/images/jsicon.png",
    title: "Practice",
    date: "July 2024 - Current",
    responsibilities: [
      "Quit my current non-IT job. Relocated to a different country.",
      "Building apps with React & React Native, Next.js, Expo, Node.js, Three.js",
      "Diving deep into new technologies on a constant basis.",
    ],
  },
  {
    review:
      "Started with Python course on Udemy. Failed. Started again with HTML, CSS, JavaScript courses. Still moving forward.",
    imgPath: "/images/studies.png",
    logoPath: "/images/udemyicon.png",
    title: "Studies",
    date: "December 2023 - Current",
    responsibilities: [
      "Getting through HTML, CSS, JavaScript courses.",
      "Going through sleepless study nights and working regular job.",
      "Building network, looking for same-minded friends.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "SafeAuto Import",
    mentions: "@safeauto.pro",
    review:
      "Yurii delivered frontend part in a really short time and participated on a backend part of the website. It was a pleasure to work with him.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Still collecting stories worth sharing. Yours could be the first headline here—let’s create something awesome together! If you’re searching for a developer who’s passionate about learning, growing, and turning ideas into reality, you’ve found the right person. I believe every project is a new adventure, and I’m excited to see where the next one leads. Ready to make your mark? Let’s connect and build something memorable!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Dmytro Stetsun",
    mentions: "@sketsD",
    review:
      "Yurii is one of those hard workers who actually gets things done. He’s always learning something new and never afraid to take on a challenge. I’ve seen him work late nights just to figure out a tricky bug or finish a project on time. Also, he’s just a good friend—always ready to help, share a laugh, or go for a walk. If you’re thinking about working with him, just do it. You won’t regret it.",
    imgPath: "/images/sketsD.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "No reviews yet, but every journey starts with a single step (or client). Ready to be the first to leave your mark?",
    imgPath: "/images/client5.png",
  },
  {
    name: "Sanne de Haan",
    mentions: "@waterkanbetter",
    review:
      "Yurii was an excellent team player, always cooperating well with colleagues and contributing positively to the work environment. Furthermore, his problem-solving skills and ability to handle challenges with a proactive attitude made him a valuable asset to our team.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "This space is reserved for future legends. Maybe your feedback will be the one that inspires others to join the adventure! If you’re reading this, you’re already part of the story. I’m committed to delivering quality, creativity, and a touch of fun to every project. Let’s turn your vision into something extraordinary and inspire others to join the adventure!",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
    link: "https://github.com/whoisyurii",
  },
  {
    name: "linkedin",
    imgPath:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
    link: "https://linkedin.com/in/yurii-mashchuk/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
