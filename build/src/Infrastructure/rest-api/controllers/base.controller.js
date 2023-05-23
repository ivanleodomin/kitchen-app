"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    sendResponse(_req, res) {
        const { data, status } = res.locals;
        res.status(status).send(data);
    }
}
exports.BaseController = BaseController;
