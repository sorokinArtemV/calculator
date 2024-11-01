import React from 'react';
import styles from '../Login/Login.module.scss';
import { Form, Formik } from 'formik';
import { loginValidationSchema } from './helpers/login-validation-schema.ts';
import Background from '../../components/Background/Background.tsx';
import { loginScreenText } from '../../../data/loginData.ts';
import { ThemeProvider, Typography } from '@mui/material';
import { login } from '../../themes/Themes.tsx';
import TextField from '../../components/FormsUI/TextFieldWrapper/TextFieldWrapper.tsx';
import { ButtonWrapper } from '../../components/FormsUI/ButtonWrapper/ButtonWrapper.tsx';
import { useNavigate } from 'react-router-dom';
import { navigation } from '../../constants/navigation.ts';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem('loginComplete', 'true');
    navigate(navigation.tipsCalculator);
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
          handleSubmit();
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
          <Typography variant="h5" sx={{
            alignSelf: 'flex-end',
            fontSize: '14px',
            color: 'var(--primary-color)',
            fontWeight: '500',
            marginBottom: '30px',
            fontFamily: 'Lato, sans-serif',
            cursor: 'pointer',
            boxShadow: '0 3px 0px -2px var(--light-purple)',
          }}>
            Forgot Password?
          </Typography>
          <ButtonWrapper type="submit">Sign in</ButtonWrapper>
        </Form>
      </Formik>
    </Background>
  );
}

export default Login;