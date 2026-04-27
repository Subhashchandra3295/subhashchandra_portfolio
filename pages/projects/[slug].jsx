import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const CASE_STUDIES = {
  en: {
    'enterprise-service-hub': {
      title: 'Enterprise Service Hub',
      category: 'Laravel Concept / Backend Architecture',
      summary:
        'A concept service platform for teams that need approvals, auditability, and predictable automation without exposing client data.',
      challenge:
        'Many internal tools become difficult to trust once permissions, logs, and workflow states grow in complexity. This case study focuses on keeping the experience simple while the backend stays strict.',
      solution:
        'I would build this around Laravel policies, queued jobs, Redis-backed workflows, and a clean REST layer so administrators can review requests without sacrificing security.',
      highlights: [
        'Role-based access control for operations and reviewers.',
        'Audit logs for every workflow action.',
        'Fast queue processing for approvals and notifications.',
      ],
      stack: ['Laravel', 'MySQL', 'Redis', 'REST APIs'],
      outcome:
        'The result is a safe portfolio example that demonstrates service orchestration, not a copy of an employer system.',
    },
    'research-portal-api-suite': {
      title: 'Research Portal API Suite',
      category: 'Symfony Concept / API Design',
      summary:
        'A data-heavy portal concept built for structured submission flows, exports, and versioned API contracts.',
      challenge:
        'Research-style products need strong validation and long-term maintainability because schemas, permissions, and external integrations change often.',
      solution:
        'Symfony provides the structure for DTOs, validation, authentication, and OpenAPI documentation, which makes it a good fit for a robust public-facing API layer.',
      highlights: [
        'Versioned endpoints with documented contracts.',
        'Export flows for CSV and PDF reporting.',
        'Dockerized local environment for reproducible development.',
      ],
      stack: ['Symfony', 'PostgreSQL', 'Docker', 'OpenAPI'],
      outcome:
        'This page shows how I think about reliable backend systems, observability, and developer-friendly documentation.',
    },
    'operations-dashboard': {
      title: 'Operations Dashboard',
      category: 'Angular Concept / Internal Tooling',
      summary:
        'A control-room style dashboard concept for teams that need quick visibility into status, alerts, and daily tasks.',
      challenge:
        'Operational UIs tend to become noisy. The key problem is balancing dense information with a layout people can scan under pressure.',
      solution:
        'I would lean on Angular component boundaries, RxJS streams, and a filter-driven dashboard model so the interface stays responsive even when the data grows.',
      highlights: [
        'Stream-based refreshes for live operational widgets.',
        'Modular cards for metrics, alerts, and queues.',
        'Clear empty states and quick filtering.',
      ],
      stack: ['Angular', 'Node.js', 'MySQL', 'RxJS'],
      outcome:
        'It is a realistic example of enterprise UI thinking without exposing any confidential implementation details.',
    },
    'client-portal-experience': {
      title: 'Client Portal Experience',
      category: 'Next.js Concept / Frontend Experience',
      summary:
        'A polished portal concept focused on onboarding, self-service, and a calmer client journey.',
      challenge:
        'Client portals usually have to support many steps, but the interface still needs to feel friendly and trustworthy.',
      solution:
        'Next.js gives a strong base for server rendering, route-level performance, and reusable React components that can scale across multiple account experiences.',
      highlights: [
        'Fast content rendering with SSR-friendly pages.',
        'Reusable sections for onboarding and support.',
        'Mobile-first layout decisions with clear hierarchy.',
      ],
      stack: ['Next.js', 'React', 'MongoDB', 'SSR'],
      outcome:
        'This case study is intentionally portfolio-safe and shows the kind of polished front-end work I enjoy building.',
    },
  },
  de: {
    'enterprise-service-hub': {
      title: 'Enterprise Service Hub',
      category: 'Laravel Konzept / Backend-Architektur',
      summary:
        'Ein Konzept fur eine Service-Plattform fur Teams, die Freigaben, Nachvollziehbarkeit und klare Automatisierung brauchen, ohne Kundendaten zu offenbaren.',
      challenge:
        'Interne Tools werden schnell schwer verstandlich, sobald Berechtigungen, Protokolle und Workflow-Zustande komplexer werden. Diese Fallstudie konzentriert sich auf eine einfache Bedienung bei striktem Backend.',
      solution:
        'Ich wurde das mit Laravel-Policies, Queue-Jobs, Redis-basierten Workflows und einer sauberen REST-Schicht umsetzen, damit Administratoren Anfragen sicher prufen konnen.',
      highlights: [
        'Rollenbasierte Zugriffe fur Betrieb und Prufung.',
        'Audit-Logs fur jede Workflow-Aktion.',
        'Schnelle Queue-Verarbeitung fur Freigaben und Benachrichtigungen.',
      ],
      stack: ['Laravel', 'MySQL', 'Redis', 'REST-APIs'],
      outcome:
        'Diese Seite zeigt ein portfolio-sicheres Beispiel fur Service-Orchestrierung statt eines echten Projekts vom Arbeitgeber.',
    },
    'research-portal-api-suite': {
      title: 'Research Portal API Suite',
      category: 'Symfony Konzept / API-Design',
      summary:
        'Ein datenlastiges Portal-Konzept mit strukturierten Eingaben, Exporten und versionierten API-Vertragen.',
      challenge:
        'Forschungsnahe Produkte brauchen starke Validierung und gute Wartbarkeit, weil sich Schemata, Berechtigungen und Integrationen oft andern.',
      solution:
        'Symfony bietet eine gute Struktur fur DTOs, Validierung, Authentifizierung und OpenAPI-Dokumentation, also fur eine robuste API-Schicht.',
      highlights: [
        'Versionierte Endpunkte mit dokumentierten Vertragen.',
        'Export-Flusse fur CSV- und PDF-Reports.',
        'Dockerisierte lokale Umgebung fur reproduzierbare Entwicklung.',
      ],
      stack: ['Symfony', 'PostgreSQL', 'Docker', 'OpenAPI'],
      outcome:
        'Die Seite zeigt, wie ich uber stabile Backend-Systeme, Beobachtbarkeit und gute Entwicklerdokumentation denke.',
    },
    'operations-dashboard': {
      title: 'Operations Dashboard',
      category: 'Angular Konzept / Interne Tools',
      summary:
        'Ein Dashboard-Konzept im Leitstand-Stil fur Teams, die Status, Alarme und Tagesaufgaben schnell sehen mussen.',
      challenge:
        'Operations-Interfaces werden schnell unruhig. Das Hauptproblem ist, viele Informationen lesbar zu halten, auch wenn Zeitdruck herrscht.',
      solution:
        'Ich wurde Angular-Komponenten, RxJS-Streams und ein filterbasiertes Dashboard verwenden, damit die Oberflache auch bei groeren Datenmengen reaktiv bleibt.',
      highlights: [
        'Stream-basierte Aktualisierung fur Live-Widgets.',
        'Modulare Karten fur Metriken, Alarme und Warteschlangen.',
        'Klare Empty States und schnelles Filtern.',
      ],
      stack: ['Angular', 'Node.js', 'MySQL', 'RxJS'],
      outcome:
        'Das ist ein realistisches Beispiel fur Enterprise-UI-Denken ohne vertrauliche Details preiszugeben.',
    },
    'client-portal-experience': {
      title: 'Client Portal Experience',
      category: 'Next.js Konzept / Frontend-Erlebnis',
      summary:
        'Ein hochwertiges Portal-Konzept mit Fokus auf Onboarding, Self-Service und einer ruhigeren Kundenreise.',
      challenge:
        'Kundenportale mussen viele Schritte unterstutzen und trotzdem freundlich und vertrauenswurdig wirken.',
      solution:
        'Next.js ist eine gute Basis fur Server Rendering, Performance auf Routenebene und wiederverwendbare React-Komponenten.',
      highlights: [
        'Schnelles Rendering mit SSR-freundlichen Seiten.',
        'Wiederverwendbare Bereiche fur Onboarding und Support.',
        'Mobile-first Layout mit klarer Hierarchie.',
      ],
      stack: ['Next.js', 'React', 'MongoDB', 'SSR'],
      outcome:
        'Diese Fallstudie ist bewusst portfolio-sicher und zeigt die Art von Frontend-Arbeit, die ich gern baue.',
    },
  },
};

const ProjectDetailPage = () => {
  const router = useRouter();
  const { language, t } = useLanguage();
  const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug;

  const project = CASE_STUDIES[language]?.[slug] || CASE_STUDIES.en[slug];

  if (router.isReady && !project) {
    return (
      <div className='min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white'>
        <div className='mx-auto flex min-h-screen max-w-[960px] items-center px-4'>
          <div className='rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900'>
            <p className='text-sm uppercase tracking-[0.3em] text-[#5651e5]'>404</p>
            <h1 className='py-4 text-3xl font-bold'>Project not found</h1>
            <p className='text-gray-600 dark:text-slate-300'>The requested case study does not exist.</p>
            <div className='mt-6 flex gap-4'>
              <Link href='/#projects'>
                <button className='px-6 py-3'>{t('navbar.projects')}</button>
              </Link>
              <Link href='/'>
                <button className='px-6 py-3'>{t('navbar.home')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{project.title} | Portfolio</title>
        <meta
          name='description'
          content={project.summary}
        />
      </Head>
      <div className='min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-white'>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mx-auto max-w-[1100px] px-4 pb-16 pt-28 sm:pt-32 lg:pt-36'
        >
          <div className='mb-8 flex items-center justify-between gap-4'>
            <Link href='/#projects'>
              <button className='px-5 py-3'>← {t('navbar.projects')}</button>
            </Link>
            <Link href='/#contact'>
              <button className='px-5 py-3'>{t('projects.cta')}</button>
            </Link>
          </div>

          <section className='overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900'>
            <div className='grid gap-0 lg:grid-cols-[1.2fr_0.8fr]'>
              <div className='p-8 md:p-12'>
                <p className='text-sm uppercase tracking-[0.35em] text-[#5651e5]'>
                  {project.category}
                </p>
                <h1 className='py-4 text-4xl font-bold md:text-5xl'>{project.title}</h1>
                <p className='max-w-3xl text-lg leading-8 text-gray-600 dark:text-slate-300'>
                  {project.summary}
                </p>
              </div>
              <div className='bg-slate-950 p-8 text-white md:p-12'>
                <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Stack</p>
                <div className='mt-4 flex flex-wrap gap-3'>
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className='rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm'
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className='mt-8 text-sm uppercase tracking-[0.3em] text-slate-400'>Outcome</p>
                <p className='mt-4 leading-7 text-slate-200'>{project.outcome}</p>
              </div>
            </div>
          </section>

          <section className='mt-8 grid gap-6 lg:grid-cols-3'>
            <div className='rounded-3xl border border-gray-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:col-span-2'>
              <p className='text-sm uppercase tracking-[0.3em] text-[#5651e5]'>Challenge</p>
              <p className='mt-4 text-lg leading-8 text-gray-700 dark:text-slate-300'>{project.challenge}</p>
              <p className='mt-8 text-sm uppercase tracking-[0.3em] text-[#5651e5]'>Solution</p>
              <p className='mt-4 text-lg leading-8 text-gray-700 dark:text-slate-300'>{project.solution}</p>
            </div>
            <div className='rounded-3xl border border-gray-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900'>
              <p className='text-sm uppercase tracking-[0.3em] text-[#5651e5]'>Highlights</p>
              <ul className='mt-5 space-y-4 text-gray-700 dark:text-slate-300'>
                {project.highlights.map((item) => (
                  <li key={item} className='flex gap-3 leading-7'>
                    <span className='mt-2 h-2.5 w-2.5 rounded-full bg-[#5651e5]' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </motion.main>
      </div>
    </>
  );
};

export default ProjectDetailPage;
