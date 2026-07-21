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
// import Word from "./Word";
const Main = () => {
  const { t } = useLanguage();

  const nameStr = "Hi, I'm Subhashchandra Borad";
  const roles = ['Full Stack Developer','PHP Developer','Frontend Developer'];
  const [nameDisp, setNameDisp] = React.useState('');
  const [rolesDisp, setRolesDisp] = React.useState([]);
  const [curr, setCurr] = React.useState('');

  React.useEffect(() => {
    let i = 0;
    const nameInterval = setInterval(() => {
      setNameDisp((s) => s + nameStr[i]);
      i++;
      if (i >= nameStr.length) {
        clearInterval(nameInterval);
        setTimeout(startRoles, 300);
      }
    }, 35);

    function startRoles() {
      let r = 0;
      const typeRole = () => {
        if (r >= roles.length) return;
        const role = roles[r];
        let j = 0;
        const ri = setInterval(() => {
          setCurr(role.slice(0, j + 1));
          j++;
          if (j >= role.length) {
            clearInterval(ri);
            setRolesDisp((a) => [...a, role]);
            setCurr('');
            r++;
            setTimeout(typeRole, 400);
          }
        }, 35);
      };
      typeRole();
    }

    return () => clearInterval(nameInterval);
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
            {rolesDisp.map((r, idx) => (
              <h1 key={idx} className='py-2 text-gray-700 text-2xl font-semibold'>{r}</h1>
            ))}
            {curr && <h1 className='py-2 text-gray-700 text-2xl font-semibold'>{curr}<span className='animate-pulse'>|</span></h1>}
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
