import Order, { OrderStatus } from "../Domain/entities/Order";
import Recipe from "../Domain/entities/Recipe";
import OrderRepository from "../Domain/repositories/orderRepository";
import RecipeRepository from "../Domain/repositories/recipeRepository";
import WarehouseRepository from "../Domain/repositories/warehouseRepository";

export default class OrderService {
    constructor(
        private orderRepository: OrderRepository,
        private recipeRepository: RecipeRepository,
        private warehouseRepository: WarehouseRepository
    ) { }

    public async createOrder(): Promise<Order> {
        const recipe = await this.getRecipe();
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

    private async getRecipe(): Promise<Recipe> {
        const totalRecipes = await this.recipeRepository.getTotals();

        if (!totalRecipes) {
            throw new Error("No recipes available")
        }

        const skip = Math.floor(Math.random() * totalRecipes);
        const recipe = await this.recipeRepository.getAll({}, 1, skip, 1);
        return recipe.records[0]
    }
}