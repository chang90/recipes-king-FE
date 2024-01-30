/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["placehold.co"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en-AU', 'zh_CN'],
    defaultLocale: 'en-AU',
    localeDetection: false,
  },
}

module.exports = nextConfig
