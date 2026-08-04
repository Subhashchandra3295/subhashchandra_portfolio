import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import Logo from './Logo';
import {motion} from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [theme, setTheme] = useState('light');
  const { toggleLanguage, t } = useLanguage();

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    } else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        (shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 '
          : 'fixed w-full h-20 z-[100] ') + 'bg-bg-base-light dark:bg-bg-surface transition-colors duration-300'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <motion.div
          initial={{
            x : -500,
            opacity : 0,
            scale : 0.5
          }}
          animate={{
            x : 0,
            opacity : 1,
            scale : 1,
          }}
          transition={{
            duration : 1.5,
          }} >
            <Logo size={40} className='cursor-pointer' />
          </motion.div>
        </Link>
        <motion.div  initial={{
          x:500,
          opacity: 0,
          scale : 0.5,
        }}
        animate = {{
            x : 0,
            opacity : 1,
            scale : 1,
        }}
        transition ={{ duration : 1.5 }}>
          <div className='hidden md:flex items-center'>
          <ul className='hidden md:flex text-text-primary-light dark:text-text-primary'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>{t('navbar.home')}</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>{t('navbar.about')}</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>{t('navbar.skills')}</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>{t('navbar.projects')}</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>{t('navbar.resume')}</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>{t('navbar.contact')}</Link>
            </li>
          </ul>
          <div className='ml-6 flex items-center gap-2'>
            <button
              type='button'
              aria-label='Toggle color theme'
              onClick={toggleTheme}
              className='px-3 py-2 text-xs rounded-lg shadow-md normal-case'
            >
              <span className='flex items-center gap-2'>
                {theme === 'dark' ? <BsSunFill size={14} /> : <BsMoonStarsFill size={14} />}
                {theme === 'dark' ? t('navbar.light') : t('navbar.dark')}
              </span>
            </button>
            <button
              type='button'
              aria-label='Toggle language'
              onClick={toggleLanguage}
              className='px-3 py-2 text-xs rounded-lg shadow-md normal-case'
            >
              {t('navbar.langToggle')}
            </button>
          </div>
          </div>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className='md:hidden text-text-primary-light dark:text-text-primary'
          >
            <AiOutlineMenu size={25} />
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            (nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500') +
            ' bg-bg-base-light dark:bg-bg-surface text-text-primary-light dark:text-text-primary transition-colors duration-300'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Logo size={32} />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg p-3 cursor-pointer shadow-gray-400 dark:shadow-black/40'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b my-4 border-border-subtle-light dark:border-border-subtle'>
              <p className='w-[85%] md:w-[90%] py-4'>
                {t('navbar.tagline')}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <button
                type='button'
                onClick={toggleTheme}
                className='px-3 py-2 text-xs rounded-lg shadow-md normal-case'
              >
                <span className='flex items-center gap-2'>
                  {theme === 'dark' ? <BsSunFill size={14} /> : <BsMoonStarsFill size={14} />}
                  {theme === 'dark' ? t('navbar.light') : t('navbar.dark')}
                </span>
              </button>
              <button
                type='button'
                onClick={toggleLanguage}
                className='px-3 py-2 text-xs rounded-lg shadow-md normal-case'
              >
                {t('navbar.langToggle')}
              </button>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  {t('navbar.home')}
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  {t('navbar.about')}
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  {t('navbar.skills')}
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  {t('navbar.projects')}
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  {t('navbar.resume')}
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  {t('navbar.contact')}
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-accent'>
                {t('navbar.connect')}
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/subhashchandra-borad/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className={'rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 hover:shadow-glow-sm ease-in duration-300 shadow-gray-400 dark:shadow-black/40'}>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Subhashchandra3295'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className={'rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 hover:shadow-glow-sm ease-in duration-300 shadow-gray-400 dark:shadow-black/40'}>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className={'rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 hover:shadow-glow-sm ease-in duration-300 shadow-gray-400 dark:shadow-black/40'}
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className={'rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 hover:shadow-glow-sm ease-in duration-300 shadow-gray-400 dark:shadow-black/40'}
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
