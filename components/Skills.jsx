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
import Sb from '../public/assets/skills/sb.png';
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

  const iconsMap = {
    'PHP': Php,
    'Laravel': Laravel,
    'CodeIgniter': Codeigniter,
    'MySQL': Mysql,
    'MongoDB': Mongodb,
    'Angular': Angular,
    'HTML5': Html,
    'Tailwind CSS': Tailwind,
    'React': ReactImg,
    'TypeScript': Typescript,
    'JavaScript': Javascript,
    'REST': Restapi,
    'Next.js': NextJS,
    'Node.js': NodeJS,
    'AWS': AWS,
    'GitHub Actions': Github,
    'Shopware 6': '/assets/skills/sb.png',
    'Symfony': '/assets/skills/symfony.svg',
    'Python': '/assets/skills/python.svg',
    'PostgreSQL': '/assets/skills/postgresql.svg',
    'MariaDB': '/assets/skills/mariadb.svg',
    'Redis': '/assets/skills/redis.svg',
    'Material UI': '/assets/skills/material-ui.svg',
    'Bootstrap': '/assets/skills/bootstrap.svg',
    'Magento': '/assets/skills/magento.svg',
    'WordPress': '/assets/skills/wordpress.svg',
    'GraphQL': '/assets/skills/graphql.svg',
    'Vue.js': '/assets/skills/vue.svg',
    'OpenAPI/Swagger': '/assets/skills/swagger.svg',
    'GitLab CI/CD': '/assets/skills/gitlab.svg',
    'Docker': '/assets/skills/docker.svg',
    'Docker Compose': '/assets/skills/docker.svg',
    'Azure': '/assets/skills/azure.svg',
    'CI/CD': '/assets/skills/gitlab.svg',
  };

  return (
    <div id='skills' className='w-full p-2'>
      <motion.div 
       initial={{ opacity: 0 }}
       whileInView = {{ x: 0, opacity: 1, scale: 1 }}
       transition ={{ duration : 1.5 }}
      className='max-w-[1240px] mx-auto flex flex-col justify-center'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          {t('skills.title')}
        </p>
        <h2 className='py-4'>{t('skills.subtitle')}</h2>
        <div className='space-y-8'>
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className='text-lg font-semibold mb-4'>{cat.title}</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {cat.items.map((item) => {
                  const icon = iconsMap[item.name] || item.icon;
                  return (
                    <div key={item.name} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      {icon ? (
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                          <div className='m-auto'>
                            <Image src={icon} width={48} height={48} alt={item.name} />
                          </div>
                          <div className='flex flex-col items-center justify-center'>
                            <h3>{item.name}</h3>
                          </div>
                        </div>
                      ) : (
                        <div className='flex items-center justify-center h-20'>
                          <h3>{item.name}</h3>
                        </div>
                      )}
                    </div>
                  );
                })}
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
