export default () => ({
    database: {
        uri: `mongodb://${process.env.DB_HOST || '127.0.0.1'}:${process.env.DB_PORT || 27017}/${process.env.DB_NAME || 'nest'}`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        // Enable this for long running applications sudden 'connection closed' error
        keepAlive: true,
        // Maintain up to 5 socket connections
        poolSize: 5,
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0,
        // auth: process.env.DB_USER ? {
        //     user: process.env.DB_USER || null,
        //     password: process.env.DB_PASSWORD || null,
        // } : null,
    },
});
