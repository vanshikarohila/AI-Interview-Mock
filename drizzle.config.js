/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_FwozacXRV69M@ep-tiny-base-b85bg6p8.c-14.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    }
};