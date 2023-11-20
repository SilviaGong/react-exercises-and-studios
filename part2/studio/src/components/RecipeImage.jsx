// components/RecipeImage.jsx
import React from 'react';
import recipeData from './recipe.json';

function RecipeImage() {
  return (
    <div>
      {recipeData.map((recipe, key) => (
        <img key={key} src={recipe.recipeImage} className="recipeImage" alt={recipe.recipeName} />
      ))}
    </div>
  );
}

// function RecipeImage() {
//   const recipesImages = recipeData.map((recipe, key) => (
//     <img key={key} src={recipe.recipeImage} className="recipeImage" alt={recipe.recipeName} />
//   ));

//   return (
//     <div>
//       {recipesImages}
//     </div>
//   );
// }
export default RecipeImage;
