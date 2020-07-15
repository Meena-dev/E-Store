export default {
  MONGODB_URL: process.env_MONGODB_URL || "mongodb://localhost/estore",
  JWT_SECRET: process.env_JWT_SECRET || "somethingsecret",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "sb",
};
