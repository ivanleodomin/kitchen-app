import { FilterQuery, UpdateQuery } from "mongoose";
import Order, { OrderStatus } from "../../Domain/entities/Order";
import Recipe from "../../Domain/entities/Recipe";
import RecipeRepository, { RecipePage } from "../../Domain/repositories/recipeRepository";
import RecipeModel from "../database/collections/Recipe";


export default class IRecipeRepository implements RecipeRepository {

    async getAll(filter: FilterQuery<Order> = {}, page: number = 1, skip: number = 0, limit: number = 10): Promise<RecipePage> {
        const totalPages = await RecipeModel.countDocuments(filter)
        const recipes = await RecipeModel.find(filter).skip(skip).limit(limit)
        return {
            records: recipes,
            totalPages: totalPages,
            perPage: limit,
            currentPage: page
        }

    };

    async getById(id: string): Promise<Recipe | null> {
        try {
            return await RecipeModel.findOne({ _id: id })
        } catch (err) {
            console.log("Recipe not fount")
            return null
        }
    };


    getTotals(): Promise<number> {
        return RecipeModel.countDocuments()
    };

}