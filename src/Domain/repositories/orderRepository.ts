import Order from '../entities/Order';
import Recipe from '../entities/Recipe';
import Page from './paginate';

export type OrderPage = Page<Order>

export default interface OrderRepository {
	register(recipe: Recipe): Promise<Order>;
	getAll(filter?: any, page?: number, skip?: number, limit?: number): Promise<OrderPage>;
	getById(id: string): Promise<Order | null>
	update(orderId: string, update: any): Promise<Order | null>;
}
