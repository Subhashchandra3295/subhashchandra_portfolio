import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { LanguageProvider } from '../context/LanguageContext';

function MyApp({ Component, pageProps }) {

  return (
    <LanguageProvider>
      <Navbar />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
