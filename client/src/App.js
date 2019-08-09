import React from "react";
import axios from "axios";
import FormikRegistrationForm from "./components/RegistrationForm";
import RecipeList from "./components/RecipeList";
import "./App.css";

class App extends React.Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(recipes => {
        recipes.data.forEach(recipe =>
          this.setState({ recipes: [...this.state.recipes, recipe] })
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Registration Form</h1>
        <FormikRegistrationForm />
        <h1>Recipe List</h1>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
