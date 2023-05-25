import Order, { OrderStatus } from "../Domain/entities/Order";
import Recipe from "../Domain/entities/Recipe";
import OrderRepository, { OrderPage } from "../Domain/repositories/orderRepository";
import WarehouseRepository from "../Domain/repositories/warehouseRepository";
import RecipeService from "./RecipesService";

export default class OrderService {
    constructor(
        private orderRepository: OrderRepository,
        private warehouseRepository: WarehouseRepository,
        private recipeService: RecipeService,
    ) { }

    public async createOrder(): Promise<Order> {
        const recipe = await this.recipeService.getRandomRecipe();
        const order = this.orderRepository.register(recipe)
        return order
    }

    public async prepareOrder(orderId: string): Promise<Order> {
        const order = await this.validateOrder(orderId, [OrderStatus.QUEUED, OrderStatus.WAITING])

        const inStock = await this.warehouseRepository.validStockIngredients(order.recipe.ingredients)
        const status = inStock ? OrderStatus.PREPARING : OrderStatus.WAITING

        let updated = await this.orderRepository.update(orderId, { status: status })

        if (!updated) {
            throw new Error("Order not updated: " + orderId)
        }

        return updated
    }

    public async finishOrder(orderId: string): Promise<Order> {
        await this.validateOrder(orderId, [OrderStatus.PREPARING])

        let updated = await this.orderRepository.update(orderId, { status: OrderStatus.FINISH })

        if (!updated) {
            throw new Error("Order not updated: " + orderId)
        }

        return updated
    }

    public async validateOrder(orderId: string, validStatus?: OrderStatus[]): Promise<Order> {
        const order = await this.orderRepository.getById(orderId);

        if (!order) {
            throw new Error("Order not found: " + orderId);
        }

        if (validStatus && !validStatus.some((s) => order.status === s)) {
            throw new Error("Order not valid cause is not " + validStatus + ": " + orderId);
        }

        return order;
    }

    public getOrders(page: number): Promise<OrderPage> {
        return this.orderRepository.getAll({}, page)
    }
}