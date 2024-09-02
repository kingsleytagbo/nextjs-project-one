import type { AppProps } from 'next/app'
import '../app/globals.css'  // Import the global CSS

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}