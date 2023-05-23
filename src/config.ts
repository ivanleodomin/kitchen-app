import 'dotenv/config';

type Config = {
	[type: string]: string;
};

const config: Config = {};

config.envioroment = process.env.ENVIRONMENT || 'development';
config.port = process.env.PORT || '3000';
config.path = process.env.API_PATH || '/api';

for (let key in config) {
	if (!config[key]) {
		throw new Error(`${key} variable not defined. App not to start`);
	}
}

export default config;
