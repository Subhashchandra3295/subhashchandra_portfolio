import Link from 'next/link';
import { FiArrowUpRight, FiCompass, FiCode, FiUsers } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { portfolioCopy } from '../context/portfolioCopy';

const icons = [FiCompass, FiCode, FiUsers];

export default function About() {
  const { language } = useLanguage();
  const copy = portfolioCopy[language];
  return <section id='about' className='site-container about-section section-space'>
    <div className='about-copy'><p className='eyebrow'>{copy.aboutEyebrow}</p><h2>{copy.aboutTitle}</h2><p className='about-lead'>{copy.aboutIntro}</p><p>{copy.aboutBody}</p><p>{copy.aboutClosing}</p><Link href='/resume' className='text-link'>{copy.aboutLink}<FiArrowUpRight /></Link></div>
    <div className='approach-card'><div className='approach-heading'><span>{copy.approach}</span><span className='approach-asterisk'>✳</span></div>{copy.principles.map((title, i) => { const Icon = icons[i]; return <div className='principle' key={title}><span className='principle-icon'><Icon /></span><div><h3>{title}</h3><p>{copy.principlesBody[i]}</p></div><span className='principle-number'>0{i + 1}</span></div>; })}<div className='approach-footer'><span className='status-dot' />{language === 'de' ? 'Neugier gehört zum Prozess.' : 'Curiosity is part of the process.'}<span>↗</span></div></div>
  </section>;
}
