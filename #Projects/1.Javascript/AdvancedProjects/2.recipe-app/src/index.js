import { getRecipeCard } from "./getRecipeCard.js";

const cardParentContainer = document.querySelector("main")

const createElement = (element) => document.createElement(element)

const recipe_url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
let recipes;

const getData = async () => {
    try {
        const { data: { meals } } = await axios.get(recipe_url)    // nested destructurin : data.meals
        // console.log(meals)
        return meals;
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    recipes = await getData(recipe_url)
    getRecipeCard(recipes, cardParentContainer, createElement)
    console.log(recipes)
})()