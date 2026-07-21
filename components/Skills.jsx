import Image from 'next/image';
import React from 'react';
import Php from '../public/assets/skills/php.png';
import Laravel from '../public/assets/skills/laravel.png';
import Codeigniter from '../public/assets/skills/codeigniter.png';
import Mysql from '../public/assets/skills/mysql.png';
import Mongodb from '../public/assets/skills/mongodb.png';
import Angular from '../public/assets/skills/angular.png';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import Typescript from '../public/assets/skills/typescript.png';
import Restapi from '../public/assets/skills/restapi.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import NodeJS from '../public/assets/skills/node.png'
import AWS from '../public/assets/skills/aws.png';
import {motion} from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
const Skills = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: 'Backend',
      items: [
        { name: 'PHP', icon: '/assets/skills/php.png' },
        { name: 'Laravel', icon: '/assets/skills/laravel.png' },
        { name: 'Symfony' },
        { name: 'CodeIgniter', icon: '/assets/skills/codeigniter.png' },
        { name: 'Node.js', icon: '/assets/skills/node.png' },
        { name: 'Python' },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', icon: '/assets/skills/angular.png' },
        { name: 'React', icon: '/assets/skills/react.png' },
        { name: 'Vue.js' },
        { name: 'Next.js', icon: '/assets/skills/nextjs.png' },
        { name: 'TypeScript', icon: '/assets/skills/typescript.png' },
        { name: 'JavaScript', icon: '/assets/skills/javascript.png' },
        { name: 'Tailwind CSS', icon: '/assets/skills/tailwind.png' },
        { name: 'Material UI' },
        { name: 'Bootstrap' },
        { name: 'HTML5', icon: '/assets/skills/html.png' },
      ],
    },
    {
      title: 'APIs & Architecture',
      items: [
        { name: 'REST', icon: '/assets/skills/restapi.png' },
        { name: 'SOAP' },
        { name: 'GraphQL' },
        { name: 'OpenAPI/Swagger' },
        { name: 'Microservices' },
        { name: 'MVC' },
        { name: 'Repository Pattern' },
        { name: 'Service Layer' },
        { name: 'SOLID Principles' },
        { name: 'Dependency Injection' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'MySQL', icon: '/assets/skills/mysql.png' },
        { name: 'PostgreSQL' },
        { name: 'MariaDB' },
        { name: 'MongoDB', icon: '/assets/skills/mongodb.png' },
        { name: 'Redis' },
      ],
    },
    {
      title: 'E-Commerce & CMS',
      items: [
        { name: 'Shopware 6', icon: '/assets/skills/sb.png' },
        { name: 'Magento' },
        { name: 'WordPress' },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      items: [
        { name: 'Docker' },
        { name: 'Docker Compose' },
        { name: 'GitLab CI/CD' },
        { name: 'GitHub Actions', icon: '/assets/skills/github1.png' },
        { name: 'Azure' },
        { name: 'AWS', icon: '/assets/skills/aws.png' },
        { name: 'CI/CD' },
        { name: 'IaC' },
        { name: 'Jira' },
      ],
    },
    {
      title: 'Security',
      items: [
        { name: 'Keycloak' },
        { name: 'JWT' },
        { name: 'OAuth2' },
        { name: 'GDPR' },
      ],
    },
    {
      title: 'Testing',
      items: [
        { name: 'PHPUnit' },
        { name: 'Integration Testing' },
        { name: 'Unit Testing' },
        { name: 'TDD' },
      ],
    },
    {
      title: 'Leadership',
      items: [
        { name: 'Agile/Scrum' },
        { name: 'Technical Mentoring' },
        { name: 'Release Management' },
        { name: 'Code Architecture' },
      ],
    },
  ];

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
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
      className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          {t('skills.title')}
        </p>
        <h2 className='py-4'>{t('skills.subtitle')}</h2>
        <div className='space-y-8'>
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className='text-lg font-semibold mb-4'>{cat.title}</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {cat.items.map((item) => (
                  <div key={item.name} className='p-4 shadow-xl rounded-lg hover:scale-105 ease-in duration-200 flex items-center gap-4'>
                    {item.icon ? (
                      <div className='w-12 h-12 flex-shrink-0'>
                        <Image src={item.icon} width={48} height={48} alt={item.name} />
                      </div>
                    ) : (
                      <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded text-xs'>{item.name.split(' ')[0]}</div>
                    )}
                    <div className='text-sm'>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
  {/* <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"/> */}
      </motion.div>
    </div>
  );
};

export default Skills;
