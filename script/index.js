const addNewMeal = async (meal) => {
    const content = document.getElementById('food-menu');
		const newElement = document.createElement('div');
		newElement.classList.add("card_main_container2");
		newElement.innerHTML = `<div class="example-2 card_main">
			<div class="wrapper" style="background: url(${meal.strMealThumb}) center/cover no-repeat;">
				<div class="header">
					<div class="date">
						<span class="day">makanan</span>
					</div>
					<ul class="menu-content">
						<li><a href="#" class=""><span>89</span></a></li>
					</ul>
				</div>
				<div class="data">
					<div class="content">
						<span class="author">REVIEW</span>
						<h1 class="title"><a href="./detail/detail.html?idMeal=${meal.idMeal}" target="_blank">${meal.strMeal}</a></h1>
						<p class="text">Description</p>
						<a href="./detail/detail.html?idMeal=${meal.idMeal}" target="_blank" class="button">Read more</a>
					</div>
				</div>
			</div>
		</div>`;
        content.appendChild(newElement);
}

(async() => {
    const params = new URLSearchParams(document.location.search);
    const search = params.get("search");
    let meals = [];

    if(search){
        const input = document.getElementById('search-bar');
        console.log(input);
        input.value = search;
        meals = await getAllMealByName(search);
    }else{
        meals = await getAllMeals();
    }

    if(meals){
        console.log(meals);
        for(const meal of meals){
            console.log(meal.strMeal);
            await addNewMeal(meal);
        }
    }else{
        const content = document.getElementById('food-menu');
        content.innerHTML = '<h1 style="color:#fff;font-weight:600;">= = = Item not found = = =</h1>';
    }
})();