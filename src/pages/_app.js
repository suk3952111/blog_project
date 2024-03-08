import '@/styles/base/common.scss';
import { ThemeProvider, LanguageProvider } from '@/hooks/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
