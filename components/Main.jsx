import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDown, FiArrowDownRight, FiArrowUpRight, FiGithub, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import Portrait from '../public/assets/sb-professional-v1.png';
import { useLanguage } from '../context/LanguageContext';
import { portfolioCopy } from '../context/portfolioCopy';

export default function Main() {
  const { language } = useLanguage();
  const copy = portfolioCopy[language];
  return (
    <section id='home' className={`hero site-container ${language === 'de' ? 'hero-de' : ''}`}>
      <div className='hero-grid'>
        <div className='hero-copy'>
          <div className='availability'><span className='status-dot' />{copy.available}</div>
          <p className='hero-greeting'>{copy.greeting}<span className='greeting-line' /></p>
          <h1>{copy.headline[0]}<br />{copy.headline[1]}<br /><span className='highlight-word'>{copy.headline[2]}<svg viewBox='0 0 430 16' preserveAspectRatio='none' aria-hidden='true'><path d='M4 11 Q195 -3 426 8' /></svg></span></h1>
          <p className='hero-description'>{copy.intro}</p>
          <div className='hero-buttons'>
            <Link href='/#projects' className='button button-dark'>{copy.viewWork}<FiArrowUpRight /></Link>
            <Link href='/resume' className='button button-outline'>{copy.resume}<FiArrowUpRight /></Link>
          </div>
          <div className='hero-socials'>
            <a href='https://github.com/Subhashchandra3295' target='_blank' rel='noreferrer' aria-label='GitHub'><FiGithub /></a>
            <a href='https://www.linkedin.com/in/subhashchandra-borad/' target='_blank' rel='noreferrer' aria-label='LinkedIn'><FaLinkedinIn /></a>
            <span className='social-divider' />
            <span><FiMapPin />{copy.based}</span>
          </div>
        </div>
        <div className='hero-visual'>
          <div className='portrait-frame'>
            <div className='portrait-topline'><span>FULL STACK DEVELOPER</span><span>01 — SB</span></div>
            <div className='portrait-image'><Image src={Portrait} alt={language === 'de' ? 'Professionelles Porträt von Subhashchandra Borad' : 'Professional portrait of Subhashchandra Borad'} fill priority sizes='(max-width: 767px) 90vw, 40vw' /></div>
            <div className='portrait-caption'><span>Subhashchandra<br /><strong>Borad.</strong></span><FiArrowDownRight /></div>
                  <span className='portrait-coordinate'>CHEMNITZ, DE</span>
          </div>
          <div className='experience-badge'><span>8<span>+</span></span><span>{copy.experience}</span></div>
          <svg className='hero-spark' viewBox='0 0 100 100' aria-hidden='true'><path d='M50 0 58 32 85 15 68 42 100 50 68 58 85 85 58 68 50 100 42 68 15 85 32 58 0 50 32 42 15 15 42 32Z' /></svg>
          <p className='portrait-note'><span>↳</span>{copy.portraitNote}</p>
        </div>
      </div>
      <div className='hero-bottom'><span>IDEAS INTO INTERFACES. LOGIC INTO LIFE.</span><Link href='/#projects'>{copy.scroll}<FiArrowDown /></Link></div>
      <div className='experience-strip'>
        <p>{copy.experienceWith}</p>
        <div className='company-names'><span className='company-bosch'>BOSCH <span>Rexroth</span></span><span className='company-leibniz'>Leibniz<span>IOER</span></span><span className='company-liwetec'>LIWETEC<span>GmbH</span></span><span className='company-yanolja'>yanolja<span>Cloud Solution</span></span></div>
      </div>
    </section>
  );
}
