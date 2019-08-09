import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import FormikRegistrationForm from "../components/RegistrationForm";

describe("<FormikRegistrationForm />", () => {
  it("should render Registration Form", () => {
    const registration = render(<FormikRegistrationForm />);
    expect(registration.getByText(/registration form/i));
  });

  it("Registration form should clear after submit", () => {
    const registration = render(<FormikRegistrationForm />);
    const username = registration.queryByTestId("username").innerHTML;
    const password = registration.queryByTestId("password").innerHTML;
    const ballText = text => {
      return text === "Ball";
    };
    expect(ballText(ball)).toBe(true);
  });
});
