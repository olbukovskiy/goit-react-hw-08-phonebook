import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from 'redux/user/operations';
import { selectIsLoading } from 'redux/user/selectors';

const initialValues = {
  password: '',
  email: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const submitHandler = ({ email, password }, actions) => {
    dispatch(logInUser({ email, password }));
    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
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
            Password
            <Field
              type="password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </label>
          <button type="submit" disabled={isLoading}>
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
};
