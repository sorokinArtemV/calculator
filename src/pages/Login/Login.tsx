﻿import React from 'react';
import styles from '../Login/Login.module.scss';
import { Form, Formik } from 'formik';
import { loginValidationSchema } from './helpers/login-validation-schema.ts';
import Background from '../../components/Background/Background.tsx';
import { loginScreenText } from '../../../data/loginData.ts';
import { ThemeProvider, Typography } from '@mui/material';
import { login } from '../../themes/Themes.tsx';
import TextField from '../../components/FormsUI/TextFieldWrapper/TextFieldWrapper.tsx';
import Button from '../../components/FormsUI/ButtonWrapper/ButtonWrapper.tsx';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Background>
      <ThemeProvider theme={login}>
        <Typography variant="h1" className={styles.title}>{loginScreenText.title}</Typography>
        <Typography variant="h5">{loginScreenText.subtitle}</Typography>
      </ThemeProvider>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className={styles.form}>
          <TextField
            name="email"
            label="Email"
          />
          <TextField
            name="password"
            label="Password"
          />
          <Button type="submit">Sign in</Button>
        </Form>
      </Formik>
    </Background>
  );
}

export default Login;