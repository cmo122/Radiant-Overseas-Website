// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '@mantine/core/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
