import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'language';

export const translations = {
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
        'I build full stack web applications — responsive front-ends paired with reliable, scalable back-end systems.',
    },
    about: {
      title: 'About',
      subtitle: 'Who I Am',
      p1: "I'm a Full Stack Developer with 8+ years of experience building web applications across Laravel, Symfony, Angular, React, and Next.js. I care about clean architecture, dependable delivery, and code that's easy for the next person to work with.",
      p2: "I like thinking both strategically and hands-on — understanding the bigger picture of a product while still being comfortable in the weeds of implementation. I'm adaptable by nature and enjoy picking up new tools and technologies as projects demand.",
      p3: "I build because I genuinely enjoy it. I like being part of the tech community and creating web experiences that are actually useful. I'm open to full-time, freelance, and part-time work — always happy to talk about what you're building.",
    },
    skills: {
      title: 'Skills',
      subtitle: 'What I Can Do',
    },
    projects: {
      title: 'Projects',
      subtitle: "What I've Built",
      intro:
        'A mix of fully working demo apps and portfolio-safe case studies that show how I approach real-world full stack problems with Laravel, Symfony, Angular, React, Next.js, and modern databases.',
      caseStudy: 'Case Study',
      demoProject: 'Demo Project',
      demoProjectsHeading: 'Demo Projects',
      caseStudiesHeading: 'Case Studies',
      cta: 'Discuss this project',
      viewCaseStudy: 'View Case Study',
      viewOnGithub: 'View on GitHub',
      viewProject: 'View Project',
      viewLiveDemo: 'Live Demo',
      items: [
        {
          slug: 'saas-pm-platform',
          title: 'SaaS PM Platform',
          tech: 'Next.js | NestJS | PostgreSQL | Redis | BullMQ',
          summary:
            'A multi-tenant project management platform — organizations, projects, and tasks — with tenant-scoped JWT auth, Redis-cached reads, and BullMQ background jobs for notifications.',
          impact:
            'What it shows: production-style architecture — multi-tenancy enforced at the query layer, cache-aside reads, background job processing, Docker Compose, and CI with real Postgres/Redis service containers.',
          github: 'https://github.com/Subhashchandra3295/saas-pm-platform',
          demo: 'https://saas-pm-platform.vercel.app',
          icon: '/assets/skills/nextjs.png',
          screenshot: '/assets/projects/saas-pm-platform.png',
        },
        {
          slug: 'ecommerce-platform',
          title: 'ShopCraft',
          tech: 'Laravel | Next.js | PostgreSQL | Redis | Stripe',
          summary:
            'A full e-commerce platform with a Laravel API and a Next.js storefront — product catalog, cart, and a real Stripe Checkout flow backed by a signed webhook and a queued order-processing job.',
          impact:
            'What it shows: a real Stripe Checkout Session with webhook signature verification, cart-to-order snapshotting inside a DB transaction, Redis-queued stock decrement, a server-rendered admin panel, and a typed Next.js frontend consuming a token-authenticated API.',
          github: 'https://github.com/Subhashchandra3295/ecommerce-platform',
          demo: 'https://ecommerce-platform-snowy-two.vercel.app',
          icon: '/assets/skills/laravel.png',
          screenshot: '/assets/projects/ecommerce-platform.png',
        },
        {
          slug: 'budget-buddy',
          title: 'Budget Buddy',
          tech: 'React | Vite | Recharts',
          summary:
            'A personal expense tracker with category and monthly spending charts, built to explore client-side state management and data visualization.',
          impact: 'What it shows: component architecture, charting, and state management without a backend.',
          github: 'https://github.com/Subhashchandra3295/budget-buddy',
          icon: '/assets/skills/react.png',
          screenshot: '/assets/projects/budget-buddy.png',
        },
        {
          slug: 'recipe-box',
          title: 'Recipe Box',
          tech: 'Vue 3 | Vue Router | Pinia',
          summary:
            'A recipe manager with search, tag filtering, and an ingredient checklist, built to explore the Composition API and Pinia state management.',
          impact: 'What it shows: Vue Router, centralized state with Pinia, and localStorage persistence.',
          github: 'https://github.com/Subhashchandra3295/recipe-box',
          icon: '/assets/skills/vue.svg',
          screenshot: '/assets/projects/recipe-box.png',
        },
        {
          slug: 'linkstash',
          title: 'LinkStash',
          tech: 'Next.js | Prisma | SQLite',
          summary:
            'A bookmark manager with real REST API routes and server-side rendering, built to explore the Next.js App Router as both frontend and backend.',
          impact: 'What it shows: API route handlers, Prisma ORM, and server-rendered data fetching.',
          github: 'https://github.com/Subhashchandra3295/linkstash',
          icon: '/assets/skills/nextjs.png',
          screenshot: '/assets/projects/linkstash.png',
        },
        {
          slug: 'taskboard',
          title: 'Taskboard',
          tech: 'Laravel | Livewire | SQLite',
          summary:
            'A Kanban-style task board with boards, lists, and tasks, built to explore Eloquent relationships and reactive UI with Livewire.',
          impact: 'What it shows: MVC structure, Eloquent migrations/relationships, and server-driven reactivity.',
          github: 'https://github.com/Subhashchandra3295/taskboard',
          icon: '/assets/skills/laravel.png',
          screenshot: '/assets/projects/taskboard.png',
        },
        {
          slug: 'shopcart',
          title: 'ShopCart',
          tech: 'Laravel | Stripe | SQLite',
          summary:
            'A small e-commerce storefront with a product catalog, session-based cart, and Stripe Checkout Sessions in test mode, built to explore payment integration and order management.',
          impact: 'What it shows: Stripe payment integration, Eloquent order/inventory modeling, auth-gated checkout, and an admin CRUD area.',
          github: 'https://github.com/Subhashchandra3295/shopcart',
          icon: '/assets/skills/laravel.png',
          screenshot: '/assets/projects/shopcart.png',
        },
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
      availability: "I am open to full-time, freelance, and part-time opportunities. Get in touch and let's talk.",
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
    },
    resume: {
      title: 'Resume',
      heroDesktop: ['Building Scalable Web Apps', 'Technical Leadership', 'Solving Real-World Problems'],
      heroMobile: ['Building Scalable Web Apps', 'Technical Leadership', 'Solving Real-World Problems'],
      introHeadline:
        'Full Stack Developer | 8+ Years | Laravel · Symfony · Angular · React · Node.js | Germany',
      introParagraphs: [
        'I am a Full Stack & Backend Developer with over 8 years of experience designing, developing, and delivering scalable web applications, enterprise platforms, and data-driven systems across research, industrial, and enterprise domains.',
        'Currently, I work at the Leibniz Institute for Ecological Urban and Regional Development (IOER) in Dresden, where I develop and maintain Research Information Systems (RIS), document management platforms, and web-based applications — covering backend development, frontend implementation, API integrations, database optimization, and GDPR-compliant software quality.',
        'Throughout my career, I have contributed to projects for renowned organisations including Bosch Rexroth and LIWETEC GmbH, gaining experience across the complete software development lifecycle — from requirements analysis and architecture design to development, testing, and deployment.',
      ],
      tableTitle: 'Technical Expertise',
      strengths: [
        { category: 'Backend Development', items: ['PHP', 'Laravel', 'Symfony', 'Node.js', 'REST APIs', 'Authentication & RBAC'] },
        { category: 'Frontend Development', items: ['Angular', 'React', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5'] },
        { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MariaDB', 'MongoDB'] },
        { category: 'Cloud & DevOps', items: ['Docker', 'GitLab CI/CD', 'AWS S3', 'Azure DevOps'] },
        { category: 'Engineering Practices', items: ['Clean Code & SOLID Principles', 'Agile/Scrum', 'Performance Optimization', 'GDPR Compliance'] },
        { category: 'C# / .NET', items: ['C#', 'ASP.NET MVC', 'Entity Framework Core', 'Blazor', 'Unity3D'] },
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
        {
          company: 'TechLeaper Systems Pvt. Ltd.',
          location: 'Pune, India.',
          role: 'Intern - Unity Game Developer (C#) (Jan-2016 - June-2016)',
          points: [
            "Applied object-oriented design principles and C# scripting in Unity3D to build gameplay systems, mechanics, and state management for the mobile game 'Nuts Run', launched to the App Store over a 6-month internship.",
          ],
        },
      ],
      projectsTitle: 'Projects',
      projects: [
        {
          title: 'Online Event Reminder System (ASP.NET MVC, C#)',
          program: "Master's Program Project",
          university: 'Savitribai Phule Pune University',
          points: [
            'Developed a full-featured ASP.NET MVC application in C#, using Razor views as the templating layer, enabling users to create and manage event reminders (birthdays, anniversaries, custom events) with multi-channel notification delivery (email, SMS, push).',
            'Implemented the data access layer with Entity Framework Core, mapping domain entities to a normalised SQL Server database with optimised queries and indexing to support concurrent user requests.',
            'Built a background notification engine using Hangfire for scheduled job processing, ensuring reliable, timely reminder delivery across all notification channels.',
            'Applied MVC separation of concerns and the Repository Pattern to decouple controllers, business logic, and data access, mirroring enterprise-level .NET architecture practices.',
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
        'Ich baue Full-Stack-Webanwendungen - responsive Frontends kombiniert mit zuverlassigen, skalierbaren Backend-Systemen.',
    },
    about: {
      title: 'Uber mich',
      subtitle: 'Wer ich bin',
      p1: 'Ich bin Full Stack Entwickler mit uber 8 Jahren Erfahrung in der Entwicklung von Webanwendungen mit Laravel, Symfony, Angular, React und Next.js. Mir sind saubere Architektur, verlassliche Lieferung und gut nachvollziehbarer Code wichtig.',
      p2: 'Ich denke gerne sowohl strategisch als auch hands-on - ich behalte das grosse Ganze eines Produkts im Blick und arbeite genauso gerne an der konkreten Umsetzung. Ich bin sehr anpassungsfahig und lerne gerne neue Werkzeuge und Technologien, wenn es ein Projekt erfordert.',
      p3: 'Ich entwickle, weil ich es wirklich gerne tue. Ich schatze die Tech-Community und baue gerne nutzliche Web-Erlebnisse. Ich bin offen fur Festanstellung, Freelance- und Teilzeitmoglichkeiten - sprich mich gerne an, wenn du etwas baust.',
    },
    skills: {
      title: 'Fahigkeiten',
      subtitle: 'Was ich kann',
    },
    projects: {
      title: 'Projekte',
      subtitle: 'Was ich gebaut habe',
      intro:
        'Eine Mischung aus voll funktionsfahigen Demo-Apps und portfolio-sicheren Fallstudien, die zeigen, wie ich reale Full-Stack-Probleme mit Laravel, Symfony, Angular, React, Next.js und modernen Datenbanken lose.',
      caseStudy: 'Fallstudie',
      demoProject: 'Demo-Projekt',
      demoProjectsHeading: 'Demo-Projekte',
      caseStudiesHeading: 'Fallstudien',
      cta: 'Dieses Projekt besprechen',
      viewCaseStudy: 'Fallstudie ansehen',
      viewOnGithub: 'Auf GitHub ansehen',
      viewProject: 'Projekt ansehen',
      viewLiveDemo: 'Live-Demo',
      items: [
        {
          slug: 'saas-pm-platform',
          title: 'SaaS PM Platform',
          tech: 'Next.js | NestJS | PostgreSQL | Redis | BullMQ',
          summary:
            'Eine Multi-Tenant-Projektmanagement-Plattform — Organisationen, Projekte und Aufgaben — mit mandantenfahiger JWT-Authentifizierung, Redis-Caching und BullMQ-Hintergrundjobs fur Benachrichtigungen.',
          impact:
            'Was es zeigt: produktionsnahe Architektur — Multi-Tenancy auf Datenbankebene, Cache-Aside-Lesezugriffe, Hintergrundverarbeitung, Docker Compose und CI mit echten Postgres-/Redis-Service-Containern.',
          github: 'https://github.com/Subhashchandra3295/saas-pm-platform',
          demo: 'https://saas-pm-platform.vercel.app',
          icon: '/assets/skills/nextjs.png',
          screenshot: '/assets/projects/saas-pm-platform.png',
        },
        {
          slug: 'ecommerce-platform',
          title: 'ShopCraft',
          tech: 'Laravel | Next.js | PostgreSQL | Redis | Stripe',
          summary:
            'Eine vollstandige E-Commerce-Plattform mit Laravel-API und Next.js-Storefront — Produktkatalog, Warenkorb und ein echter Stripe-Checkout-Flow mit signiertem Webhook und einem queue-basierten Bestellverarbeitungs-Job.',
          impact:
            'Was es zeigt: eine echte Stripe-Checkout-Session mit Webhook-Signaturprufung, Warenkorb-zu-Bestellung-Snapshotting in einer DB-Transaktion, Redis-Queue-basierte Lagerbestandsreduzierung, ein serverseitig gerendertes Admin-Panel und ein typisiertes Next.js-Frontend, das eine token-authentifizierte API konsumiert.',
          github: 'https://github.com/Subhashchandra3295/ecommerce-platform',
          demo: 'https://ecommerce-platform-snowy-two.vercel.app',
          icon: '/assets/skills/laravel.png',
          screenshot: '/assets/projects/ecommerce-platform.png',
        },
        {
          slug: 'budget-buddy',
          title: 'Budget Buddy',
          tech: 'React | Vite | Recharts',
          summary:
            'Ein personlicher Ausgaben-Tracker mit Kategorie- und Monatsdiagrammen, entwickelt zur Vertiefung von Client-State-Management und Datenvisualisierung.',
          impact: 'Was es zeigt: Komponentenarchitektur, Diagramme und State-Management ohne Backend.',
          github: 'https://github.com/Subhashchandra3295/budget-buddy',
          icon: '/assets/skills/react.png',
          screenshot: '/assets/projects/budget-buddy.png',
        },
        {
          slug: 'recipe-box',
          title: 'Recipe Box',
          tech: 'Vue 3 | Vue Router | Pinia',
          summary:
            'Ein Rezeptmanager mit Suche, Tag-Filterung und Zutaten-Checkliste, entwickelt zur Vertiefung der Composition API und des Pinia State-Managements.',
          impact: 'Was es zeigt: Vue Router, zentrales State-Management mit Pinia und localStorage-Persistenz.',
          github: 'https://github.com/Subhashchandra3295/recipe-box',
          icon: '/assets/skills/vue.svg',
          screenshot: '/assets/projects/recipe-box.png',
        },
        {
          slug: 'linkstash',
          title: 'LinkStash',
          tech: 'Next.js | Prisma | SQLite',
          summary:
            'Ein Lesezeichen-Manager mit echten REST-API-Routen und serverseitigem Rendering, entwickelt zur Vertiefung des Next.js App Routers als Frontend und Backend.',
          impact: 'Was es zeigt: API-Route-Handler, Prisma ORM und serverseitiges Daten-Fetching.',
          github: 'https://github.com/Subhashchandra3295/linkstash',
          icon: '/assets/skills/nextjs.png',
          screenshot: '/assets/projects/linkstash.png',
        },
        {
          slug: 'taskboard',
          title: 'Taskboard',
          tech: 'Laravel | Livewire | SQLite',
          summary:
            'Ein Kanban-Aufgabenboard mit Boards, Listen und Aufgaben, entwickelt zur Vertiefung von Eloquent-Beziehungen und reaktiver UI mit Livewire.',
          impact: 'Was es zeigt: MVC-Struktur, Eloquent-Migrationen/-Beziehungen und serverseitige Reaktivitat.',
          github: 'https://github.com/Subhashchandra3295/taskboard',
          icon: '/assets/skills/laravel.png',
          screenshot: '/assets/projects/taskboard.png',
        },
        {
          slug: 'shopcart',
          title: 'ShopCart',
          tech: 'Laravel | Stripe | SQLite',
          summary:
            'Ein kleiner Onlineshop mit Produktkatalog, sitzungsbasiertem Warenkorb und Stripe Checkout Sessions im Testmodus, entwickelt zur Vertiefung von Zahlungsintegration und Bestellverwaltung.',
          impact: 'Was es zeigt: Stripe-Zahlungsintegration, Eloquent-Bestell-/Bestandsmodellierung, Auth-gesicherter Checkout und ein Admin-CRUD-Bereich.',
          github: 'https://github.com/Subhashchandra3295/shopcart',
          icon: '/assets/skills/laravel.png',
          screenshot: '/assets/projects/shopcart.png',
        },
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
        'Ich bin offen fur Festanstellung, Freelance- und Teilzeitmoglichkeiten. Schreib mir und lass uns sprechen.',
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
    },
    resume: {
      title: 'Lebenslauf',
      heroDesktop: ['Skalierbare Web-Apps bauen', 'Technische Fuhrung', 'Reale Probleme losen'],
      heroMobile: ['Skalierbare Web-Apps bauen', 'Technische Fuhrung', 'Reale Probleme losen'],
      introHeadline:
        'Full Stack Entwickler | 8+ Jahre | Laravel · Symfony · Angular · React · Node.js | Deutschland',
      introParagraphs: [
        'Ich bin Full-Stack- & Backend-Entwickler mit uber 8 Jahren Erfahrung in der Konzeption, Entwicklung und Bereitstellung skalierbarer Webanwendungen, Unternehmensplattformen und datengetriebener Systeme in Forschungs-, Industrie- und Unternehmensbereichen.',
        'Derzeit arbeite ich am Leibniz-Institut fur okologische Raumentwicklung (IOER) in Dresden, wo ich Forschungsinformationssysteme (RIS), Dokumentenmanagement-Plattformen und webbasierte Anwendungen entwickle und pflege — von Backend- und Frontend-Entwicklung uber API-Integrationen bis hin zu Datenbankoptimierung und GDPR-konformer Softwarequalitat.',
        'Im Laufe meiner Laufbahn habe ich an Projekten fur renommierte Unternehmen wie Bosch Rexroth und LIWETEC GmbH mitgewirkt und dabei Erfahrung im gesamten Softwareentwicklungszyklus gesammelt — von der Anforderungsanalyse und Architektur bis hin zu Entwicklung, Testing und Deployment.',
      ],
      tableTitle: 'Technische Kompetenzen',
      strengths: [
        { category: 'Backend-Entwicklung', items: ['PHP', 'Laravel', 'Symfony', 'Node.js', 'REST-APIs', 'Authentifizierung & RBAC'] },
        { category: 'Frontend-Entwicklung', items: ['Angular', 'React', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5'] },
        { category: 'Datenbanken', items: ['MySQL', 'PostgreSQL', 'MariaDB', 'MongoDB'] },
        { category: 'Cloud & DevOps', items: ['Docker', 'GitLab CI/CD', 'AWS S3', 'Azure DevOps'] },
        { category: 'Engineering-Praktiken', items: ['Clean Code & SOLID-Prinzipien', 'Agile/Scrum', 'Performance-Optimierung', 'GDPR-Compliance'] },
        { category: 'C# / .NET', items: ['C#', 'ASP.NET MVC', 'Entity Framework Core', 'Blazor', 'Unity3D'] },
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
        {
          company: 'TechLeaper Systems Pvt. Ltd.',
          location: 'Pune, Indien.',
          role: 'Praktikant - Unity Game Developer (C#) (Jan-2016 - Juni-2016)',
          points: [
            "Objektorientierte Design-Prinzipien und C#-Scripting in Unity3D angewendet, um Gameplay-Systeme, Mechaniken und State-Management fur das Mobile-Game 'Nuts Run' zu entwickeln, das nach einem 6-monatigen Praktikum im App Store veroffentlicht wurde.",
          ],
        },
      ],
      projectsTitle: 'Projekte',
      projects: [
        {
          title: 'Online Event Reminder System (ASP.NET MVC, C#)',
          program: 'Masterarbeit-Projekt',
          university: 'Savitribai Phule Pune University',
          points: [
            'Eine vollstandige ASP.NET-MVC-Anwendung in C# mit Razor-Views als Templating-Schicht entwickelt, mit der Nutzer Erinnerungen (Geburtstage, Jahrestage, individuelle Ereignisse) mit Benachrichtigungen uber mehrere Kanale (E-Mail, SMS, Push) erstellen und verwalten konnen.',
            'Die Datenzugriffsschicht mit Entity Framework Core implementiert, Domanen-Entitaten auf eine normalisierte SQL-Server-Datenbank mit optimierten Abfragen und Indizierung fur nebenlaufige Anfragen abgebildet.',
            'Eine Hintergrund-Benachrichtigungs-Engine mit Hangfire fur geplante Jobs aufgebaut, um zuverlassige, punktliche Erinnerungen uber alle Kanale sicherzustellen.',
            'MVC-Trennung der Zustandigkeiten und das Repository-Pattern angewendet, um Controller, Geschaftslogik und Datenzugriff zu entkoppeln, entsprechend der Praxis in Enterprise-.NET-Architekturen.',
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

export const getByPath = (source, path) => {
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
