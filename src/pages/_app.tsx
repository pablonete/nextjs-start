import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { NavBar } from '../main/NavBar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
