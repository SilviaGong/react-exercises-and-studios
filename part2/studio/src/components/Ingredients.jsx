// components/IngredientList.jsx
import React from 'react';
import recipeData from './recipe.json';


function IngredientList() {

  const recipes = recipeData.map((recipe, id) => (
    <li key={id}>
      {recipe.ingredients.map((ingredient, id) => (
        <li key={id}>{ingredient}</li>
      ))}
    </li>
  ));

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {recipes}
      </ul>
    </div>
  );

}


export default IngredientList;


