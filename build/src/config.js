"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {};
config.envioroment = process.env.ENVIRONMENT || 'development';
config.port = process.env.PORT || '3000';
config.path = process.env.API_PATH || '/api';
for (let key in config) {
    if (!config[key]) {
        throw new Error(`${key} variable not defined. App not to start`);
    }
}
exports.default = config;
