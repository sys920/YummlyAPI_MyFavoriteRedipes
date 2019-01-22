
  const htmlElement = document.getElementById('container');


  fetch(`https://api.yummly.com/v1/api/recipes?_app_id=db56cf30&_app_key=b32e160b791f2d418eac389c01d9e2dd&allowedIngredient[]=beef&allowedCuisine[]=cuisine^cuisine-france`)
  .then(response => response.json())
  .then((json) => {
    let recipes = json.matches.map((recipe) => {
      return fetch(`https://api.yummly.com/v1/api/recipe/${recipe.id}?_app_id=db56cf30&_app_key=b32e160b791f2d418eac389c01d9e2dd`)
        .then(response => response.json())
    });



    Promise.all(recipes).then((recipes) => {   
      recipes.forEach((recipe) => {

        htmlElement.insertAdjacentHTML('afterbegin',

          `<div id="content">
            <li>
              <h3>${recipe.name}</h3>
              <img src='${recipe.images[0].hostedLargeUrl}'>
              <h3 class ="ingredient" >Ingredients</h5>
              <ul>
                ${recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
              </ul>
               <span class ="url">Get the recipe at <a href='${recipe.source.sourceRecipeUrl}'>${recipe.source.sourceDisplayName}</a> </span>
            </li>
          </div>`
        )
      });
    })
  });