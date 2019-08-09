import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.name} data-testid="recipe">
          Recipe: {recipe.name} Course: {recipe.course}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
