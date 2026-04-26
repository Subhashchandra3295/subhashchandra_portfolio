import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";

const resume = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        window.open(fileURL, "_blank");
        // alink.href = 'Resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Subhashchandra | Resume</title>
        <meta
          name="description"
          content="I’m a web developer specializing in building exceptional digital experiences with backend integration."
        />
        <link rel="icon" href="/SB.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Subhashchandra Borad</h2>
          <div className="flex">
            <a
              className="cursor-pointer"
              onClick={() => onButtonClick()}
              target="_blank"
              rel="noreferrer"
            >
              <BsDownload size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/subhashchandra-borad/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Subhashchandra3295"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Building Scalable Web Apps <span className="px-1">|</span> Technical Leadership{" "}
              <span className="px-1">|</span> Solving Real-World Problems
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Building Scalable Web Apps</p>
            <p className="py-2">Technical Leadership</p>
            <p>Solving Real-World Problems</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">
            🚀 Full Stack Developer | 8+ Years | Laravel · Symfony · Angular · React · Node.js | Germany
          </p>
          <br />

          <p>
            I'm a Full Stack Software Developer with over 8 years of experience building scalable, high-performance web applications across enterprise, research, and industrial domains.
          </p>
          <br />

          <p>
            Currently working at the Leibniz Institute (IOER) in Dresden, where I develop Research Information Systems (RIS), document management platforms, and data-driven web tools using Laravel, Angular, React, and MySQL — all in compliance with GDPR.
          </p>
          <br />

          <p>
            Previously at Bosch Rexroth and LIWETEC GmbH, I built global platforms, RESTful APIs, and engineering tools serving hundreds of international users and partners.
          </p>
          <br />

          <p className="font-bold text-lg">What I bring to the table:</p>
          <ul className="list-disc list-outside px-7 py-2 leading-relaxed">
            <li>🔧 Strong backend skills in Laravel/Symfony (PHP), Node.js, PostgreSQL, MySQL</li>
            <li>🎨 Modern frontend with Angular, React, Vue.js, Next.js</li>
            <li>☁️ Cloud & DevOps: AWS S3, Azure, Docker, CI/CD, GitLab</li>
            <li>🔐 Security-focused: Authentication, RBAC, GDPR compliance</li>
            <li>🤝 Agile team player with experience in cross-functional, distributed teams</li>
          </ul>
          <br />

          <p>
            I hold an M.Sc. in Automotive Software Engineering from TU Chemnitz and an MCA (Outstanding grade) from Pune University.
          </p>
          <br />

          <p>
            Open to exciting Full Stack or Backend-focused roles in Germany. Let's connect!
          </p>
          <br />
        </div>

        {/* Skills 
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full Stack Web Developer
            <span className="px-2">|</span>Backend Developer
            <span className="px-2">|</span>PHP
            <span className="px-2">|</span>Laravel
            <span className="px-2">|</span>Symfony
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>JQuery
            <span className="px-2">|</span>Angular
            <span className="px-2">|</span>React
            <span className="px-2">|</span>NextJS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>Typescript
            <span className="px-2">|</span>Node
          </p>
          <p className="py-2">
            <span className="px-2"></span>MySQL
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>RESTAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Learning</span>
            <span className="px-2">|</span>Symphony
          </p>
        </div>*/}

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Leibniz Institute of Ecological Urban and Regional Development
              (IOER)
            </span>
            <span className="px-2">|</span>Dresden (Hybrid), Germany.
          </p>
          <p className="py-1 italic">
            Software Developer Research Information System (Sept-2024 - present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Eliminated 40% manual processing by digitizing research and administrative workflows across multiple departments
            </li>
            <li>
              Accelerated page load time by 25% through query optimization and caching (Angular, React, Laravel, MySQL)
            </li>
            <li>
              Designed and maintained 10+ RESTful APIs integrating external partner systems with high reliability
            </li>
            <li>
              Built a structured document management system improving retrieval and audit traceability for large datasets
            </li>
            <li>
              Raised test coverage to 80% by enforcing clean code, OOP, and modular architecture
            </li>
            <li>
              Ensured 99% uptime on GDPR-compliant systems through monitoring and rapid issue resolution
            </li>
            <li>
              Streamlined workflows for stakeholders by replacing manual processes with custom web tools
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Liwetec GmbH</span>
            <span className="px-2">|</span>Bobingen (Remote), Germany.
          </p>
          <p className="py-1 italic">
            Full Stack Web Developer (Aug-2023 - July-2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Scaled enterprise platform supporting 500+ concurrent users across multiple countries
            </li>
            <li>
              Cut release cycle time by 30% by migrating monolithic architecture to microservices (6+ services)
            </li>
            <li>
              Architected 15+ REST APIs improving inter-service communication and reducing latency
            </li>
            <li>
              Decreased bug regression by 35% using OOP, dependency injection, and structured architecture patterns
            </li>
            <li>
              Increased test coverage to 75% and established code review practices across the team
            </li>
            <li>
              Slashed deployment time significantly using Docker and CI/ CD pipelines
            </li>
            <li>
              Delivered GDPR-compliant solutions in Agile/ Scrum environments
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Bosch Rexroth AG</span>
            <span className="px-2">|</span>Ulm (Hybrid), Germany.
          </p>
          <p className="py-1 italic">
            Full Stack Developer | (Angular + PHP - Backend) (May-2022 -
            June-2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built 3 enterprise applications used by global engineering teams across multiple countries
            </li>
            <li>
              Reduced manual data entry by 50% through API integrations across internal systems
            </li>
            <li>
              Boosted release stability by 40% via CI/ CD pipelines and Azure DevOps
            </li>
            <li>
              Secured 500+ users with authentication, RBAC, and 2FA implementation
            </li>
            <li>
              Optimized API performance by 30% through debugging and query optimization
            </li>
            <li>
              Delivered features on time in Agile development cycles
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Yanolja Cloud Solution, (formerly eZee)
            </span>
            <span className="px-2">|</span>Surat, India.
          </p>
          <p className="py-1 italic">
            Associate Software Engineer (PHP Developer) (Sep-2016 - Mar-2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Integrated 20+ third-party APIs including Booking.com, Expedia, Airbnb, and Agoda
            </li>
            <li>
              Processed 10,000+ daily transactions ensuring high reliability and data consistency
            </li>
            <li>
              Strengthened database performance by 30% through query optimization and indexing
            </li>
            <li>
              Sustained 99.5% uptime during peak usage periods with proactive system monitoring
            </li>
            <li>
              Reduced feature delivery time by 25% by refactoring legacy systems using MVC architecture
            </li>
          </ul>
        </div>

        {/*
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              TechLeaper Systems Pvt. Ltd
            </span>
            <span className="px-2">|</span>Pune, India.
          </p>
          <p className="py-1 italic">
            Intern- Unity Game Developer (Jan-2016 - June-2016)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed gameplay mechanics, UI components, and core game systems
              for mobile and PC games using Unity3D and C#
            </li>
            <li>
              Collaborated with designers and artists to integrate game assets,
              animations, and visual effects
            </li>
            <li>
              Optimized performance and memory usage to ensure smooth gameplay
              across multiple devices and platforms
            </li>
            <li>
              Contributed to the successful launch of the mobile game “Nuts
              Run”, utilizing Unity, C#, and JavaScript
            </li>
          </ul>
        </div>*/}

        {/*  */}
        {/*  <h5 className='text-center underline text-[18px] py-4'>
          Learning
        </h5> */}

        {/* Experience */}
        {/* <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Currently, I am learning three js which is really amazing that
              one can get 3D view of their website which is amazing stuff.
            </li>
            <li>
              I am also learning Next JS as it is one of the trending
              frameworks and using this we can develop at fast pace.
            </li>
            <li>
              Durig my jobtime I never get chance to use AWS and Docker,
              so that I have started learning it by my self as they are 
              the most powerful tools for the main part of the development
              cycle.
            </li>
          </ul>
        </div> */}

        { <h5 className='text-center underline text-[18px] py-4'>
          Extra-curricular Activities & Achievements
        </h5> }

        { <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Recognized multiple times for high performance and dedication.
            </li>
            <li>
              Active participant in internal coding competitions and technical initiatives
            </li>
          </ul>
        </div> }
      </div>

      
    </motion.div>
  );
};

export default resume;
