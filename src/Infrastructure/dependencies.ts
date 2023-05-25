import OrderService from "../Aplication/OrderService";
import RecipeService from "../Aplication/RecipesService";
import IOrderRepository from "./repositories/orderRepository";
import IRecipeRepository from "./repositories/recipeRepository";
import IWarehouseRepository from "./repositories/warehouseRepository";
import OrdersController from "./rest-api/controllers/OrderController";
import RecipesController from "./rest-api/controllers/RecipesControler";

// Repositories
export const orderRepository = new IOrderRepository()
export const recipeRepository = new IRecipeRepository()
export const warehouseRepository = new IWarehouseRepository()

// Aplication Services
export const recipeService = new RecipeService(recipeRepository)
export const orderService = new OrderService(orderRepository, warehouseRepository, recipeService)

// Controllers
export const orderController = new OrdersController(orderService)
export const recipeController = new RecipesController(recipeService)