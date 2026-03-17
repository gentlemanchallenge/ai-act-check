/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-act-check.info',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/api/*', '/de/impressum', '/de/datenschutz'],
  alternateRefs: [
    {
      href: 'https://ai-act-check.info',
      hreflang: 'de',
    },
  ],
};
