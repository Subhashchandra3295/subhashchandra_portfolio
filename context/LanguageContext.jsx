import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'language';

const translations = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      resume: 'Resume',
      contact: 'Contact',
      tagline: "Let's build something legendary together",
      connect: "Let's Connect",
      langToggle: 'DE',
      light: 'Light',
      dark: 'Dark',
    },
    home: {
      metaDescription:
        'I am a full stack web developer specializing in building exceptional digital experiences with strong backend integration.',
    },
    main: {
      build: "LET'S BUILD SOMETHING TOGETHER",
      hi: "Hi, I'm",
      role: 'A Full Stack Developer',
      summary:
        'I am focused on building responsive front-end web applications integrating back-end technologies.',
    },
    about: {
      title: 'About',
      subtitle: 'Who I Am',
      p1: 'I am a Full Stack Developer with a creative mindset, strong initiative, and effective time management skills. I am a team builder and motivator with a proven track record of delivery.',
      p2: 'I combine strategic and tactical thinking to solve problems with technology. I am highly adaptable and thrive in roles where I can keep learning and improving.',
      p3: 'I build because I love it. I enjoy the tech community and creating useful web experiences. Hopefully our paths cross in person and we build something meaningful together.',
    },
    skills: {
      title: 'Skills',
      subtitle: 'What I Can Do',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected Case Studies',
      intro:
        'Portfolio-safe concept projects that show how I approach real-world full stack problems with Laravel, Symfony, Angular, React, Next.js, and modern databases.',
      caseStudy: 'Case Study',
      cta: 'Discuss this project',
      viewCaseStudy: 'View Case Study',
      items: [
        {
          slug: 'enterprise-service-hub',
          title: 'Enterprise Service Hub',
          tech: 'Laravel | MySQL | Redis | REST APIs',
          summary:
            'Role-based internal platform for service requests, approvals, audit logs, and reporting across business teams.',
          impact: 'What it shows: workflow automation, clean architecture, authentication, and admin operations.',
        },
        {
          slug: 'research-portal-api-suite',
          title: 'Research Portal API Suite',
          tech: 'Symfony | PostgreSQL | Docker | OpenAPI',
          summary:
            'Modular API platform for data exchange, document processing, and external integrations with strict access control.',
          impact: 'What it shows: API design, modular services, security, and scalable backend thinking.',
        },
        {
          slug: 'operations-dashboard',
          title: 'Operations Dashboard',
          tech: 'Angular | Node.js | MySQL | RxJS',
          summary:
            'A fast internal dashboard for KPIs, approvals, forms, and operational status with a responsive interface.',
          impact: 'What it shows: enterprise UI, forms, state handling, and data visualization.',
        },
        {
          slug: 'client-portal-experience',
          title: 'Client Portal Experience',
          tech: 'Next.js | React | MongoDB | SSR',
          summary:
            'A multilingual public portal for marketing pages, secure account areas, and content-driven user experiences.',
          impact: 'What it shows: SSR, SEO, multilingual UI, component architecture, and product thinking.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get In Touch',
      role: 'Full Stack Developer',
      availability: 'I am available for freelance or part-time positions. Contact me and let us talk.',
      connect: 'Connect With Me',
      name: 'Name',
      phone: 'Phone Number',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
    },
    common: {
      project: 'Project',
      overview: 'Overview',
      technologies: 'Technologies',
      code: 'Code',
      demo: 'Demo',
      back: 'Back',
    },
    projectPages: {
      crypto: {
        desc: 'I built this app to demonstrate React skills and API integration. It supports authentication with Firebase and allows users to create accounts, sign in, and save coins to personal lists using Firestore. It also uses dynamic routing and data from the CoinGecko API.',
      },
      netflix: {
        desc: 'I built this React app and hosted it on GitHub Pages. It includes Firebase authentication and Firestore, pulls movie data from an IMDB API, and uses app-wide state management with the useContext hook.',
      },
      property: {
        desc: 'This application was built with React and styled with CSS. It is hosted on Netlify and recreates a mobile responsive Space Travel experience with lazy-loaded images and routing.',
      },
      twitch: {
        desc: 'This application was built with React and styled with CSS. It recreates a mobile responsive Twitch-inspired experience and demonstrates routing and modern UI composition.',
      },
    },
    resume: {
      title: 'Resume',
      heroDesktop: ['Building Scalable Web Apps', 'Technical Leadership', 'Solving Real-World Problems'],
      heroMobile: ['Building Scalable Web Apps', 'Technical Leadership', 'Solving Real-World Problems'],
      introHeadline:
        'Full Stack Developer | 8+ Years | Laravel · Symfony · Angular · React · Node.js | Germany',
      introParagraphs: [
        'I am a Full Stack Software Developer with over 8 years of experience building scalable, high-performance web applications across enterprise, research, and industrial domains.',
        'Currently working at the Leibniz Institute (IOER) in Dresden, where I develop Research Information Systems (RIS), document management platforms, and data-driven web tools using Laravel, Angular, React, and MySQL with GDPR compliance.',
        'Previously at Bosch Rexroth and LIWETEC GmbH, I built global platforms, RESTful APIs, and engineering tools serving hundreds of international users and partners.',
      ],
      tableTitle: 'What I bring to the table:',
      strengths: [
        'Strong backend skills in Laravel/Symfony (PHP), Node.js, PostgreSQL, MySQL',
        'Modern frontend with Angular, React, Vue.js, Next.js',
        'Cloud and DevOps: AWS S3, Azure, Docker, CI/CD, GitLab',
        'Security-focused: Authentication, RBAC, GDPR compliance',
        'Agile team player with experience in cross-functional, distributed teams',
      ],
      education:
        'I hold an M.Sc. in Automotive Software Engineering from TU Chemnitz and an MCA (Outstanding grade) from Pune University.',
      closing: 'Open to exciting Full Stack or Backend-focused roles in Germany. Let us connect.',
      professionalExperience: 'Professional Experience',
      experiences: [
        {
          company: 'Leibniz Institute of Ecological Urban and Regional Development (IOER)',
          location: 'Dresden (Hybrid), Germany.',
          role: 'Software Developer Research Information System (Sept-2024 - present)',
          points: [
            'Eliminated 40% manual processing by digitizing research and administrative workflows across multiple departments',
            'Accelerated page load time by 25% through query optimization and caching (Angular, React, Laravel, MySQL)',
            'Designed and maintained 10+ RESTful APIs integrating external partner systems with high reliability',
            'Built a structured document management system improving retrieval and audit traceability for large datasets',
            'Raised test coverage to 80% by enforcing clean code, OOP, and modular architecture',
            'Ensured 99% uptime on GDPR-compliant systems through monitoring and rapid issue resolution',
            'Streamlined workflows for stakeholders by replacing manual processes with custom web tools',
          ],
        },
        {
          company: 'Liwetec GmbH',
          location: 'Bobingen (Remote), Germany.',
          role: 'Full Stack Web Developer (Aug-2023 - July-2024)',
          points: [
            'Scaled enterprise platform supporting 500+ concurrent users across multiple countries',
            'Cut release cycle time by 30% by migrating monolithic architecture to microservices (6+ services)',
            'Architected 15+ REST APIs improving inter-service communication and reducing latency',
            'Decreased bug regression by 35% using OOP, dependency injection, and structured architecture patterns',
            'Increased test coverage to 75% and established code review practices across the team',
            'Reduced deployment time significantly using Docker and CI/CD pipelines',
            'Delivered GDPR-compliant solutions in Agile/Scrum environments',
          ],
        },
        {
          company: 'Bosch Rexroth AG',
          location: 'Ulm (Hybrid), Germany.',
          role: 'Full Stack Developer | (Angular + PHP - Backend) (May-2022 - June-2023)',
          points: [
            'Built 3 enterprise applications used by global engineering teams across multiple countries',
            'Reduced manual data entry by 50% through API integrations across internal systems',
            'Boosted release stability by 40% via CI/CD pipelines and Azure DevOps',
            'Secured 500+ users with authentication, RBAC, and 2FA implementation',
            'Optimized API performance by 30% through debugging and query optimization',
            'Delivered features on time in Agile development cycles',
          ],
        },
        {
          company: 'Yanolja Cloud Solution (formerly eZee)',
          location: 'Surat, India.',
          role: 'Associate Software Engineer (PHP Developer) (Sep-2016 - Mar-2021)',
          points: [
            'Integrated 20+ third-party APIs including Booking.com, Expedia, Airbnb, and Agoda',
            'Processed 10,000+ daily transactions ensuring high reliability and data consistency',
            'Strengthened database performance by 30% through query optimization and indexing',
            'Sustained 99.5% uptime during peak usage periods with proactive system monitoring',
            'Reduced feature delivery time by 25% by refactoring legacy systems using MVC architecture',
          ],
        },
      ],
      extrasTitle: 'Extra-curricular Activities and Achievements',
      extras: [
        'Recognized multiple times for high performance and dedication.',
        'Active participant in internal coding competitions and technical initiatives',
      ],
    },
  },
  de: {
    navbar: {
      home: 'Startseite',
      about: 'Uber mich',
      skills: 'Fahigkeiten',
      projects: 'Projekte',
      resume: 'Lebenslauf',
      contact: 'Kontakt',
      tagline: 'Lass uns gemeinsam etwas Legendäres bauen',
      connect: 'Vernetzen',
      langToggle: 'EN',
      light: 'Hell',
      dark: 'Dunkel',
    },
    home: {
      metaDescription:
        'Ich bin Full-Stack-Webentwickler und spezialisiere mich auf hochwertige digitale Erlebnisse mit starker Backend-Integration.',
    },
    main: {
      build: 'LASS UNS GEMEINSAM ETWAS BAUEN',
      hi: 'Hallo, ich bin',
      role: 'Ein Full Stack Entwickler',
      summary:
        'Ich konzentriere mich auf responsive Frontend-Webanwendungen mit nahtloser Backend-Integration.',
    },
    about: {
      title: 'Uber mich',
      subtitle: 'Wer ich bin',
      p1: 'Ich bin Full Stack Entwickler mit kreativem Denken, Eigeninitiative und sehr gutem Zeitmanagement. Als Teamplayer und Motivator liefere ich nachweislich starke Ergebnisse.',
      p2: 'Ich verbinde strategisches und taktisches Denken, um Probleme mit Technologie zu losen. Ich bin sehr anpassungsfahig und lerne kontinuierlich dazu.',
      p3: 'Ich entwickle, weil ich es liebe. Ich schatze die Tech-Community und baue gerne nutzliche Web-Erlebnisse. Vielleicht kreuzen sich unsere Wege und wir bauen gemeinsam etwas Sinnvolles.',
    },
    skills: {
      title: 'Fahigkeiten',
      subtitle: 'Was ich kann',
    },
    projects: {
      title: 'Projekte',
      subtitle: 'Ausgewahlte Fallstudien',
      intro:
        'Portfolio-sichere Konzeptprojekte, die zeigen, wie ich reale Full-Stack-Probleme mit Laravel, Symfony, Angular, React, Next.js und modernen Datenbanken losen wurde.',
      caseStudy: 'Fallstudie',
      cta: 'Dieses Projekt besprechen',
      viewCaseStudy: 'Fallstudie ansehen',
      items: [
        {
          slug: 'enterprise-service-hub',
          title: 'Enterprise Service Hub',
          tech: 'Laravel | MySQL | Redis | REST-APIs',
          summary:
            'Interne Plattform mit Rollenrechten, Genehmigungen, Audit-Logs und Reporting fur Fachbereiche.',
          impact: 'Was es zeigt: Workflow-Automatisierung, saubere Architektur, Authentifizierung und Admin-Prozesse.',
        },
        {
          slug: 'research-portal-api-suite',
          title: 'Research Portal API Suite',
          tech: 'Symfony | PostgreSQL | Docker | OpenAPI',
          summary:
            'Modulare API-Plattform fur Datenaustausch, Dokumentenverarbeitung und Integrationen mit strikter Zugriffskontrolle.',
          impact: 'Was es zeigt: API-Design, modulare Services, Sicherheit und skalierbares Backend-Denken.',
        },
        {
          slug: 'operations-dashboard',
          title: 'Operations Dashboard',
          tech: 'Angular | Node.js | MySQL | RxJS',
          summary:
            'Schnelles internes Dashboard fur KPIs, Genehmigungen, Formulare und Betriebszustand mit responsiver UI.',
          impact: 'Was es zeigt: Enterprise-UI, Formulare, State-Handling und Datenvisualisierung.',
        },
        {
          slug: 'client-portal-experience',
          title: 'Client Portal Experience',
          tech: 'Next.js | React | MongoDB | SSR',
          summary:
            'Mehrsprachiges Portal fur Marketing-Seiten, sichere Nutzerbereiche und inhaltsgetriebene Erlebnisse.',
          impact: 'Was es zeigt: SSR, SEO, mehrsprachige UI, Komponentenarchitektur und Produktdenken.',
        },
      ],
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Nimm Kontakt auf',
      role: 'Full Stack Entwickler',
      availability:
        'Ich bin fur Freelance- oder Teilzeitpositionen verfugbar. Schreib mir und lass uns sprechen.',
      connect: 'Verbinde dich mit mir',
      name: 'Name',
      phone: 'Telefonnummer',
      email: 'E-Mail',
      subject: 'Betreff',
      message: 'Nachricht',
      send: 'Nachricht senden',
    },
    common: {
      project: 'Projekt',
      overview: 'Uberblick',
      technologies: 'Technologien',
      code: 'Code',
      demo: 'Demo',
      back: 'Zuruck',
    },
    projectPages: {
      crypto: {
        desc: 'Diese App zeigt meine React- und API-Integrationskenntnisse. Sie unterstutzt Firebase-Authentifizierung, Benutzerkonten, Login und personliche Coin-Listen mit Firestore. AuBerdem nutzt sie dynamisches Routing und Daten von der CoinGecko API.',
      },
      netflix: {
        desc: 'Diese React-App wurde auf GitHub Pages bereitgestellt. Sie nutzt Firebase-Authentifizierung und Firestore, ruft Filmdaten uber eine IMDB-API ab und verwendet useContext fur globales State-Management.',
      },
      property: {
        desc: 'Diese Anwendung wurde mit React entwickelt und mit CSS gestaltet. Sie ist auf Netlify gehostet und recreiert eine mobil-optimierte Space-Travel-Erfahrung mit Lazy Loading und Routing.',
      },
      twitch: {
        desc: 'Diese Anwendung wurde mit React entwickelt und mit CSS gestaltet. Sie recreiert eine mobil-optimierte, von Twitch inspirierte Erfahrung und demonstriert Routing und moderne UI-Komposition.',
      },
    },
    resume: {
      title: 'Lebenslauf',
      heroDesktop: ['Skalierbare Web-Apps bauen', 'Technische Fuhrung', 'Reale Probleme losen'],
      heroMobile: ['Skalierbare Web-Apps bauen', 'Technische Fuhrung', 'Reale Probleme losen'],
      introHeadline:
        'Full Stack Entwickler | 8+ Jahre | Laravel · Symfony · Angular · React · Node.js | Deutschland',
      introParagraphs: [
        'Ich bin Full Stack Softwareentwickler mit uber 8 Jahren Erfahrung im Aufbau skalierbarer, performanter Webanwendungen in Unternehmens-, Forschungs- und Industriebereichen.',
        'Derzeit arbeite ich am Leibniz-Institut (IOER) in Dresden und entwickle Forschungsinformationssysteme, Dokumentenplattformen und datengetriebene Web-Tools mit Laravel, Angular, React und MySQL unter GDPR-Compliance.',
        'Zuvor habe ich bei Bosch Rexroth und LIWETEC globale Plattformen, REST-APIs und Engineering-Tools fur internationale Nutzer und Partner entwickelt.',
      ],
      tableTitle: 'Was ich mitbringe:',
      strengths: [
        'Starke Backend-Skills in Laravel/Symfony (PHP), Node.js, PostgreSQL, MySQL',
        'Modernes Frontend mit Angular, React, Vue.js, Next.js',
        'Cloud und DevOps: AWS S3, Azure, Docker, CI/CD, GitLab',
        'Sicherheitsfokus: Authentifizierung, RBAC, GDPR-Compliance',
        'Agiler Teamplayer mit Erfahrung in verteilten, interdisziplinaren Teams',
      ],
      education:
        'Ich habe einen M.Sc. in Automotive Software Engineering von der TU Chemnitz sowie einen MCA (Outstanding Grade) von der Pune University.',
      closing:
        'Offen fur spannende Full-Stack- oder Backend-Rollen in Deutschland. Lass uns vernetzen.',
      professionalExperience: 'Berufserfahrung',
      experiences: [
        {
          company: 'Leibniz Institute of Ecological Urban and Regional Development (IOER)',
          location: 'Dresden (Hybrid), Deutschland.',
          role: 'Software Developer Research Information System (Sept-2024 - heute)',
          points: [
            '40% manuelle Verarbeitung eliminiert durch Digitalisierung von Forschungs- und Verwaltungsworkflows',
            'Ladezeiten um 25% verbessert durch Query-Optimierung und Caching (Angular, React, Laravel, MySQL)',
            '10+ REST-APIs fur externe Partnersysteme mit hoher Zuverlassigkeit entworfen und gepflegt',
            'Strukturiertes Dokumentenmanagement fur bessere Auffindbarkeit und Auditierbarkeit aufgebaut',
            'Testabdeckung auf 80% erhoht durch Clean Code, OOP und modulare Architektur',
            '99% Verfugbarkeit GDPR-konformer Systeme durch Monitoring und schnelle Fehlerbehebung sichergestellt',
            'Workflows fur Stakeholder durch individuelle Web-Tools deutlich verschlankt',
          ],
        },
        {
          company: 'Liwetec GmbH',
          location: 'Bobingen (Remote), Deutschland.',
          role: 'Full Stack Web Developer (Aug-2023 - Juli-2024)',
          points: [
            'Enterprise-Plattform fur 500+ gleichzeitige Nutzer in mehreren Landern skaliert',
            'Release-Zyklus um 30% verkurzt durch Migration von Monolith zu Microservices (6+ Services)',
            '15+ REST-APIs fur bessere Inter-Service-Kommunikation und geringere Latenz entwickelt',
            'Bug-Regression um 35% gesenkt durch OOP, Dependency Injection und klare Architekturpatterns',
            'Testabdeckung auf 75% erhoht und Code-Review-Prozesse im Team etabliert',
            'Deployment-Zeit deutlich reduziert mit Docker und CI/CD-Pipelines',
            'GDPR-konforme Losungen in Agile/Scrum-Umgebungen geliefert',
          ],
        },
        {
          company: 'Bosch Rexroth AG',
          location: 'Ulm (Hybrid), Deutschland.',
          role: 'Full Stack Developer | (Angular + PHP - Backend) (Mai-2022 - Juni-2023)',
          points: [
            '3 Enterprise-Anwendungen fur globale Engineering-Teams entwickelt',
            'Manuelle Datenerfassung um 50% durch API-Integrationen reduziert',
            'Release-Stabilitat um 40% durch CI/CD und Azure DevOps verbessert',
            '500+ Nutzer mit Authentifizierung, RBAC und 2FA abgesichert',
            'API-Performance um 30% durch Debugging und Query-Optimierung gesteigert',
            'Features termingerecht in agilen Entwicklungszyklen geliefert',
          ],
        },
        {
          company: 'Yanolja Cloud Solution (ehemals eZee)',
          location: 'Surat, Indien.',
          role: 'Associate Software Engineer (PHP Developer) (Sep-2016 - Mar-2021)',
          points: [
            '20+ Drittanbieter-APIs integriert, darunter Booking.com, Expedia, Airbnb und Agoda',
            '10.000+ tagliche Transaktionen mit hoher Zuverlassigkeit und Datenkonsistenz verarbeitet',
            'Datenbankleistung um 30% durch Query-Optimierung und Indexierung verbessert',
            '99,5% Verfugbarkeit in Spitzenlastzeiten durch proaktives Monitoring aufrechterhalten',
            'Feature-Lieferzeit um 25% durch Refactoring von Legacy-Systemen mit MVC reduziert',
          ],
        },
      ],
      extrasTitle: 'Aktivitaten und Erfolge',
      extras: [
        'Mehrfach fur hohe Leistung und Engagement ausgezeichnet.',
        'Aktiver Teilnehmer an internen Coding-Wettbewerben und technischen Initiativen.',
      ],
    },
  },
};

const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
  t: () => '',
});

const getByPath = (source, path) => {
  return path.split('.').reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), source);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === 'en' || savedLanguage === 'de') {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));
  }, []);

  const t = useCallback(
    (key) => {
      const localized = getByPath(translations[language], key);
      if (localized !== undefined) return localized;
      const fallback = getByPath(translations.en, key);
      return fallback !== undefined ? fallback : key;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
