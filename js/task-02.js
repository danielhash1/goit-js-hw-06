const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngredients = document.querySelector("#ingredients");   // searhing of list
const listOfIngredientsArray = []; // empty array for adding elements there

ingredients.forEach((ingredient) => {
  
  let itemList = document.createElement("li"); // list of elements
  
  itemList.textContent = ingredient; // textContent for each element

  itemList.classList.add("item"); // class adding for each element

  listOfIngredientsArray.push(itemList); // adding each elemnet to the array

});

listOfIngredients.append(...listOfIngredientsArray);

