import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import FormikRegistrationForm from "../components/RegistrationForm";
import RecipeList from "../components/RecipeList";

describe("<FormikRegistrationForm />", () => {
  it("button should render submit", () => {
    const registration = render(<FormikRegistrationForm />);
    const submitBtn = registration.queryByTestId("submit").innerHTML;
    const submitText = text => {
      return text === "Submit";
    };
    expect(submitText(submitBtn)).toBe(true);
  });

  it("Registration form should clear after submit", () => {
    const registration = render(<FormikRegistrationForm />);
    const username = registration.queryByTestId("username");
    const password = registration.queryByTestId("password");
    const submitBtn = registration.queryByTestId("submit");

    username.value = "username";
    password.value = "password1233455";

    expect(username.value).toBe("username");
    expect(password.value).toBe("password1233455");

    fireEvent.click(submitBtn);
    expect(username.value).toBe("");
    expect(password.value).toBe("");
  });
});
