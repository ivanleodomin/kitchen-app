import { Router } from "express";
import { recipeController } from "../../dependencies";

const PATH = "/recipe"
const router = Router()

router.get(
    PATH + '/:page',
    recipeController.
        getRecipes
        .bind(recipeController),
    recipeController.
        sendResponse
        .bind(recipeController)
)

export default router;