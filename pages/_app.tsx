import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
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
      <Notifications position='top-center' />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MantineProvider>
  )
};

export default KedrovyDvorApp;
