import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';
import {motion} from "framer-motion"
import { useLanguage } from '../context/LanguageContext';
const About = () => {
  const { t } = useLanguage();

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
          <p className='uppercase text-xl tracking-widest text-accent'>
            {t('about.title')}
          </p>
          <h2 className='py-4 text-text-primary-light dark:text-text-primary'>{t('about.subtitle')}</h2>
          <p className='py-2 text-text-muted-light dark:text-text-muted'>
          {t('about.p1')}
         </p>

          <p className='py-2 text-text-muted-light dark:text-text-muted'>
          {t('about.p2')}

          </p>

          <p className='py-2 text-text-muted-light dark:text-text-muted'>
          {t('about.p3')}
          </p>

          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-black/40 rounded-xl flex items-center justify-center p-4 hover:scale-105 hover:shadow-glow ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
