import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowDown, FiArrowUp, FiArrowUpRight, FiCode } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { portfolioCopy } from '../context/portfolioCopy';

const categoryIds = ['all', 'ai', 'fullstack', 'backend', 'frontend', 'dotnet'];
const projectCategories = {
  'enterprise-workflow-platform': ['dotnet', 'fullstack', 'backend', 'frontend'],
  'knowledgeops-ai': ['ai', 'backend'],
  'saas-pm-platform': ['fullstack', 'backend'],
  'ecommerce-platform': ['fullstack', 'backend', 'frontend'],
  'budget-buddy': ['frontend'],
  'recipe-box': ['frontend'],
  linkstash: ['fullstack', 'backend', 'frontend'],
  taskboard: ['fullstack', 'backend'],
  shopcart: ['fullstack', 'backend'],
  'enterprise-service-hub': ['backend'],
  'research-portal-api-suite': ['backend'],
  'operations-dashboard': ['fullstack', 'frontend'],
  'client-portal-experience': ['fullstack', 'frontend'],
};
const primaryCategory = {
  'enterprise-workflow-platform': 'dotnet',
  'knowledgeops-ai': 'ai',
  'saas-pm-platform': 'fullstack',
  'ecommerce-platform': 'fullstack',
  'budget-buddy': 'frontend',
  'recipe-box': 'frontend',
  linkstash: 'fullstack',
  taskboard: 'backend',
  shopcart: 'fullstack',
  'enterprise-service-hub': 'backend',
  'research-portal-api-suite': 'backend',
  'operations-dashboard': 'frontend',
  'client-portal-experience': 'frontend',
};
const shortDescriptions = {
  en: {
    'enterprise-workflow-platform': 'A secure operations platform for task ownership, workflow state, and delivery risk.',
    'knowledgeops-ai': 'A cited knowledge assistant that can safely turn answers into approved actions.',
    'saas-pm-platform': 'A multi-tenant workspace that brings teams, projects, and tasks together.',
    'ecommerce-platform': 'A complete shopping experience, from product discovery to secure checkout.',
    'budget-buddy': 'A clearer picture of your spending, one thoughtful chart at a time.',
    'recipe-box': 'Your favorite recipes, organized and always within reach.',
  },
  de: {
    'enterprise-workflow-platform': 'Eine sichere Operations-Plattform für Zuständigkeiten, Workflow-Status und Lieferrisiken.',
    'knowledgeops-ai': 'Ein Wissensassistent mit Quellen, der Antworten sicher in freigegebene Aktionen umsetzt.',
    'saas-pm-platform': 'Ein mandantenfähiger Arbeitsbereich für Teams, Projekte und Aufgaben.',
    'ecommerce-platform': 'Ein vollständiges Einkaufserlebnis, vom Produkt bis zum sicheren Checkout.',
    'budget-buddy': 'Deine Ausgaben auf einen Blick mit übersichtlichen Diagrammen.',
    'recipe-box': 'Deine Lieblingsrezepte, organisiert und immer griffbereit.',
  },
};

export default function Projects() {
  const { t, language } = useLanguage();
  const copy = portfolioCopy[language];
  const [filter, setFilter] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const items = t('projects.items');
  const filtered = items.filter((project) => filter === 0 || projectCategories[project.slug]?.includes(categoryIds[filter]));
  const visible = expanded ? filtered : filtered.slice(0, 4);
  const categoryLabel = (slug) => copy.filters[categoryIds.indexOf(primaryCategory[slug] || 'fullstack')];

  return (
    <section id='projects' className='work-section section-space'>
      <div className='site-container'>
        <div className='section-heading'>
          <div><p className='eyebrow'>{copy.workEyebrow}</p><h2>{copy.workTitle}</h2></div>
          <p className='section-intro'>{copy.workIntro}</p>
        </div>
        <div className='project-toolbar'>
          <div className='project-filters' role='group' aria-label={language === 'de' ? 'Projekte filtern' : 'Filter projects'}>{copy.filters.map((label, index) => <button key={label} type='button' aria-pressed={filter === index} onClick={() => { setFilter(index); setExpanded(false); }} className={`filter-button ${filter === index ? 'is-active' : ''}`}>{label}{index === 0 && <span>{items.length}</span>}</button>)}</div>
          <span className='project-count' aria-live='polite'>{String(filtered.length).padStart(2, '0')} {copy.projectCount}</span>
        </div>
        <div className='project-grid' id='project-grid'>
          {visible.map((project) => <article className='project-card' key={project.slug}>
            <Link href={`/projects/${project.slug}`} className={`project-preview preview-${items.indexOf(project) % 4}`} aria-label={`${t('projects.viewProject')}: ${project.title}`}>
              <span className='preview-type'>{categoryLabel(project.slug).toUpperCase()}</span>
              {project.screenshot ? <div className='project-browser'><div className='browser-chrome'><span /><span /><span /><div>{project.title}</div></div><div className='project-image'><Image src={project.screenshot} alt={`${project.title} — ${language === 'de' ? 'Projektvorschau' : 'application preview'}`} fill sizes='(max-width: 767px) 90vw, 45vw' /></div></div> : <div className='concept-preview'><span>{project.title}</span><code>&lt;{project.tech.split(' | ')[0]} /&gt;</code></div>}
              <span className='project-open'><FiArrowUpRight /></span>
            </Link>
            <div className='project-info'><div className='project-title-row'><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><span>{categoryLabel(project.slug)}</span></div>
              <p>{shortDescriptions[language][project.slug] || project.summary}</p>
              <div className='project-meta'><div className='tech-tags'>{project.tech.split(' | ').slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div>{project.demo ? <a href={project.demo} target='_blank' rel='noreferrer' className='project-live'>{t('projects.viewLiveDemo')}<FiArrowUpRight /></a> : project.github ? <a href={project.github} target='_blank' rel='noreferrer' className='project-live' aria-label={`${project.title} — GitHub`}><FiCode /> Code</a> : null}</div>
            </div>
          </article>)}
        </div>
        {filtered.length > 4 && <div className='more-projects'><button type='button' className='button button-outline' aria-expanded={expanded} aria-controls='project-grid' onClick={() => setExpanded(!expanded)}>{expanded ? copy.lessProjects : copy.allProjects}{expanded ? <FiArrowUp /> : <FiArrowDown />}</button></div>}
      </div>
    </section>
  );
}
