import { useState } from 'react';
import Link from 'next/link';
import { FiArrowUp, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { portfolioCopy } from '../context/portfolioCopy';
import Logo from './Logo';

export default function Contact() {
  const { language, t } = useLanguage();
  const copy = portfolioCopy[language];
  const [status, setStatus] = useState('idle');
  const submit = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    setStatus('sending');
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Message could not be sent');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };
  return <>
    <section id='contact' className='contact-section section-space'><div className='site-container contact-grid'>
      <div className='contact-copy'><p className='eyebrow'>{copy.contactEyebrow}</p><h2>{copy.contactTitle[0]}<br /><span>{copy.contactTitle[1]}</span><FiArrowUpRight /></h2><p className='contact-intro'>{copy.contactIntro}</p><div className='contact-availability'><span className='status-dot' />{copy.contactNote}</div><div className='contact-socials'><a href='https://www.linkedin.com/in/subhashchandra-borad/' target='_blank' rel='noreferrer'><FaLinkedinIn />LinkedIn<FiArrowUpRight /></a><a href='https://github.com/Subhashchandra3295' target='_blank' rel='noreferrer'><FiGithub />GitHub<FiArrowUpRight /></a></div></div>
      <form className='contact-form' action='https://getform.io/f/c2f0712e-494b-4913-ac1b-0d0101b09f8e' method='POST' encType='multipart/form-data' onSubmit={submit}>
        <div className='form-row'><div className='form-field'><label htmlFor='contact-name'>{t('contact.name')}</label><input id='contact-name' name='name' autoComplete='name' placeholder={copy.namePlaceholder} required maxLength={120} /></div><div className='form-field'><label htmlFor='contact-email'>{t('contact.email')}</label><input id='contact-email' name='email' type='email' autoComplete='email' placeholder={copy.emailPlaceholder} required maxLength={254} /></div></div>
        <div className='form-row'><div className='form-field'><label htmlFor='contact-subject'>{t('contact.subject')}</label><input id='contact-subject' name='subject' placeholder={copy.subjectPlaceholder} required maxLength={200} /></div><div className='form-field'><label htmlFor='contact-phone'>{t('contact.phone')} <span>({copy.optional})</span></label><input id='contact-phone' name='phone' type='tel' autoComplete='tel' placeholder='+49 …' maxLength={40} /></div></div>
        <div className='form-field'><label htmlFor='contact-message'>{t('contact.message')}</label><textarea id='contact-message' name='message' rows={4} placeholder={copy.messagePlaceholder} required maxLength={5000} /></div>
        <button type='submit' className='button button-lime send-button' disabled={status === 'sending'}>{status === 'sending' ? copy.sending : t('contact.send')}<FiArrowUpRight /></button>
        <p className={`form-feedback ${status === 'error' ? 'form-error' : ''}`} role='status' aria-live='polite'>{status === 'sent' ? copy.sent : status === 'error' ? copy.error : copy.formNote}</p>
      </form>
    </div></section>
    <footer className='site-container site-footer'><Link href='/' className='footer-brand' aria-label='Subhashchandra Borad — Home'><Logo size={42} decorative /></Link><p>© {new Date().getFullYear()} Subhashchandra Borad<span>{copy.footer}</span></p><Link href='/#home' className='back-to-top'>{copy.top}<FiArrowUp /></Link></footer>
  </>;
}
