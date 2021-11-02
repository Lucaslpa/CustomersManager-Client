/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    API_URL: process.env.API_URL,
    SECRET_KEY: process.env.SECRET_KEY,
  },
}
