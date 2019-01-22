
  const htmlElement = document.getElementById('container');
  let myrecipes = [];

  fetch(` http://api.yummly.com/v1/api/recipes?_app_id=db56cf30&_app_key=b32e160b791f2d418eac389c01d9e2dd&allowedIngredient[]=beef&allowedCuisine[]=cuisine^cuisine-france`)
  .then(response => response.json())
  .then((json) => {

    json.matches.forEach((element) => {  
      myrecipes.push(element.id);
    });

    Promise.all(myrecipes).then((myResult) => {   

      myResult.forEach((ele) => {

        fetch(`http://api.yummly.com/v1/api/recipe/${ele}?_app_id=db56cf30&_app_key=b32e160b791f2d418eac389c01d9e2dd`)
        .then(response => response.json())   
        .then((json) => {

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

            htmlElement.insertAdjacentHTML('beforeend',str2)

        });

      });

    });   

  });
