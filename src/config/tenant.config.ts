export default () => ({
    tenant: {
        dbPrefix: process.env.TENANT_DB_PREFIX,
        dbOptions: {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            // Enable this for long running applications sudden 'connection closed' error
            keepAlive: true,
            // Maintain up to 5 socket connections
            poolSize: Number(process.env.TENANT_DB_POOL),
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0,
        },
        whitelist: process.env.WHITELIST_SUBDOMAINS,
    },
});
