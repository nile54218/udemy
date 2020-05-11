import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Masala Dosa', 'A south indian dish',
         'https://files2.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg',
         [
             new Ingredient('potato', 5),
             new Ingredient('rice flour', 1)
         ]),
        new Recipe('Big fat burger', 'A north indian dish',
         'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg',
         [
             new Ingredient('buns', 1),
             new Ingredient('french fries', 10)
         ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
