import styles from "./Ingredients.module.css"

export default function RecipeIngredients() {
  const ingredients = ['Ingredient 1', 'Ingredient 2', 'Ingredient 3', 'Ingredient 4', 'Ingredient 5']
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        {/* {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))} */}
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
}