import express, { Application } from 'express';
import { Middleware } from './types';

/**
 * Primary Class that constructs all of the parts of the Express server
 */
export default class App {
	public app: Application;

	/**
	 * @param port Port Application listens on
	 * @param middleware Array of middleware to be applied to app
	 * @param routes Array of express.Router objects for application routes
	 * @param apiPath Base path for this api that will be prepended to all routes
	 */
	constructor(
		private port: number | string,
		middleware: Middleware[],
		routes: express.Router[],
		private apiPath: string
	) {
		this.app = express();

		this.middlewares(middleware);

		this.routes(routes);

		this.app.get('/status', (_, res) => res.status(200).send('Running!'));
	}

	/**
	 * @param mware Array of middlewares to be loaded into express app
	 */
	private middlewares(mware: Middleware[]) {
		mware.forEach(m => {
			this.app.use(m);
		});
	}

	public addMiddleWare(middleWare: Middleware) {
		this.app.use(middleWare);
	}

	/**
	 * Attaches route objects to app, appending routes to `apiPath`
	 * @param routes Array of router objects to be attached to the app
	 */
	private routes(routes: express.Router[]) {
		routes.forEach(r => {
			this.app.use(`${this.apiPath}`, r);
		});
	}

	/**
	 * Start the Express app
	 */
	public listen() {
		this.app.listen(this.port, () => {
			console.log('APP LISTENING ON PORT:', this.port);
		});
	}
}
