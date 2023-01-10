const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const ingredientListEl = ingredients.map((ingridient) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingridient;
  // console.log(ingredientEl);
  return ingredientEl;
});


ingredientsEl.append(...ingredientListEl);