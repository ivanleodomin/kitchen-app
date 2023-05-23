"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/**
 * Primary Class that constructs all of the parts of the Express server
 */
class App {
    /**
     * @param port Port Application listens on
     * @param middleware Array of middleware to be applied to app
     * @param routes Array of express.Router objects for application routes
     * @param apiPath Base path for this api that will be prepended to all routes
     */
    constructor(port, middleware, routes, apiPath) {
        this.port = port;
        this.apiPath = apiPath;
        this.app = (0, express_1.default)();
        this.middlewares(middleware);
        this.routes(routes);
        this.app.get('/status', (_, res) => res.status(200).send('Running'));
    }
    /**
     * @param mware Array of middlewares to be loaded into express app
     */
    middlewares(mware) {
        mware.forEach(m => {
            this.app.use(m);
        });
    }
    addMiddleWare(middleWare) {
        this.app.use(middleWare);
    }
    /**
     * Attaches route objects to app, appending routes to `apiPath`
     * @param routes Array of router objects to be attached to the app
     */
    routes(routes) {
        routes.forEach(r => {
            this.app.use(`${this.apiPath}`, r);
        });
    }
    /**
     * Start the Express app
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log('APP LISTENING ON PORT:', this.port);
        });
    }
}
exports.default = App;
