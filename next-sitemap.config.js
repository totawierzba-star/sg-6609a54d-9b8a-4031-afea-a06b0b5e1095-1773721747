/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bizneslot.info',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // (opcjonalnie) wyklucz dynamiczne mapy
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}