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
}

module.exports = nextConfig
