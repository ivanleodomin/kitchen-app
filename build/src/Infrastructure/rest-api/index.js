"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const app_1 = __importDefault(require("./app"));
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("./routes"));
const app = new app_1.default(config_1.default.port, middlewares_1.default, routes_1.default, config_1.default.path);
exports.default = app;
