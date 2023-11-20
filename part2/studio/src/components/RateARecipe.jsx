// components/RateARecipe.jsx
import React from 'react';

let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating(props) {
  return <h3>{props.rating >= 1 && props.rating <= 5 ? stars[props.rating - 1] : null}</h3>;
}

function RateARecipe() {
  return (
    <div>
      <GiveRating rating={4} />
    </div>
  );
}

export default RateARecipe;


//conditional to render stars based on a number provided in App.js 