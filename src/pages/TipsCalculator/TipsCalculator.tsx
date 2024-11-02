import Background from '../../components/Background/Background.tsx';
import { Form, Formik } from 'formik';
import { loginValidationSchema } from '../Login/helpers/login-validation-schema.ts';
import TextField from '../../components/FormsUI/TextFieldWrapper/TextFieldWrapper.tsx';
import { Typography } from '@mui/material';
import { ButtonWrapper } from '../../components/FormsUI/ButtonWrapper/ButtonWrapper.tsx';
import React from 'react';


function TipsCalculator() {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Background>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
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

export default TipsCalculator;