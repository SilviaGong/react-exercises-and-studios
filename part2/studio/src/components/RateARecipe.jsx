let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe() {
  const GiveRating = (props) => {
    return <h3>{stars[props.rating - 1]}</h3>;
  }
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
