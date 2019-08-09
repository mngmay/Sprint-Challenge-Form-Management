import React from "react";
import axios from "axios";
import FormikRegistrationForm from "./components/RegistrationForm";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    passwords: [],
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
        console.log("Recipes State", this.state.recipes);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <FormikRegistrationForm users={this.state.users} />
      </div>
    );
  }
}

export default App;
