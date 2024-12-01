async function fetchData(url, country) {
    try {
        const data = await fetch(url);
        const {
            meals
        } = await data.json();
        meals.forEach(meal => {
            meal.country = country;
        });
        return meals;
    } catch (error) {
        console.log('error fethcing data', error);
    }
}

async function getAllCategory() {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const {
        meals
    } = await data.json();
    let result = [];
    for (let data of meals) {
        result.push(data.strArea);
    }
    return result;
}



export async function getAllCuisineData() {

    let category = await getAllCategory();
    let promiseArray = category.map((cuishine) => {
        return fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuishine}`, cuishine);

    })
    const data = await Promise.all(promiseArray);
    const result = data.flat(1);
    return {
        result,
        category
    };
}

export async function getRecipie() {
    const id = localStorage.getItem('id');
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const {
        meals
    } = await data.json();
    const result = {
        image: '',
        indgredient: {},
        title: '',
        instruction: ''
    }
    for (let i = 0; i < 20; i++) {
        const key = meals[0][`strIngredient${i + 1}`]
        const quantity = meals[0][`strMeasure${i + 1}`]
        if (key) {
            result.indgredient[key] = quantity;
        }
    }
    result.image = meals[0].strMealThumb;
    result.title = meals[0].strMeal;
    result.instruction = meals[0].strInstructions;


    return result;
}