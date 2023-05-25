import Ingredient from "../entities/Ingredient";
import { IngredientData } from "../entities/Recipe";


export default interface WarehouseRepository {
    validStockIngredients(ingredients: IngredientData[]): Promise<boolean>
}