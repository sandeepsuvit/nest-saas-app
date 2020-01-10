// Mongodb configuration properties
export const databaseConfig = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    // Enable this for long running applications sudden 'connection closed' error
    keepAlive: true,
    // Maintain up to 5 socket connections
    poolSize: 5,
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
};
