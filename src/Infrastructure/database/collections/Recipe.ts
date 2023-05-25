import mongoose from 'mongoose'
import Recipe from '../../../Domain/entities/Recipe';

const RecipeSchema = new mongoose.Schema<Recipe>(
    {
        name: { type: String, required: true },
        ingredients: [
            {
                ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'ingredient', required: true },
                quantity: { type: Number, required: true },
            }
        ],
    },
    {
        versionKey: false
    }
);

const RecipeModel = mongoose.model<Recipe>('recipe', RecipeSchema);

export default RecipeModel;
