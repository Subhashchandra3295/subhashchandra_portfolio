import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/SB.png'
import {motion} from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

const THEME_COLORS = {
  light: {
    navBg: '#ecf0f3',
    linkColor: '#1f2937',
    drawerBg: '#ecf0f3',
    border: '#d1d5db',
    accent: '#5651e5',
    shadowColor: 'shadow-gray-400',
  },
  dark: {
    navBg: '#0f172a',
    linkColor: '#e2e8f0',
    drawerBg: '#111827',
    border: '#374151',
    accent: '#60a5fa',
    shadowColor: 'shadow-black/40',
  },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [theme, setTheme] = useState('light');
  const { toggleLanguage, t } = useLanguage();
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

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

  const colors = THEME_COLORS[theme];

  return (
    <div
      style={{ backgroundColor: `${colors.navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
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
            <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
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
          <ul style={{ color: `${colors.linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>{t('navbar.home')}</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>{t('navbar.about')}</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>{t('navbar.skills')}</Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li> */}
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
            style={{ color: `${colors.linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
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
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
          style={{ backgroundColor: colors.drawerBg, color: colors.linkColor }}
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                {/* <a> */}
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
                {/* </a> */}
              </Link>
              <div
                onClick={handleNav}
                className={`rounded-full shadow-lg p-3 cursor-pointer ${colors.shadowColor}`}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b my-4' style={{ borderColor: colors.border }}>
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
              {/* <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link> */}
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
              <p className='uppercase tracking-widest' style={{ color: colors.accent }}>
                {t('navbar.connect')}
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/subhashchandra-borad/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${colors.shadowColor}`}>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Subhashchandra3295'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${colors.shadowColor}`}>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${colors.shadowColor}`}
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${colors.shadowColor}`}
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
