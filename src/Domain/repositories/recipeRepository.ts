import Recipe from "../entities/Recipe";
import Page from "./paginate";

export type RecipePage = Page<Recipe>

export default interface RecipeRepository {
    getAll(filter: any, page?: number, limit?: number): Promise<RecipePage>;
    getById(id: string): Promise<Recipe | null>
    getTotals(): Promise<number>;
}
