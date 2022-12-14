"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const { DB, MONGODB_URI, MYSQL_DB_HOST, MYSQL_DB_PORT, MYSQL_DB_USER, MYSQL_DB_PASSWORD, MYSQL_DB_DIALECT, MYSQL_DB_NAME, } = process.env;
exports.dbConfig = {
    mongodb: {
        URI: MONGODB_URI ||
            'mongodb+srv://vercel-admin-user:3PfcwQSKNsAFyqjf@cluster0.sfg6ttg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    },
    mysql: {
        username: MYSQL_DB_USER || 'root',
        password: MYSQL_DB_PASSWORD || '',
        database: MYSQL_DB_NAME || 'bs-commerce-dev',
        host: MYSQL_DB_HOST || 'localhost',
        port: parseInt(MYSQL_DB_PORT) || 3306,
        dialect: MYSQL_DB_DIALECT || 'mysql',
    },
    db: DB || 'MONGO',
};
