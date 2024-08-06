export const EnvConfig = () => ({
    env: process.env.NODE_ENV || 'development',
    mongodbUri: process.env.MONGODB_URI,
    port: process.env.PORT || 3000,
    defaultLimit: process.env.DEFAULT_LIMIT || 10,
});