import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { useLanguage } from '../context/LanguageContext'


export default function Home() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="portfolio-page">
      <Head>
        <title>Subhashchandra | Full Stack Developer</title>
        <meta name="description" content={t('home.metaDescription')} />
      </Head>
    <Main />
    <Projects />
    <About />
    <Skills />
    <Contact />
    </main>
  )
}
