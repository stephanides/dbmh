require('dotenv').config();

export const config = {
  dbName: `fermo`,
  recaptcha: {
    secret: process.env.RECAPTCHA_SECRET,
  },
  mailchimp: {
    secret: process.env.MAILCHIMP_SECRET,
  },
  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    host: process.env.EMAIL_HOST,
  },
  jwtSecret: process.env.SUPERSECRET,
  port: process.env.PORT,
};
