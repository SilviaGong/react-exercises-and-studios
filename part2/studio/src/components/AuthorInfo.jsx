// components/AuthorInfo.jsx
import React from 'react';
import './styling.css';
import recipeData from './recipe.json';


function AuthorInfo() {
  const recipeAuthorImage = recipeData.map((recipe, key) => (
    <div key={key} >{recipe.author}</div>
  ));

  const recipeAuthor = recipeData.map((recipe, key) => (
    <img key={key} src={recipe.authorImage} className="authorImage" alt={recipe.author} />
  ));

  const recipeWebsite = recipeData.map((recipe, key) => (
    <a key={key} href={recipe.website}>主页</a>
  ));

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;


//import styles.css
//import json file for author info
//image, name, website
//css for styling image
