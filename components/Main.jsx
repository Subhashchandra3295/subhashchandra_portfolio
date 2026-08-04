import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BgCircles from './BgCircles';
import Spline from './Spline.jsx';
import { useLanguage } from '../context/LanguageContext';

// static strings moved to module scope to avoid hook dependency warnings
const TYPE_NAME = 'Subhashchandra Borad';
const ROLES = ['Full Stack Developer','PHP Developer','Frontend Developer'];

// import Word from "./Word";
const Main = () => {
  const { t } = useLanguage();

  const [roleDisp] = useTypewriter({
    words: ROLES,
    loop: true,
    typeSpeed: 35,
    deleteSpeed: 35,
    delaySpeed: 1000,
  });

  return (
    <div id='home' className='w-full h-screen text-center z-10'>
    
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center z-10'>
      
        <motion.div 
         initial={{
           opacity: 0,   
          }}
          animate = {{
            x : 0,
            opacity : 1,
            scale : 1,
          }}
          transition ={{ duration : 1.5 }} className="absolute">
             
          {/* <BgCircles/> */}
          <p className='uppercase text-sm tracking-widest text-text-muted-light dark:text-text-muted animate-pulse'>
            {t('main.build')}
          </p>
          <h1 className='py-4 text-text-primary-light dark:text-text-primary text-4xl font-bold'>
            {(t('main.hi') || "Hi, I'm").trim()} <span className='bg-accent-gradient bg-clip-text text-transparent'>{TYPE_NAME}</span>
          </h1>
          <div className='mt-2'>
            <h1 className='py-2 text-text-primary-light dark:text-text-primary text-2xl font-semibold'>{roleDisp}<Cursor cursorStyle='|' /></h1>
          </div>
          <p className='py-4 text-text-muted-light dark:text-text-muted sm:max-w-[70%] m-auto'>
           <b>
            {t('main.summary')}
            </b>
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 z-10'>
            <a
              href='https://www.linkedin.com/in/subhashchandra-borad/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black/40 p-6 cursor-pointer hover:scale-110 hover:shadow-glow ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Subhashchandra3295'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black/40 p-6 cursor-pointer hover:scale-110 hover:shadow-glow ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black/40 p-6 cursor-pointer hover:scale-110 hover:shadow-glow ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black/40 p-6 cursor-pointer hover:scale-110 hover:shadow-glow ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </motion.div>
        <Spline/>
        
      </div>
    </div>
  );
};

export default Main;
