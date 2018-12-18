
  const htmlElement = document.getElementById('container');

  fetch(` http://api.yummly.com/v1/api/recipes?_app_id=75812ddd&_app_key=2640dca7cf225ad358cc12814a8cc376&allowedIngredient[]=apple&allowedCuisine[]=cuisine^cuisine-koean`)
  .then(response => response.json())
  .then( (json) => {
    console.log(json);
    let myrecipes = [];
    json.matches.forEach((element) => {         
      myrecipes.push(element.id);
    });

     Promise.all(myrecipes).then((myResult) => {   
      myResult.forEach((response) => {
        recipeDetail (response);      
      });
    });    
});

function recipeDetail(ele) {
  fetch(`http://api.yummly.com/v1/api/recipe/${ele}?_app_id=75812ddd&_app_key=2640dca7cf225ad358cc12814a8cc376`)
  .then(response => response.json())
  .then( (json) => {
    console.log(json)
    let str1 ='' ;
    let str2 ='' ;
    let imgUrl = json.images.map(img => img.hostedLargeUrl)

    for ( let i = 0 ; i < json.ingredientLines.length ; i++ ) {
      str1 = str1 + `<li> ${json.ingredientLines[i]}</li>`
    }

      str2 = `
       <div id="content">
          <li><h3>${json.name}</h3></li>
          <img  src="${imgUrl}" width ="100%">
          <li class ="ingredient"> ${str1}</li>     
          <li><p></p></li>
          <li class ="url">Source:<a href ="${json.source.sourceRecipeUrl}" target="new">${json.source.sourceSiteUrl}</li>
      </div>`
    htmlElement.insertAdjacentHTML('afterbegin',str2)
  });
}

