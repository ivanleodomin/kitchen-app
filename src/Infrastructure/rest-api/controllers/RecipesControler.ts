import { NextFunction, Request, Response } from "express";
import RecipeService from "../../../Aplication/RecipesService";
import { BaseController } from "./base.controller";
import { RecipePage } from "../../../Domain/repositories/recipeRepository";
import { ErrorResponse } from "../types";

export default class RecipeController extends BaseController {

    constructor(private recipeservice: RecipeService) {
        super()
    }


    async getRecipes(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { page } = req.params

        let status: number
        let data: RecipePage | ErrorResponse

        try {
            if (!page) {
                throw new Error("page is required")
            }

            data = await this.recipeservice.getRecipes(Number(page))
            status = 200
        } catch (err) {
            data = { error: this.getError(err) }
            status = 400
        }

        res.locals = { status, data }
        return next()

    }

}