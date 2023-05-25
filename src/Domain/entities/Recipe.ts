import Ingredient from "./Ingredient";

export default interface Recipe {
	id: any;
	name: string;
	ingredients: IngredientData[];
}

export interface IngredientData {
	ingredient: Ingredient,
	quantity: number
} 