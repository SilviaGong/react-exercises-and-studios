import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink = "https://www.pinterest.com/joyousapron/_created/";
  let authorPhoto = "https://i.pinimg.com/280x280_RS/0f/cd/3d/0fcd3d8937ae93773ec9bcb931cf87d4.jpg";
  let authorName = "Joyous Apron";
  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Title</h1>
          <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
      </div >
    );
  }
}

export default RecipeDescription;