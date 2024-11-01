/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    if (!remainingTime && remainingTime != 0)
    {
        return 'You forgot to set the timer.';
    } else if (remainingTime === 0) {
        return 'Lasagna is done.';
    } else {
        return 'Not done, please wait.';
    }
}

export function preparationTime(layers, minutesPerLayer=2) {
    return layers.length * minutesPerLayer;
}

export function quantities(layers) {
    let sauce = 0;
    let noodles = 0;
    for (let item of layers) {
        if (item === 'sauce') {
            sauce += 0.2;
        } else if (item === 'noodles') {
            noodles += 50;
        }
    }
    return {noodles: noodles, sauce: sauce};
}

export function addSecretIngredient(friendIngredients, myIngredients) {
    myIngredients.push(friendIngredients[friendIngredients.length-1])
}

export function scaleRecipe(recipe, numberOfPortions) {
    const scaledRecipe = {};
    for (let element in recipe)
    {
        scaledRecipe[element] = recipe[element] * numberOfPortions / 2 ;
    }
    return scaledRecipe;
}