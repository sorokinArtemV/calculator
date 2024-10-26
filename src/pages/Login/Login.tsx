import React from 'react';
import styles from '../Onboarding/Onboarding.module.scss';
import { Form, Formik } from 'formik';
import { loginValidationSchema } from './helpers/login-validation-schema.ts';
import Background from '../../components/Background/Background.tsx';

function Login() {

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Background>
      <h1>Sign in</h1>
      <h3>Hi ! Welcome back, you have been missed</h3>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>

        </Form>
      </Formik>
    </Background>
  );
}

export default Login;