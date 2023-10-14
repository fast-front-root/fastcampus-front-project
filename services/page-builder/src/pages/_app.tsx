import '@/src/styles/globals.css';
import { ToastProvider } from '@fastcampus/react-components-toast';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
};

export default App;
