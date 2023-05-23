import config from '../../config';
import App from './app';
import middlewares from './middlewares';
import routes from './routes';

const app = new App(config.port, middlewares, routes, config.path);

export default app;
