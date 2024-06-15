/*
JavaScript

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
*/

function cakes(recipe, available){
    // assign the property of object to arrays
    let recipeIngredients = new Array();
    let availableIngredients = new Array();
    for ( const property in recipe ){
        recipeIngredients.push(property);
    }
    for ( const property in available ){
        availableIngredients.push(property);
    }
    
    let amount = Infinity;
    // check if every ingridient needed is available
    recipeIngredients.forEach(ingredient => {
      availableIngredients.includes(ingredient) ? 0 : amount = 0;
    })
    // devide each available amount through recipe amount and store it in "amount" to find lowest amount
    for ( const property in recipe ){
      if ( String((available[property]/recipe[property])).split(".")[0] < amount){
        amount = String((available[property]/recipe[property])).split(".")[0];
      }
    }
    return amount
  }