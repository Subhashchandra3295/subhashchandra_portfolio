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
    <div className="pointer">
      <Head>
        <title>Subhashchandra | Full Stack Developer</title>
        <meta name="description" content={t('home.metaDescription')} />
        <link rel="icon" href="/SB.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
