// components/RecipeName.jsx
import React from 'react';
import recipeData from './recipe.json';

function RecipeName() {
  return (
    <div>
      {recipeData.map((recipe, key) => (
        <h1 key={key}>{recipe.name}</h1>
      ))}
    </div>
  );
}


// function RecipeName() {
//   const recipesName = recipeData.map((recipe, key) => (
//     <h1 key={key}>{recipe.name}</h1>
//   ));
//   return <div>{recipesName}</div>;
// }


export default RecipeName;
