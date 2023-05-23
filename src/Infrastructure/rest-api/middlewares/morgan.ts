import morgan from 'morgan';

const handler = morgan(
	':method :url :status :res[content-length] - :response-time ms'
);

export default handler;
