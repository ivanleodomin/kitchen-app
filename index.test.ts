import request from 'supertest';
import server from '../src/Infrastructure/rest-api/index';

describe('Api found', () => {
	it('should "/status" is ok', async () => {
		const res = await request(server.app).get('/status');
		expect(res.statusCode).toEqual(200);
	});
});
