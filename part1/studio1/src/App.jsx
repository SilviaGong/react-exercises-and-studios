import { useState } from 'react'
import './App.css';
import RecipeDescription from "../../studio1/src/components/Description.jsx";
import RecipeIngredients from "../src/components/Ingredients.jsx"
import RecipePhoto from "../src/components/Photos.jsx"

function App() {

  return (
    <>
      <div className="App">
        <div>
          <RecipePhoto />
          <div>
            <RecipeDescription />
            <RecipeIngredients />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
