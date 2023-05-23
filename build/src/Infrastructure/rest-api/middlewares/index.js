"use strict";
/**
 * from here you import and export the middlewares that
 * are executed at the beginning of the request. They must
 * be exported in the array in the order you want them to
 * be executed.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_json_1 = __importDefault(require("./express-json"));
const morgan_1 = __importDefault(require("./morgan"));
exports.default = [morgan_1.default, express_json_1.default];
