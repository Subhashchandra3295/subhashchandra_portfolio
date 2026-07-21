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
const NAME_STR = "Hi, I'm Subhashchandra Borad";
const ROLES = ['Full Stack Developer','PHP Developer','Frontend Developer'];

// import Word from "./Word";
const Main = () => {
  const { t } = useLanguage();

  const [nameDisp, setNameDisp] = React.useState('');
  const [roleDisp, setRoleDisp] = React.useState('');

  React.useEffect(() => {
    const timers = [];

    // type name once (avoid appending undefined by checking bounds)
    let ni = 0;
    const nameTimer = setInterval(() => {
      if (ni < NAME_STR.length) {
        setNameDisp((s) => s + NAME_STR[ni]);
        ni++;
        if (ni === NAME_STR.length) {
          clearInterval(nameTimer);
          // start role loop after short delay
          timers.push(setTimeout(startRoleLoop, 300));
        }
      }
    }, 35);
    timers.push(nameTimer);

    function startRoleLoop() {
      let rIndex = 0;

      const loopNext = () => {
        const role = ROLES[rIndex];
        // type
        let i = 0;
        const typeTimer = setInterval(() => {
          setRoleDisp(role.slice(0, i + 1));
          i++;
          if (i >= role.length) {
            clearInterval(typeTimer);
            // pause then delete
            timers.push(setTimeout(() => {
              let j = role.length;
              const delTimer = setInterval(() => {
                j--;
                setRoleDisp(role.slice(0, j));
                if (j <= 0) {
                  clearInterval(delTimer);
                  rIndex = (rIndex + 1) % ROLES.length;
                  timers.push(setTimeout(loopNext, 250));
                }
              }, 35);
              timers.push(delTimer);
            }, 1000));
          }
        }, 35);
        timers.push(typeTimer);
      };

      loopNext();
    }

    return () => {
      // cleanup all timers
      timers.forEach((t) => clearInterval(t) || clearTimeout(t));
    };
  }, []);

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
          <p className='uppercase text-sm tracking-widest text-gray-600 animate-pulse'>
            {t('main.build')}
          </p>
          <h1 className='py-4 text-gray-700 text-4xl font-bold'>
            {nameDisp}<span className='text-[#5651e5]'> </span><span className='animate-pulse'>|</span>
          </h1>
          <div className='mt-2'>
            <h1 className='py-2 text-gray-700 text-2xl font-semibold'>{roleDisp}<span className='animate-pulse'>|</span></h1>
          </div>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
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
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Subhashchandra3295'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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
