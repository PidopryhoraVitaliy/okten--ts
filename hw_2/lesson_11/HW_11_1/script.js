"use strict";
// #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.
const recipesWrap = document.querySelector('.recipes-wrap');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({ recipes }) => {
    // console.log(recipes);
    for (const recipe of recipes) {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `<h2 class="title">${recipe.name}</h2>`;
        if (recipe.image) {
            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);
        }
        for (const recipeKey in recipe) {
            const typedRecipeKey = recipeKey;
            const recipeValue = recipe[typedRecipeKey];
            if (recipeKey === 'name' || recipeKey === 'image') {
                continue;
            }
            if (Array.isArray(recipeValue)) {
                addArrayInformation(recipeDiv, recipeKey, recipeKey, recipeValue);
            }
            else {
                const propDiv = document.createElement('div');
                propDiv.innerText = `${recipeKey}: ${recipeValue}`;
                recipeDiv.appendChild(propDiv);
            }
        }
        recipesWrap.appendChild(recipeDiv);
    }
});
function addArrayInformation(target, title, className, array) {
    if (!array || !array.length)
        return;
    const h4 = document.createElement('h4');
    h4.innerText = title;
    const ol = document.createElement('ol');
    ol.classList.add(className);
    for (const item of array) {
        const li = document.createElement('li');
        li.innerText = item;
        ol.appendChild(li);
    }
    target.append(h4, ol);
}
