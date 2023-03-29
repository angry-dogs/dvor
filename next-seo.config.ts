export const PublicDomain = 'https://kedrovy-dvor.com';

export const SEO = {
  titleTemplate: '%s – Строительная компания «Кедровый двор»',
  defaultTitle: 'Строительная компания «Кедровый двор»',
  description: 'Проектирование и строительство загородных домов под ключ в Красноярском крае, России и странах СНГ',
  canonical: PublicDomain,
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'Кедровый двор',
    },
    {
      name: 'application-name',
      content: 'Кедровый двор',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
  openGraph: {
    title: 'Строительная компания «Кедровый двор»',
    site_name: 'Строительная компания «Кедровый двор»',
    type: 'website',
    locale: 'ru_RU',
    description: 'Проектирование и строительство загородных домов под ключ в Красноярском крае, России и странах СНГ',
    url: PublicDomain,
    images: [
      {
        url: 'https://kedrovy-dvor.com/img/bg-1.jpg',
        alt: 'Строительная компания «Кедровый двор»',
        width: 1200,
        height: 800,
      },
    ],
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
