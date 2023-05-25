import  OrderService from "../Aplication/OrderService";
import IOrderRepository from "./repositories/orderRepository";
import IRecipeRepository from "./repositories/recipeRepository";
import IWarehouseRepository from "./repositories/warehouseRepository";
import OrdersController from "./rest-api/controllers/OrderController";

// Repositories
export const orderRepository = new IOrderRepository()
export const recipeRepository = new IRecipeRepository()
export const warehouseRepository = new IWarehouseRepository()

// Aplication Services
export const orderService = new OrderService(orderRepository, recipeRepository, warehouseRepository)

// Controllers
export const orderController = new OrdersController(orderService)