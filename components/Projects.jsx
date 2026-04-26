import React from 'react';
import Link from 'next/link';
import {motion} from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const projectItems = t('projects.items') || [];

  return (
    <div id='projects' className='w-full'>
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
      className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          {t('projects.title')}
        </p>
        <h2 className='py-4'>{t('projects.subtitle')}</h2>
        <p className='max-w-3xl text-gray-600 dark:text-slate-300 pb-8'>
          {t('projects.intro')}
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          {Array.isArray(projectItems) && projectItems.map((project) => (
            <div
              key={project.title}
              className='rounded-2xl p-6 shadow-xl shadow-gray-400 dark:shadow-black/40 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:scale-[1.02] transition-transform duration-300'
            >
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-sm uppercase tracking-widest text-[#5651e5]'>
                    Case Study
                  </p>
                  <h3 className='text-2xl py-2'>{project.title}</h3>
                </div>
                <div className='text-xs font-semibold px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'>
                  {project.tech}
                </div>
              </div>
              <p className='py-4 text-gray-600 dark:text-slate-300'>
                {project.summary}
              </p>
              <p className='text-sm text-gray-500 dark:text-slate-400 pb-6'>
                {project.impact}
              </p>
              <Link href='/#contact'>
                <button className='px-6 py-3'>{t('projects.cta')}</button>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
