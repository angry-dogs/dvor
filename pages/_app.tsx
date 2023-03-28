import { AppProps } from 'next/app';
import Script from 'next/script';
import { Box, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { SEO } from 'next-seo.config';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import AppLayout from 'components/shared/layout';
import './styles.css';

const KedrovyDvorApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const Layout = router.asPath === '/' ? Box : AppLayout;

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-WQPHDDP');
          `,
        }}
      />
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'light' }}
      >
        <Notifications position='top-center' />
        <DefaultSeo {...SEO} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  )
};

export default KedrovyDvorApp;
