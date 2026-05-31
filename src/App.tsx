import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const certificatesData = [
  { name: "Connecting to a MongoDB Database", file: "24eg105g54-Connecting to a MongoDB Database Using the MongoDB Shell.png" },
  { name: "Getting Started with MongoDB Atlas", file: "24eg105g54-Getting Started with MongoDB Atlas.png" },
  { name: "Introduction to Atlas Search", file: "24eg105g54-Introduction to Atlas Search.png" },
  { name: "Introduction to MongoDB", file: "24eg105g54-Introduction to MongoDB.png" },
  { name: "MongoDB Aggregation", file: "24eg105g54-MongoDB Aggregation.png" },
  { name: "MongoDB CRUD: Insert and Find", file: "24eg105g54-MongoDB CRUD Operations Insert and Find Documents.png" },
  { name: "MongoDB CRUD: Modifying Query Results", file: "24eg105g54-MongoDB CRUD Operations Modifying Query Results.png" },
  { name: "MongoDB CRUD: Replace and Delete", file: "24eg105g54-MongoDB CRUD Operations Replace and Delete Documents.png" },
  { name: "MongoDB Indexes", file: "24eg105g54-MongoDB Indexes.png" },
  { name: "MongoDB Transactions", file: "24eg105g54-MongoDB Transactions.png" },
  { name: "MongoDB and the Document Model", file: "24eg105g54-MongoDB and the Document Model.png" },
  { name: "NPTEL Programming in Java", file: "24EG105G54-NPTEL-Programming in java.png" },
  { name: "Basics of DSA - Simplilearn", file: "Basics of DSA-Simplilearn.png" },
  { name: "NPTEL DSA & Python", file: "NPTEL certificate Data Structures And Algorithms and also programming Using Python.png" },
  { name: "Python Essentials 1", file: "Python_Essentials_1_certificate_24eg105g54-anurag-edu-in_c5170ec8-cca8-41b3-b57a-47758b005df9 (1).png" },
  { name: "Python Essentials 2", file: "Python_Essentials_2_certificate_24eg105g54-anurag-edu-in_c89b6b09-61b5-4a62-80b9-a1f954b390d8.png" },
  { name: "C Programming - Simplilearn", file: "Simpli learn c certificate.png" },
  { name: "Software Engineering - Simplilearn", file: "software engineering-simpli learn.png" },
  { name: "Design a Dream Destination (Microsoft)", file: "Design a dream destination using Microsoft Copilot _ Microsoft Learn.png" },
  { name: "Dream Destination Achievements", file: "Achievements -24eg105g54_dreamdestination_ Microsoft Learn.png" },
  { name: "AI and Gen AI Basics (Microsoft)", file: "Achievements -learn ai and gen ai basics _ Microsoft Learn.png" },
  { name: "Explore Gen AI (Microsoft)", file: "explore gen ai _ Microsoft Learn.png" },
  { name: "Cisco Intro to AI", file: "cisco-into to ai.png" },
  { name: "Cisco AI Analyse", file: "cisco-ai analyse.png" },
  { name: "Prompt Design in Vertex AI", file: "prompt-design-in-vertex-ai-skill-badge.png" },
  { name: "GDSC Vogue AI Participation", file: "gdsc vogue ai participation certificate.png" },
  { name: "IBM SkillsBuild Completion", file: "Completion Certificate _ SkillsBuild-ibm.png" },
  { name: "Infosys Excel 2016", file: "infosys excel 2016 course.png" },
  { name: "Wadhwani - Problem Solving & Innovation", file: "Wadhwani Foundation Certificate - Problem Solving & Innovation.png" },
  { name: "Wadhwani - Self-Presentation", file: "Wadhwani Foundation Certificate - Self-Presentation.png" }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add('dark');
    
    // Navigation active state management
    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('.section');
      let current = 'home';

      sections.forEach((section: Element) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || 'home';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', updateActiveNavLink);
    return () => window.removeEventListener('scroll', updateActiveNavLink);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      {/* Global Background Video */}
      <div className="fixed inset-0 w-full h-full z-[-1] hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background-scenery-mountains.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[0px]"></div>
      </div>
      {/* Mobile fallback background */}
      <div className="fixed inset-0 w-full h-full z-[-1] block md:hidden bg-background"></div>

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-background/60 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
        <nav className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center rounded-2xl bg-secondary/80 backdrop-blur-md px-4 sm:px-6 py-3 shadow-lg border border-white/10 relative">
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-accent-blue p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {['home', 'projects', 'certifications', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`capitalize font-medium transition-colors px-3 py-1 rounded-md ${
                      activeSection === item
                        ? 'text-accent-blue bg-primary/10 shadow-sm'
                        : 'text-foreground hover:text-accent-blue hover:bg-primary/5'
                    }`}
                  >
                    {item === 'home' ? 'Home' : item}
                  </a>
                </li>
              ))}
            </ul>
            
            {mounted && (
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-purple-600 text-white font-bold text-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-default select-none border border-white/20 hover:scale-105 transition-transform shrink-0"
                title="Akhilesh"
              >
                A
              </div>
            )}
            
            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-full left-0 right-0 mt-4 bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden md:hidden z-50"
                >
                  <ul className="flex flex-col py-2">
                    {['home', 'projects', 'certifications', 'contact'].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block capitalize font-medium px-6 py-4 transition-colors ${
                            activeSection === item
                              ? 'text-accent-blue bg-primary/10'
                              : 'text-foreground hover:text-accent-blue hover:bg-primary/5'
                          }`}
                        >
                          {item === 'home' ? 'Home' : item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home" className="section relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 lg:px-8 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeIn}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground drop-shadow-md leading-tight">
                  Hi, I&apos;m <br className="block sm:hidden" /><span className="text-accent-blue">Akhilesh Vankayala</span>
                </h1>
                <h2 className="text-2xl font-semibold text-muted-foreground mb-6">
                  Problem solver | A Web Developer
                </h2>
                <div className="bg-secondary/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 shadow-lg text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 space-y-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">About Me</h3>
                  <p>
                    Hello, my name is Akhilesh Vankayala-Computer Science Engineering student who is passionate about problem-solving and building technology solutions through software applications that create real-world impact. 
                  </p>
                  <p>
                  My primary areas of focus are Data Structures & Algorithms and MERN stack development. I continuously work on improving my problem-solving abilities to prepare for software engineering roles while also expanding my knowledge in full-stack web development.  
                  </p>
                  <p>
                  Some of the projects I have developed include a Smart Placement Tracker for managing college recruitment processes, real-time chat applications, and accessibility-focused solutions designed to help physically disabled individuals access campus resources and much more. I enjoy building practical applications that solve meaningful problems and improve user experiences. 
                  </p>
                  <p>
                  Beyond coding, I strongly believe that discipline, consistency, and continuous learning are the qualities that truly differentiate a developer. My current goal is to become a skilled software engineer by mastering DSA, development, and system design fundamentals.
                  </p>
                  <p>
                  Apart from technology, I also enjoy creating artwork and making handmade gifts for my loved ones, as it allows me to express creativity beyond programming.
                  </p>
                  <p>
                  Thank you for reading!
                  </p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {/* <a href="#projects" className="btn btn-primary hover:scale-105 transition-transform">
                    View Projects
                  </a> */}
                  <a href="./Akhilesh_Vankayala_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary hover:scale-105 transition-transform">
                    View Resume
                  </a>
                  <a href="./Akhilesh_Vankayala_Resume.pdf" download className="btn btn-secondary hover:scale-105 transition-transform">
                    Download Resume
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
                  <img
                    src="./akhilesh-face.jpg"
                    alt="Akhilesh Vankayala"
                    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[300px] md:h-[300px] object-cover rounded-full border-4 border-background shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="section py-24 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.h2
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl font-bold text-center mb-16 text-foreground"
            >
              Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./slack-clone.png" alt="Slack Clone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Slack Clone</h3>
                  <p className="text-muted-foreground mb-3">
                    1.Developed a full-stack real-time chat application inspired by Slack, enabling instant messaging, channel-based communication, and secure user authentication.<br></br>
                    3.Built scalable REST APIs with Node.js, Express.js, and MongoDB for user management, chat handling, authentication, and message storage with JWT-based security.<br></br>
                    4.Integrated Cloudinary and Multer for media upload and management, supporting image sharing, optimized storage, and responsive message previews.<br></br>
                    5.Utilized React, Vite, Tailwind CSS, Zustand, and React Hook Form to create a modern, responsive, and user-friendly frontend interface with efficient state management.<br></br>
                    6.Designed the application using a modular full-stack architecture with reusable React components, middleware-based backend structure, and real-time event-driven communication.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT Authentication', 'Cloudinary', 'Multer', 'Zustand', 'React Hook Form'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://slack-clone-group-project-1.vercel.app/" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Deployed✅<br></br>Click Me!!(deployed projects take time to load..please be patient😉☺️)</a>
                    <a href="https://github.com/Akhileshvankayala/slack-clone-group-project-1" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./route-optimisation-system.png" alt="Route Optimisation System" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Route Optimisation System</h3>
                  <p className="text-muted-foreground mb-3">
                    1.Developed a full-stack biomedical waste collection optimization system to automate hospital waste management, route planning, and operational analytics through an interactive web platform.<br></br>
                    2.Implemented a capacity-aware route optimization engine using Dijkstra’s Algorithm and NetworkX to compute shortest waste collection paths while considering truck capacity constraints, disposal thresholds, and multi-trip planning.<br></br>
                    3.Built secure role-based access control for administrators, staff, and drivers using JWT authentication and bcrypt, enabling route monitoring, waste tracking, and operational management.<br></br>
                    4.Designed scalable REST APIs with FastAPI, SQLAlchemy, and SQLite for hospital management, analytics reporting, route computation, and real-time operational workflows, with Docker-based deployment support.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[ 'React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'SQLAlchemy', 'SQLite', 'NetworkX', 'JWT Authentication', 'bcrypt', 'Docker', 'Docker Compose'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://drive.google.com/file/d/130EZlDwx_50xNcYJd6-KKGl-xq-OSxl5/view?usp=sharing" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Live Demo</a>
                    <a href="https://github.com/Akhileshvankayala/garbageDisposal-Route_Optimisation_System" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./accessible-campus-services.png" alt="Accessible Campus Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Accesible Campus Services</h3>
                  <p className="text-muted-foreground mb-3">
                    1.eveloped a full-stack web application for physically challenged individuals, enhancing mobility assistance and canteen ordering.<br></br>
                    2.Achieved 100% accuracy based on 10+ requests in canteen orders, mobility assistance requests, and service requests sent via Gmail.<br></br>
                    3.Utilized React, TypeScript, Vite, and Tailwind CSS for a modern, responsive UI; integrated Supabase for authentication and real-time data.<br></br>
                    4.Automated deployment processes and managed secure environment variables; enabled service dashboards and an AI-powered chatbot for support.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Gemini API'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://drive.google.com/file/d/13wFr9ahowhYxJwOSPf7I73BFIqCgLoL3/view" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Live Demo</a>
                    <a href="https://github.com/Akhileshvankayala/physically-challenged-campus-services" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./HirBee.png" alt="HirBee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">HirBee</h3>
                  <p className="text-muted-foreground mb-3">
                    1.Developed a full-stack Smart Placement Tracker platform to streamline recruitment workflows for college Training & Placement Offices (TPO), including student applications, company drives, and placement analytics.<br></br>
                    2.Implemented role-based dashboards for students and administrators with features such as eligibility-based applications, recruitment status tracking, automated email notifications, and resume management.<br></br>
                    3.Built secure REST APIs using Node.js, Express.js, MongoDB, and JWT authentication to manage student records, company drives, application workflows, and access control functionalities.<br></br>
                    4.Integrated Cloudinary, Nodemailer, ExcelJS, and PapaParse to support resume uploads, automated email communication, CSV-based student data import, and real-time placement report generation in Excel format.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'Cloudinary', 'Nodemailer', 'ExcelJS', 'PapaParse', 'Multer'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://smart-placement-tracker-indol.vercel.app/login" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Deployed✅<br></br>Click Me!!(deployed projects take time to load..please be patient😉☺️)</a>
                    <a href="https://github.com/Akhileshvankayala/smart-placement-tracker" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./result-extractor.png" alt="Result Extractor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Result Extractor</h3>
                  <p className="text-muted-foreground mb-3">
                    1.Developed a full-stack web application to automate extraction and analysis of student results from a university portal using Python (Flask),
                    Selenium, and Next.js.
                    2.Implemented a robust backend with Flask and Selenium for automated data scraping, processing with Pandas, and dynamic PDF/Excel
                    report generation.
                    3.Built a responsive frontend using Next.js and React, enabling users to search, view, and download results with 98% accuracy after
                    searching 100+ records.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Python', 'Flask', 'Selenium', 'Next.js', 'React'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://drive.google.com/file/d/1Nm9TVcsLzULCYgaUffftzHSryt5wuu8U/view" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Live Demo</a>
                    <a href="https://github.com/Akhileshvankayala/Result_Extractor-working" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./study-collab-learn.png" alt="Study Collab Learn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Study-Collab-Learn</h3>
                  <p className="text-muted-foreground mb-3">
                    1.Developed a full-stack web application to automate extraction and analysis of student results from a university portal using Python (Flask),
                    Selenium, and Next.js.
                    2.Implemented a robust backend with Flask and Selenium for automated data scraping, processing with Pandas, and dynamic PDF/Excel
                    report generation.
                    3.Built a responsive frontend using Next.js and React, enabling users to search, view, and download results with 98% accuracy after
                    searching 100+ records.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Node.js', 'MongoDB'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Live Demo</a>
                    <a href="#" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./aura.png" alt="AURA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">AURA</h3>
                  <p className="text-muted-foreground mb-3">
                    1.Developed a full-stack web application to automate extraction and analysis of student results from a university portal using Python (Flask),
                    Selenium, and Next.js.
                    2.Implemented a robust backend with Flask and Selenium for automated data scraping, processing with Pandas, and dynamic PDF/Excel
                    report generation.
                    3.Built a responsive frontend using Next.js and React, enabling users to search, view, and download results with 98% accuracy after
                    searching 100+ records.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Node.js', 'MongoDB'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Live Demo</a>
                    <a href="https://github.com/Akhileshvankayala/AURA" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./plant-farmer.png" alt="Plant Farmer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Plant-Farmer</h3>
                  <p className="text-muted-foreground mb-3">
                    1.Developed a full-stack web application to automate extraction and analysis of student results from a university portal using Python (Flask),
                    Selenium, and Next.js.
                    2.Implemented a robust backend with Flask and Selenium for automated data scraping, processing with Pandas, and dynamic PDF/Excel
                    report generation.
                    3.Built a responsive frontend using Next.js and React, enabling users to search, view, and download results with 98% accuracy after
                    searching 100+ records.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Node.js', 'MongoDB'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Live Demo</a>
                    <a href="#" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src="./single-player-quiz.png" alt="Single Player Quiz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Single Player Quiz</h3>
                  <p className="text-muted-foreground mb-3">
                    1.Developed a full-stack quiz application using Java backend and modern web technologies.<br></br>
                    2.Implemented server-side architecture with custom Stack and LinkedList data structures, RESTful API design, and session management for quiz logic.<br></br>
                    3.Executed an engaging frontend with vanilla JavaScript, HTML5, and CSS3, featuring responsive design, real-time timer, and lifeline systems
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Java', 'JavaScript', 'HTML5', 'CSS3'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-accent-blue rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://drive.google.com/file/d/1vjEbushdg1mpa3CRfxcVQdW8mC_mm_Px/view" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">Live Demo</a>
                    <a href="https://github.com/Akhileshvankayala/quiz-for-IP" className="text-accent-blue hover:text-blue-500 font-medium transition-colors">GitHub</a>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section py-24 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.h2
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl font-bold text-center mb-16 text-foreground"
            >
              Certifications
            </motion.h2>
            
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
              {/* Carousel */}
              <div className="w-full lg:w-1/2">
                <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-secondary/30 h-full flex flex-col justify-center">
                  <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {certificatesData.map((cert, index) => (
                      <div key={index} className="min-w-full flex-shrink-0 snap-center p-2 sm:p-6">
                        <div className="relative aspect-[4/3] bg-background/50 rounded-xl overflow-hidden border border-white/10 shadow-inner group-hover:scale-[1.01] transition-transform">
                          <img src={`/Certificates/${cert.file}`} alt={cert.name} className="w-full h-full object-contain" />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent p-4 transition-opacity">
                            <p className="text-foreground font-semibold text-center text-sm md:text-base drop-shadow-md">{cert.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-1 left-0 right-0 flex justify-center pointer-events-none opacity-70 overflow-hidden px-10">
                    <p className="text-2xl  font-medium text-white">Scroll to view {certificatesData.length} certificates</p>
                  </div>
                </div>
              </div>

              {/* Names List */}
              <div className="w-full lg:w-1/2">
                <div className="bg-secondary/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-lg h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-accent-blue text-3xl">🏆</span>Certificates(scroll to view all names)
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[450px] overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {certificatesData.map((cert, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: Math.min(idx * 0.03, 0.3) }}
                        className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors bg-background/30 p-2.5 rounded-lg border border-white/5 group"
                      >
                        <span className="text-accent-blue mt-0.5 text-xs">•</span>
                        <a href={`/Certificates/${cert.file}`} target="_blank" rel="noreferrer" className="font-medium leading-tight text-xs hover:underline flex-1">
                          {cert.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section py-24 bg-secondary/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.h2
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl font-bold text-center mb-16 text-foreground"
            >
              Contact
            </motion.h2>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-background/80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-accent-blue mb-4">Let&apos;s work together</h3>
                <p className="text-muted-foreground mb-10">
                  I&apos;m always interested in hearing about new opportunities and interesting projects.
                </p>
                
                <div className="space-y-6 text-left max-w-xs mx-auto mb-10">
                  <div className="flex items-center gap-4 text-lg">
                    <span className="text-2xl bg-secondary p-3 rounded-full">📧</span>
                    <span className="text-foreground">akhileshvankayala158@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <span className="text-2xl bg-secondary p-3 rounded-full">📱</span>
                    <span className="text-foreground">+91 8125671508</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <span className="text-2xl bg-secondary p-3 rounded-full">📍</span>
                    <span className="text-foreground">Hyderabad, India</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  <a href="https://www.linkedin.com/in/akhilesh-vankayala-5ba7b1343/" className="px-5 py-3 sm:px-6 bg-secondary text-accent-blue font-semibold rounded-lg hover:bg-primary/20 hover:scale-105 transition-all shadow-sm flex-1 min-w-[120px] max-w-[200px]">
                    LinkedIn
                  </a>
                  <a href="https://github.com/Akhileshvankayala" className="px-5 py-3 sm:px-6 bg-secondary text-accent-blue font-semibold rounded-lg hover:bg-primary/20 hover:scale-105 transition-all shadow-sm flex-1 min-w-[120px] max-w-[200px]">
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/akhilesh._.158/" className="px-5 py-3 sm:px-6 bg-secondary text-accent-blue font-semibold rounded-lg hover:bg-primary/20 hover:scale-105 transition-all shadow-sm flex-1 min-w-[120px] max-w-[200px]">
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-white/5 text-center text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Akhilesh Vankayala. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
