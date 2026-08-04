import Head from 'next/head';
import { useRouter } from 'next/router';
import { translations, getByPath } from '../context/LanguageContext';

const sectionHeadingStyle = {
  fontSize: '16px',
  marginTop: '20px',
  marginBottom: '8px',
  borderBottom: '2px solid #6366f1',
  paddingBottom: '4px',
  color: '#111827',
};

const ResumePrint = () => {
  const router = useRouter();
  const langParam = Array.isArray(router.query.lang) ? router.query.lang[0] : router.query.lang;
  const lang = langParam === 'de' ? 'de' : 'en';

  const t = (key) => {
    const localized = getByPath(translations[lang], key);
    if (localized !== undefined) return localized;
    return getByPath(translations.en, key);
  };

  const introParagraphs = t('resume.introParagraphs') || [];
  const strengths = t('resume.strengths') || [];
  const experiences = t('resume.experiences') || [];
  const resumeProjects = t('resume.projects') || [];
  const extras = t('resume.extras') || [];

  return (
    <>
      <Head>
        <title>{`Subhashchandra Borad | ${t('resume.title')}`}</title>
      </Head>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '32px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          color: '#1a1a1a',
          background: '#ffffff',
        }}
      >
        <h1 style={{ fontSize: '28px', marginBottom: '4px', color: '#111827' }}>Subhashchandra Borad</h1>
        <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '16px' }}>{t('resume.introHeadline')}</p>

        {introParagraphs.map((paragraph) => (
          <p key={paragraph} style={{ fontSize: '13px', lineHeight: 1.6, marginBottom: '8px', color: '#374151' }}>
            {paragraph}
          </p>
        ))}

        <h2 style={sectionHeadingStyle}>{t('resume.tableTitle')}</h2>
        {strengths.map((group) => (
          <p key={group.category} style={{ fontSize: '13px', marginBottom: '6px', color: '#374151' }}>
            <strong>{group.category}:</strong> {group.items.join(', ')}
          </p>
        ))}

        <p style={{ fontSize: '13px', marginTop: '12px', color: '#374151' }}>{t('resume.education')}</p>
        <p style={{ fontSize: '13px', marginTop: '6px', color: '#111827', fontWeight: 'bold' }}>{t('resume.closing')}</p>

        <h2 style={sectionHeadingStyle}>{t('resume.professionalExperience')}</h2>
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            style={{ marginBottom: '14px', breakInside: 'avoid', pageBreakInside: 'avoid' }}
          >
            <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px', color: '#111827' }}>
              {exp.company} — {exp.location}
            </p>
            <p style={{ fontSize: '13px', fontStyle: 'italic', marginBottom: '4px', color: '#4b5563' }}>
              {exp.role}
            </p>
            <ul style={{ paddingLeft: '18px', margin: 0 }}>
              {exp.points.map((point) => (
                <li key={point} style={{ fontSize: '12.5px', lineHeight: 1.5, color: '#374151' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {resumeProjects.length > 0 && (
          <>
            <h2 style={sectionHeadingStyle}>{t('resume.projectsTitle')}</h2>
            {resumeProjects.map((project) => (
              <div
                key={project.title}
                style={{ marginBottom: '14px', breakInside: 'avoid', pageBreakInside: 'avoid' }}
              >
                <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px', color: '#111827' }}>
                  {project.title}
                </p>
                <p style={{ fontSize: '13px', fontStyle: 'italic', marginBottom: '4px', color: '#4b5563' }}>
                  {project.program} | {project.university}
                </p>
                <ul style={{ paddingLeft: '18px', margin: 0 }}>
                  {project.points.map((point) => (
                    <li key={point} style={{ fontSize: '12.5px', lineHeight: 1.5, color: '#374151' }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}

        <h2 style={sectionHeadingStyle}>{t('resume.extrasTitle')}</h2>
        <ul style={{ paddingLeft: '18px', margin: 0 }}>
          {extras.map((point) => (
            <li key={point} style={{ fontSize: '12.5px', lineHeight: 1.5, color: '#374151' }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResumePrint;
