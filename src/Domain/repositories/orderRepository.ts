import Order from '../entities/Order';

export default interface OrderRepository {
	register(): Promise<Order>;
	getAll(status?: string): Promise<Order[]>;
	update(orderId: Order): Promise<Order>;
}
