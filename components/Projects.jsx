import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const projectItems = t('projects.items') || [];
  const demoItems = projectItems.filter((project) => project.screenshot);
  const caseStudyItems = projectItems.filter((project) => !project.screenshot);

  const renderCard = (project) => (
    <div
      key={project.title}
      className='rounded-2xl overflow-hidden shadow-xl shadow-gray-400 dark:shadow-black/40 bg-bg-surface-light dark:bg-bg-surface border border-gray-100 dark:border-border-subtle hover:scale-[1.02] hover:shadow-glow transition-all duration-300'
    >
      {project.screenshot && (
        <div className='relative w-full aspect-[8/5]'>
          <Image
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            fill
            sizes='(min-width: 768px) 50vw, 100vw'
            className='object-cover'
          />
        </div>
      )}
      <div className='p-6'>
        <div className='flex items-start justify-between gap-4'>
          <div className='flex items-center gap-3'>
            {project.icon && (
              <Image src={project.icon} width={28} height={28} alt='' className='shrink-0' />
            )}
            <div>
              <p className='text-sm uppercase tracking-widest text-accent'>
                  {project.github ? t('projects.demoProject') : t('projects.caseStudy')}
              </p>
              <h3 className='text-2xl py-2 text-text-primary-light dark:text-text-primary'>{project.title}</h3>
            </div>
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
        <div className='flex flex-wrap gap-3'>
          <Link href={`/projects/${project.slug}`}>
            <button className='px-6 py-3'>
              {project.github ? t('projects.viewProject') : t('projects.viewCaseStudy')}
            </button>
          </Link>
          {project.demo && (
            <a href={project.demo} target='_blank' rel='noreferrer'>
              <button className='px-6 py-3'>{t('projects.viewLiveDemo')}</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );

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
        <p className='text-xl tracking-widest uppercase text-accent'>
          {t('projects.title')}
        </p>
        <h2 className='py-4 text-text-primary-light dark:text-text-primary'>{t('projects.subtitle')}</h2>
        <p className='max-w-3xl text-gray-600 dark:text-slate-300 pb-8'>
          {t('projects.intro')}
        </p>
        {demoItems.length > 0 && (
          <div className='mb-12'>
            <h3 className='text-sm uppercase tracking-widest text-accent mb-4'>
              {t('projects.demoProjectsHeading')}
            </h3>
            <div className='grid md:grid-cols-2 gap-8'>
              {demoItems.map(renderCard)}
            </div>
          </div>
        )}

        {caseStudyItems.length > 0 && (
          <div>
            <h3 className='text-sm uppercase tracking-widest text-accent mb-4'>
              {t('projects.caseStudiesHeading')}
            </h3>
            <div className='grid md:grid-cols-2 gap-8'>
              {caseStudyItems.map(renderCard)}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
