import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BsDownload } from "react-icons/bs";

const resume = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            window.open(fileURL, "_blank")
            // alink.href = 'Resume.pdf';
            alink.click();
        })
    })
}

  return (
    <motion.div
    initial={{
      opacity: 0,   
     }}
     animate = {{
       x : 0,
       opacity : 1,
       scale : 1,
     }}
     transition ={{ duration : 1 }}>
      <Head>
        <title>Subhashchandra | Resume</title>
        <meta
          name='description'
          content='I’m a web developer specializing in building exceptional digital experiences with backend integration.'
        />
        <link rel='icon' href='/SB.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Subhashchandra Borad</h2>
          <div className='flex'>

            <a className='cursor-pointer'
              onClick={() => onButtonClick()}
              target='_blank'
              rel='noreferrer'
            >
              <BsDownload size={20} style={{ marginRight: '1rem' }} />
            </a> 
            <a
              href='https://www.linkedin.com/in/subhashchandra-borad/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Subhashchandra3295'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <div>
        <p>
            I am a Full Stack Developer with a creative mind, the ability to take initiative in work and manage time effectively. Exceptional management skills, team builder as well as a motivator with a proven record of success in this regard.
        </p>
        <br />

        <p>
          I am able to bring both strategic and tactical solutions together using technology. I am highly adaptable and thrive on opportunities that allow me to explore my passion for learning. This drive coupled with my extensive experience has led me to be a dynamic, creative problem solver always ready to learn and contribute.
        </p>
        <br />

        <p>
          I do the work because I love it. I like the tech industry. I like the people I meet. I embrace the nerd and I love to make the web a better place. Hopefully, we will cross paths in the real world someday, and we can make it a better place together.
        </p>
        <br />
      </div>


        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full Stack Web Developer
            <span className='px-2'>|</span>Backend Developer
            <span className='px-2'>|</span>PHP
            <span className='px-2'>|</span>Laravel
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>JQuery
            <span className='px-2'>|</span>Angular
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>Node
          </p>
          <p className='py-2'>
            <span className='px-2'></span>MySQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>RESTAPI
            </p>
          <p className='py-2'>
            <span className='font-bold'>Learning</span>
            <span className='px-2'>|</span>React, Next JS, Docker
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Liwetec GmbH
            </span>
            <span className='px-2'>|</span>Bobingen (Remote), Germany.
          </p>
          <p className='py-1 italic'>Full Stack Web Developer (Aug-2022 - present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed and maintained the Elevator Portal, an online platform for the elevator industry, streamlining planning and calculations.
            </li>
            <li>
              Created a user-friendly, globally accessible system for elevator professionals, saving time and enhancing material optimization.
            </li>
            <li>
              Implemented database-driven tools for elevator system planning, configuration, and component calculations.
            </li>
            <li>
              Ensured data accuracy through automatic plausibility checks and standard-compliant design.
            </li>
            <li>
              Enhanced user experience with features allowing component selection and document printing.
            </li>
            <li>
              Collaborated with cross-functional teams to improve Elevator Portal functionality.
            </li>
            <li>
              Provided technical support for a seamless user experience.
            </li>
            <li>
              Maintained Elevator Portal for real-time updates and adaptability.
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Bosch Rexroth AG
            </span>
            <span className='px-2'>|</span>Ulm, Germany.
          </p>
          <p className='py-1 italic'>Full Stack Developer (May-2022 - June-2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Designed cross-browser and cross-device compatible websites - &quot;Smart Project Management (SPM)&quot;, &quot;BR Component Prototype Tool and &quot;Application Product Selector (APS)&quot;
            </li>
            <li>
              Enhanced login & data security with Single Sign-On, JWT in Restful API and Cookie Management, resulting in 60% increase in user security.
            </li>
            <li>
                Established efficient, reusable services for user management, boosting global user management efficiency by 50%.
            </li>
            <li>
              Resolved over 25+ critical bugs in company products and optimize customer-sales and sales-business relationships to improved customer satisfaction.
            </li>
            <li>
              Developed REST APIs for frontend-backend integration, increasing data exchange efficiency by 30%.
            </li>
            <li>
              Implemented robust testing and continuous integration methods, reducing post-release bugs by 30% and improving code maintainability.
            </li>
            <li>
              Created and maintained project documentation, including architecture diagrams and user manuals, for comprehensive user & developer resources.
            </li>
            <li>
              Successfully delivered projects on time and within budget using Agile methodologies.
            </li>
            <li>
              Strong collaboration and communication skills for effective teamwork across departments.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              eZee Technosys Pvt.Ltd.
            </span>
            <span className='px-2'>|</span>Surat, India.
          </p>
          <p className='py-1 italic'>Associate Software Engineer (PHP Developer) (Sep-2016 - Mar-2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Integrated new channels and enhanced existing ones using third-party APIs as a Channel Manager Executive.
            </li>
            <li>
              Provided top-notch technical support to key channel partners, including HostelWorld, Agoda.com, Traveloka, Goibibo, and Paytm.
            </li>
            <li>
              Efficiently managed channels, resulting in a 25% increase in partner satisfaction and a 15% revenue boost for partners like Booking.com, Expedia, and Airbnb.
            </li>
            <li>
              Expert in third-party API integration (SOAP/XML/JSON) and rapid resolution of 95% of bug/defect issues within 24 hours, improving product quality.
            </li>
            <li>
              Effectively handled priority technical support, leading to a 20% reduction in product bugs and defects.
            </li>
            <li>
              Demonstrated exceptional collaboration, self-organization, and dedication, ensuring 100% on-time project delivery.
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
      </div>


    {/*   <h5 className='text-center underline text-[18px] py-4'>
          Achivements
        </h5> */}
    </motion.div>
  );
};

export default resume;
