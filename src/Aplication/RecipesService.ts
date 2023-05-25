import Recipe from "../Domain/entities/Recipe";
import RecipeRepository, { RecipePage } from "../Domain/repositories/recipeRepository";



export default class RecipeService {
    constructor(
        private recipeRepository: RecipeRepository
    ) { }


    public async getRecipes(page: number): Promise<RecipePage> {
        return this.recipeRepository.getAll({}, page)
    }

    public async getRandomRecipe(): Promise<Recipe> {
        const totalRecipes = await this.recipeRepository.getTotals();

        if (!totalRecipes) {
            throw new Error("No recipes available")
        }

        let skip = Math.floor(Math.random() * totalRecipes);

        if (skip === 0) { skip = 1 }

        const recipe = await this.recipeRepository.getAll({}, skip, 1);
        return recipe.records[0]
    }
} 