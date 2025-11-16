// #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

type RecipeType = {
    id: number;
    name: string;
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number;
    image: string;
    //...
}

type RecipesResponse = {
    recipes: RecipeType [];
    total: number;
    skip: number;
    limit: number;
};

const recipesWrap: HTMLDivElement = document.querySelector('.recipes-wrap') as HTMLDivElement;

fetch('https://dummyjson.com/recipes')
    .then(res => res.json() as Promise<RecipesResponse>)
    .then(({recipes}: RecipesResponse): void => {
        // console.log(recipes);
        for (const recipe of recipes) {
            const recipeDiv: HTMLDivElement = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `<h2 class="title">${recipe.name}</h2>`;
            if (recipe.image) {
                const img: HTMLImageElement = document.createElement('img');
                img.src = recipe.image;
                recipeDiv.appendChild(img);
            }
            for (const recipeKey in recipe) {
                const typedRecipeKey = recipeKey as keyof RecipeType;
                const recipeValue: string | string[] | number = recipe[typedRecipeKey];
                if (recipeKey === 'name' || recipeKey === 'image') {
                    continue;
                }
                if (Array.isArray(recipeValue)) {
                    addArrayInformation(recipeDiv, recipeKey, recipeKey, recipeValue);
                } else {
                    const propDiv: HTMLDivElement = document.createElement('div');
                    propDiv.innerText = `${recipeKey}: ${recipeValue}`;
                    recipeDiv.appendChild(propDiv);
                }
            }
            recipesWrap.appendChild(recipeDiv);
        }
    });

function addArrayInformation(target: HTMLDivElement, title: string, className: string, array: string[]): void {
    if (!array || !array.length) return;
    const h4: HTMLHeadingElement = document.createElement('h4');
    h4.innerText = title;
    const ol: HTMLOListElement = document.createElement('ol');
    ol.classList.add(className);
    for (const item of array) {
        const li: HTMLLIElement = document.createElement('li');
        li.innerText = item;
        ol.appendChild(li);
    }
    target.append(h4, ol);
}