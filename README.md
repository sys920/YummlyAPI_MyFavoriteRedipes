# YummlyAPI_MyFavoriteRedipes
- Using API,  the Yummly Recipe Database

# code 
- app.js : main source code of the app 
- index.html : run this app 
- styles.css : styles of this app

# Requirements:
You will need to query the Yummly Recipe Database with to find recipes
- The recipe must have one of the following ingredients: chicken, broccoli, tofu, mushroom, beef, pork, apples, yogurt. For this, you will need to use the allowedIngredient parameter. Only provide one ingredient of your choice.
- The recipe must be from a specific type of cuisine. The cuisine type is your choice. You will need to use the allowedCuisine parameter to accomplish this.
- Querying the recipes endpoint will return 10 recipes that match your query.
- Take these results and query the API again using the receipes id to get each of the recipes details. This should be done in order and all at the same time using Promise.all.
- Using only the recipes detailed information, output the following pieces of information for each recipe:
(The recipe name, The large image for the recipe, The recipe ingredient list, The recipe source URL, with a link back to it.)
- You should output your information in some nicely formatted HTML.
