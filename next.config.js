module.exports = {
  reactStrictMode: true,
  env: {
    EXTENSION: process.env.NODE_ENV === 'production' ? 'https' : 'http',
    HOSTNAME: process.env.NODE_ENV === 'production' ? 'leny.vercel.app' : 'localhost',
    PORT: process.env.NODE_ENV === 'production' ? '' : ':3000',
  },
}
