const BaseUrl = 'https://kedrovy-dvor.com';

export const SEO = {
  titleTemplate: '%s | Кедровый двор',
  defaultTitle: 'Кедровый двор',
  description: 'Кедровый двор - проектирование и строительство загородных домов под ключ',
  canonical: BaseUrl,
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'Кедровый двор',
    },
    {
      name: 'application-name',
      content: 'Кедровый двор',
    },
    { name: 'theme-color', content: '#000000' },
  ],
  openGraph: {
    title: 'Кедровый двор',
    site_name: 'Кедровый двор',
    type: 'website',
    locale: 'ru_RU',
    description: 'Кедровый двор - проектирование и строительство загородных домов под ключ',
    url: BaseUrl,
    // images: [
    //   {
    //     url: 'https://s3.eu-central-1.amazonaws.com/kedrovy-dvor.com/favicons/logo.png',
    //     alt: 'Кедровый двор',
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/icons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/icons/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
  ],
};
