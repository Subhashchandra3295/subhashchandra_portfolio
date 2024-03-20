import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';
import {motion} from "framer-motion"
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <motion.div
       initial={{
        opacity: 0,   
       }}
       whileInView = {{
         x : 0,
         opacity : 1,
         scale : 1,
       }}
       transition ={{ duration : 1.5 }}
      className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a Full Stack Developer with a creative mind, the ability to take initiative in work and manage time effectively. Exceptional management skills, team builder as well as a motivator with a proven record of success in this regard. 
         </p>

          <p className='py-2 text-gray-600'>
          I am able to bring both strategic and tactical solutions together using technology. I am highly adaptable and thrive on opportunities that allow me to explore my passion for learning. This drive coupled with my extensive experience has led me to be a dynamic, creative problem solver always ready to learn and contribute.
          
          </p>

          <p className='py-2 text-gray-600'>
          I do the work because I love it. I like the tech industry. I like the people I meet. I embrace the nerd and I love to make the web a better place. Hopefully, we will cross paths in the real world someday and we can make it a better place together.
          </p>
          
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
