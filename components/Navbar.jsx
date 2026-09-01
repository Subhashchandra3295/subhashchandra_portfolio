import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiGlobe, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { portfolioCopy } from '../context/portfolioCopy';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const menuButton = useRef(null);
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const copy = portfolioCopy[language];

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved === 'dark' || saved === 'light' ? saved : 'light';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    router.events.on('hashChangeStart', close);
    return () => {
      router.events.off('routeChangeStart', close);
      router.events.off('hashChangeStart', close);
    };
  }, [router.events]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };
  const links = [
    { href: '/#projects', label: copy.work },
    { href: '/#about', label: t('navbar.about') },
    { href: '/#skills', label: t('navbar.skills') },
    { href: '/resume', label: t('navbar.resume') },
  ];

  return (
    <header className='site-header'>
      <div className='site-container nav-inner'>
        <Link href='/' className='brand' aria-label='Subhashchandra Borad — Home'>
          <Logo size={52} className='brand-mark' decorative />
          <span className='brand-name'>Subhashchandra<span>Full Stack Developer</span></span>
        </Link>
        <nav className='desktop-nav' aria-label={language === 'de' ? 'Hauptnavigation' : 'Main navigation'}>
          {links.map(({ href, label }) => <Link key={href} href={href} className={router.pathname === '/resume' && href === '/resume' ? 'nav-active' : ''}>{label}</Link>)}
        </nav>
        <div className='nav-actions'>
          <div className='language-control' role='group' aria-label='Language / Sprache'>
            <span className='language-caption' aria-hidden='true'>
              <FiGlobe />{language === 'de' ? 'Sprache' : 'Language'}
            </span>
            <div className='language-switch' data-language={language}>
              <span className='language-indicator' aria-hidden='true' />
              <button
                type='button'
                className='language-option'
                lang='en'
                aria-label='English (EN)'
                aria-pressed={language === 'en'}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
              <button
                type='button'
                className='language-option'
                lang='de'
                aria-label='Deutsch (DE)'
                aria-pressed={language === 'de'}
                onClick={() => setLanguage('de')}
              >
                DE
              </button>
            </div>
          </div>
          <span className='nav-divider' />
          <button type='button' className='icon-button theme-button' onClick={toggleTheme} aria-label={copy.theme} aria-pressed={theme === 'dark'}>{theme === 'dark' ? <FiSun /> : <FiMoon />}</button>
          <Link href='/#contact' className='button button-lime nav-contact'>{copy.talk}<FiArrowUpRight /></Link>
          <button type='button' ref={menuButton} className='icon-button menu-button' aria-expanded={open} aria-controls='mobile-navigation' aria-label={open ? copy.closeMenu : copy.menu} onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
        </div>
      </div>
      {open && <nav id='mobile-navigation' className='mobile-nav' aria-label={language === 'de' ? 'Mobile Navigation' : 'Mobile navigation'}>
        {links.map(({ href, label }) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<FiArrowUpRight /></Link>)}
        <Link href='/#contact' onClick={() => setOpen(false)}>{copy.talk}<FiArrowUpRight /></Link>
      </nav>}
    </header>
  );
}
