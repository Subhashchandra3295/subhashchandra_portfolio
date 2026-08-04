import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { LanguageProvider } from '../context/LanguageContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isPrintPage = router.pathname === '/resume-print';

  return (
    <LanguageProvider>
      {!isPrintPage && <Navbar />}
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
