// searching and output of elements

let listOfCategories = document.querySelectorAll(".item");

// elements' quantity
console.log(`Quantity of categories is: ${listOfCategories.length}`);

listOfCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`); // text of categories
    console.log(`Elements: ${item.lastElementChild.children.length}`); // elements

});
