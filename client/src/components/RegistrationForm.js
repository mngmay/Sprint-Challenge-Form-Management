import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const RegistrationForm = ({ errors, touched, values, status }) => {
  return (
    <Form>
      <Field
        type="text"
        name="username"
        placeholder="Username"
        data-testid="username"
      />
      {touched.username && errors.username && (
        <p className="error">{errors.username}</p>
      )}

      <Field
        type="password"
        name="password"
        placeholder="Password"
        data-testid="password"
      />
      {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
      )}

      <button type="submit" data-testid="submit">
        Submit
      </button>
    </Form>
  );
};

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(`http://localhost:5000/api/register`, values)
      .then(res => {
        console.log("res data", res.data);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(RegistrationForm);

export default FormikRegistrationForm;
