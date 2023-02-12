(async() => {
    const params = new URLSearchParams(document.location.search);
    const idMeal = params.get("idMeal");

    console.log(idMeal);
    const meal = await getAllMealById(idMeal);

    const img_cover = document.getElementById('img-cover');
    img_cover.src = meal.strMealThumb;

    const title = document.getElementById('meal-title');
    title.innerText = meal.strMeal;

    const ingredients = document.getElementById('ingredients');
    for (let x = 1; x <= 20; x++){
        if(meal['strIngredient'+x] !== ""){
            const item = document.createElement(`span`);
            item.innerText = `${meal['strMeasure'+x]} ${meal['strIngredient'+x]} \n`;
            ingredients.append(item);
        }
    }

    const instructions = document.getElementById('instructions');
    instructions.append(meal.strInstructions);
})();