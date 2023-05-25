import axios from "axios";
import Ingredient from "../../Domain/entities/Ingredient";
import WarehouseRepository from "../../Domain/repositories/warehouseRepository";
import { IngredientData } from "../../Domain/entities/Recipe";


export default class IWarehouseRepository implements WarehouseRepository {
    async validStockIngredients(ingredients: IngredientData[]): Promise<boolean> {
        try {
            const { data } = await axios.post<boolean>("/api/valid-stock", ingredients)
            return data
        } catch (error) {
            console.log("Error in request to Warehouse: ", error)
            return true;
        }
    }
}