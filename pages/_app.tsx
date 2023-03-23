import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { SEO } from 'next-seo.config';
import { DefaultSeo } from 'next-seo';
import './styles.css';

const KedrovyDvorApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'light' }}
    >
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MantineProvider>
  )
};

export default KedrovyDvorApp;
