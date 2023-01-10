const categoriesEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.length}`)

const categoriesDetail = categoriesEl.forEach((category) => {

    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`)
});


