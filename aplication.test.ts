import createOrder from '../src/Aplication/createOrder';

describe('Aplication service', () => {
	it('Create Order', async () => {
		const order = await createOrder();

		expect(order.id).not.toBeUndefined();
	});
});
