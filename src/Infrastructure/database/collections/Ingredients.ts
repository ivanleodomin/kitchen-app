import mongoose from 'mongoose'
import Ingredient from '../../../Domain/entities/Ingredient';

const ingredientSchema = new mongoose.Schema<Ingredient>({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    quantity: { type: Number, required: true }
});

const IngredientModel = mongoose.model<Ingredient>('ingredient', ingredientSchema);

export default IngredientModel;
