import React from "react";
import { List } from "./Styles";

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(recipe => (
        <div key={recipe.name} data-testid="recipe" className="recipes">
          <span className="recipe">Recipe: {recipe.name}</span>
          <span className="course">Course: {recipe.course}</span>
        </div>
      ))}
    </List>
  );
};

export default RecipeList;
