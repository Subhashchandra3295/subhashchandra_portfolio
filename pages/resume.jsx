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
          <p>
            I am a Full Stack Developer with a creative mind, the ability to
            take initiative in work and manage time effectively. Exceptional
            management skills, team builder as well as a motivator with a proven
            record of success in this regard.
          </p>
          <br />

          <p>
            I am able to bring both strategic and tactical solutions together
            using technology. I am highly adaptable and thrive on opportunities
            that allow me to explore my passion for learning. This drive coupled
            with my extensive experience has led me to be a dynamic, creative
            problem solver always ready to learn and contribute.
          </p>
          <br />

          <p>
            I do the work because I love it. I like the tech industry. I like
            the people I meet. I embrace the nerd and I love to make the web a
            better place. Hopefully, we will cross paths in the real world
            someday, and we can make it a better place together.
          </p>
          <br />
        </div>

        {/* Skills */}
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
        </div>

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
              Designed and developed Research Information Systems (RIS) to
              support research management, evaluation, and reporting processes.
            </li>
            <li>
              Planned and implemented digitization projects for administrative
              and research workflows, improving operational efficiency.
            </li>
            <li>
              Built and maintained database-driven web applications using
              Laravel (PHP MVC framework), MySQL, and modern frontend frameworks
              such as Angular and React, ensuring scalable and responsive user
              interfaces.
            </li>
            <li>
              Built and enhanced document management systems (DMS) for
              structured storage and retrieval of institutional data.
            </li>
            <li>
              Collaborated cross-functionally with researchers, administration,
              and IT teams to deliver scalable and user-centric solutions.
            </li>
            <li>
              Improved controlling and planning tools, enabling better
              data-driven decision-making and reporting accuracy.
            </li>
            <li>
              Performed software maintenance, monitoring, and optimization of
              internal web applications.
            </li>
            <li>
              Ensured software quality assurance, including testing, debugging,
              and documentation of developed systems.
            </li>
            <li>
              Created technical documentation, user guides, and training
              materials to support internal users and stakeholders.
            </li>
            <li>
              Ensured compliance with data protection regulations (GDPR) while
              handling sensitive research and administrative data.
            </li>
            <li>
              Contributed to agile project environments, working on both
              small-scale and large institutional projects.
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
              Developed and maintained the Elevator Portal, a globally
              accessible platform used by elevator companies of various sizes.
            </li>
            <li>
              Built database-driven web applications using Laravel (PHP MVC),
              MySQL, Angular/React, HTML, and CSS.
            </li>
            <li>
              Implemented engineering calculation modules for elevator component
              design in compliance with industry standards.
            </li>
            <li>
              Developed tools for system planning, configuration, and component
              calculations, improving operational efficiency.
            </li>
            <li>
              Created analytical dashboards and reports to support data-driven
              decision-making Optimized system performance and ensured
              scalability, reliability, and real-time updates
            </li>
            <li>
              Provided technical support and maintenance, ensuring high
              availability and seamless user experience.
            </li>
            <li>
              Documented workflows and system processes to enhance knowledge
              sharing and team productivity.
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
              Developed scalable web applications including Smart Project
              Management (SPM), Component Prototype Tool, and Application
              Product Selector (APS)
            </li>
            <li>
              Designed secure, scalable architectures and responsive UI aligned
              with business requirements
            </li>
            <li>
              Built and tested RESTful APIs (Postman) supporting 150+ global
              projects and 200+ partner datasets
            </li>
            <li>
              Implemented authentication, authorization, and role-based access
              control for global users
            </li>
            <li>
              Developed features such as two-factor authentication, project
              tracking systems, and validation mechanisms
            </li>
            <li>
              Improved application performance through bug fixing, testing, and
              optimization
            </li>
            <li>
              Applied Agile methodologies to deliver projects efficiently and
              collaborate across teams
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
              Integrated and managed third-party APIs (SOAP, XML, JSON) for
              global travel platforms
            </li>
            <li>
              Worked with major partners including Booking.com, Expedia, Airbnb,
              Agoda, and Traveloka
            </li>
            <li>
              Developed and optimized RESTful APIs to enable seamless
              communication between systems
            </li>
            <li>
              Reduced application load times by 30% through query optimization
            </li>
            <li>
              Resolved bugs and defects within tight SLAs, improving overall
              system stability and reliability
            </li>
            <li>
              Implemented MVC architecture to enhance application scalability
              and maintainability
            </li>
            <li>
              Collaborated with QA teams to reduce post-deployment issues
              through rigorous testing
            </li>
            <li>
              Delivered technical support for high-priority issues, improving
              partner satisfaction and system uptime
            </li>
          </ul>
        </div>

        {/* Experience */}
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
        </div>

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
