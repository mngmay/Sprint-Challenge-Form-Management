import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <ul className="recipe-list">
      {recipes.map(recipe => (
        <li>
          Recipe: {recipe.name} Course: {recipe.course}
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
