const BASE_API_URL = 'https://www.themealdb.com/api/json/v1/1';

const getAllMeals = async () => {
    try{
        const result = await fetch(`${BASE_API_URL}/filter.php?a=Chinese`);
        const meals = await result.json();
        return meals?.meals;
    }catch(e){
        console.log(e);
        return [];
    }
};

const getAllMealById = async (id) => {
    try{
        const result = await fetch(`${BASE_API_URL}/lookup.php?i=${id}`);
        const meals = await result.json();
        return meals?.meals[0];
    }catch(e){
        console.log(e);
        return {};
    }
};

const getAllMealByName = async (name) => {
    try{
        const result = await fetch(`${BASE_API_URL}/search.php?s=${name}`);
        const meals = await result.json();
        return meals?.meals;
    }catch(e){
        console.log(e);
        return [];
    }
};