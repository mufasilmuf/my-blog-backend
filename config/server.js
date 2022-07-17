module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.PORT,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'dda736c32a72899d72c6a65a6a155f0d'),
    },
  },
});