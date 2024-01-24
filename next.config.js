/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const APP_ENV = process.env.APP_ENV ?? 'local';

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['string-width'],
  env: {
    APP_ENV
  }
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
