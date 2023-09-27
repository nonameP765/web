/** @type {import('next').NextConfig} */

const APP_ENV = process.env.APP_ENV ?? 'local';

const nextConfig = {
  reactStrictMode: false,
  env: {
    APP_ENV
  }
};

module.exports = nextConfig;
