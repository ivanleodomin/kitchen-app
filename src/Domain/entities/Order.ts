import Recipe from "./Recipe";

export enum OrderStatus {
	QUEUED = 'queued',
	PREPARING = 'preparing',
	WAITING = 'waiting',
	FINISH = 'finish'
}

export default interface Order {
	id: any;
	status: OrderStatus;
	recipe: Recipe;
}
