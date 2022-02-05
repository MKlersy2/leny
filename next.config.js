module.exports = {
  reactStrictMode: true,
  env: {
    HOSTNAME: process.env.NODE_ENV === 'production' ? 'leny.vercel.app' : 'localhost',
    PORT: process.env.NODE_ENV === 'production' ? '' : ':3000',
  },
}
