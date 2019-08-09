import React from "react";
import FormikRegistrationForm from "./components/RegistrationForm";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <FormikRegistrationForm />
      </div>
    );
  }
}

export default App;
