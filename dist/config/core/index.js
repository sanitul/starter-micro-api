"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreConfig = void 0;
const { PORT, API, ENV, HOST, REST_API_PREFIX, BASE_URL, GRAPHQL_PATH_PREFIX } = process.env;
exports.coreConfig = {
    port: parseInt(PORT) || 3000,
    api: API || 'REST',
    env: ENV || 'DEVELOPMENT',
    host: HOST || 'localhost',
    restApiPrefix: REST_API_PREFIX || 'api',
    baseUrl: BASE_URL || 'http://localhost:3000',
    graphqlPathPrefix: GRAPHQL_PATH_PREFIX || 'graphql',
};
//# sourceMappingURL=index.js.map