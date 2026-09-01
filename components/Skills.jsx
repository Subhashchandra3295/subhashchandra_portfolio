import { FiCode, FiServer, FiDatabase, FiLayers, FiCloud, FiShoppingBag, FiShield, FiCheckCircle, FiUsers } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { portfolioCopy } from '../context/portfolioCopy';

const categories = [
  { icon: FiCode, items: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'HTML5'] },
  { icon: FiServer, items: ['PHP', 'Laravel', 'Symfony', 'Node.js', 'Python', 'CodeIgniter'] },
  { icon: FiDatabase, items: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB', 'Redis'] },
  { icon: FiLayers, items: ['REST', 'SOAP', 'GraphQL', 'OpenAPI / Swagger', 'Microservices', 'MVC', 'Repository Pattern', 'Service Layer', 'SOLID', 'Dependency Injection'] },
  { icon: FiCloud, items: ['Docker', 'Docker Compose', 'GitLab CI/CD', 'GitHub Actions', 'Azure', 'AWS', 'CI/CD', 'IaC', 'Jira'] },
  { icon: FiShoppingBag, items: ['Shopware 6', 'Magento', 'WordPress'] },
  { icon: FiShield, items: ['Keycloak', 'JWT', 'OAuth2', 'GDPR'] },
  { icon: FiCheckCircle, items: ['PHPUnit', 'Integration Testing', 'Unit Testing', 'TDD'] },
  { icon: FiUsers, items: ['Agile / Scrum', 'Technical Mentoring', 'Release Management', 'Code Architecture'] },
];

export default function Skills() {
  const { language } = useLanguage();
  const copy = portfolioCopy[language];
  return <section id='skills' className='skills-section section-space'><div className='site-container'>
    <div className='section-heading'><div><p className='eyebrow'>{copy.skillsEyebrow}</p><h2>{copy.skillsTitle}</h2></div><p className='section-intro'>{copy.skillsIntro}</p></div>
    <div className='skills-grid'>{categories.map(({ icon: Icon, items }, index) => <div className='skill-category' key={copy.categories[index]}><div className='skill-heading'><Icon /><h3>{copy.categories[index]}</h3><span>{String(index + 1).padStart(2, '0')}</span></div><ul className='skill-tags'>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
  </div></section>;
}
