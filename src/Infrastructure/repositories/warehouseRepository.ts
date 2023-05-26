import axios from "axios";
import WarehouseRepository from "../../Domain/repositories/warehouseRepository";
import { IngredientData } from "../../Domain/entities/Recipe";
import config from "../../config";


export default class IWarehouseRepository implements WarehouseRepository {
    async validStockIngredients(ingredients: IngredientData[]): Promise<boolean> {
        try {

            const payload = ingredients.map(ingredient => {
                return {
                    ingredient: {
                        id: ingredient.ingredient.id,
                    },
                    quantity: ingredient.quantity
                }
            })

            const { data } = await axios.post<boolean>(`${config.warehouseUrl}/api/stock`, payload)

            return data
        } catch (error) {
            console.log("Error in request to Warehouse: ", error)
            return false;
        }
    }
}