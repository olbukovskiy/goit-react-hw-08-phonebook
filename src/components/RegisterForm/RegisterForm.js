import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "redux/user/operations";
import { selectIsLoading } from "redux/user/selectors";

import { Container } from "components/AppBar/AppBar.styled";
import { AddBtn } from "components/AddContact/AddContact.styled";

const initialValues = {
  name: "",
  password: "",
  email: "",
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleSubmit = ({ name, password, email }, actions) => {
    dispatch(registerUser({ name, email, password }));
    actions.resetForm();
  };
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            Email
            <Field
              type="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </label>
          <label>
            Login
            <Field
              type="text"
              name="name"
              required
              placeholder="Enter your login"
            />
          </label>
          <label>
            Password
            <Field
              type="password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </label>
          <AddBtn type="submit" disabled={isLoading}>
            Register
          </AddBtn>
        </Form>
      </Formik>
    </Container>
  );
};
