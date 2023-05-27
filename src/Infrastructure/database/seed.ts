import IngredientModel from "./collections/Ingredients";
import RecipeModel from "./collections/Recipe";
import connectDB from "./conection";


async function seedDb(): Promise<void> {
    await connectDB()
    try {
        await RecipeModel.deleteMany();
        await IngredientModel.deleteMany();

        const seededIngredients = await IngredientModel.create(ingredients);

        const mappedRecipes = recipes.map((recipe) => ({
            ...recipe,
            ingredients: recipe.ingredients.map((item) => {

                const ingredient = seededIngredients.find(
                    (seededIngredient) => seededIngredient.name === item.name
                );

                return {
                    ingredient: ingredient?._id,
                    quantity: item.quantity
                }
            }),
        }));

        await RecipeModel.create(mappedRecipes);

        console.log('Data saved');
    } catch (error) {
        console.error('Error in seed db', error);
    }
};

seedDb();

const recipes = [
    {
        name: "Tomato Salad",
        ingredients: [
            { name: "tomato", quantity: 1 },
            { name: "lettuce", quantity: 1 },
            { name: "onion", quantity: 1 }
        ]
    },
    {
        name: "Lemon Chicken",
        ingredients: [
            { name: "lemon", quantity: 1 },
            { name: "chicken", quantity: 1 }
        ]
    },
    {
        name: "Potato Soup",
        ingredients: [
            { name: "potato", quantity: 1 },
            { name: "onion", quantity: 1 }
        ]
    },
    {
        name: "Rice and Meat",
        ingredients: [
            { name: "rice", quantity: 1 },
            { name: "meat", quantity: 1 }
        ]
    },
    {
        name: "Ketchup Burger",
        ingredients: [
            { name: "ketchup", quantity: 1 },
            { name: "cheese", quantity: 1 },
            { name: "meat", quantity: 1 },
            { name: "onion", quantity: 1 }
        ]
    },
    {
        name: "Cheese and Onion Omelette",
        ingredients: [
            { name: "cheese", quantity: 1 },
            { name: "onion", quantity: 1 }
        ]
    }
];

const ingredients = [
    {
        name: "tomato",
        icon: "🍅",
        quantity: 5
    },
    {
        name: "lemon",
        icon: "🍋",
        quantity: 5
    },
    {
        name: "potato",
        icon: "🥔",
        quantity: 5
    },
    {
        name: "rice",
        icon: "🍚",
        quantity: 5
    },
    {
        name: "ketchup",
        icon: "🥫",
        quantity: 5
    },
    {
        name: "lettuce",
        icon: "🥬",
        quantity: 5
    },
    {
        name: "onion",
        icon: "🧅",
        quantity: 5
    },
    {
        name: "cheese",
        icon: "🧀",
        quantity: 5
    },
    {
        name: "meat",
        icon: "🥩",
        quantity: 5
    },
    {
        name: "chicken",
        icon: "🍗",
        quantity: 5
    }
];
