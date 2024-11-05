import React from 'react';
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
import * as S from './Login.styles.tsx';
import { ButtonsContainer, AdditionalText, AdditionalTextWithLines, SignUpLink } from './Login.styles.tsx';


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
      <S.LoginContainer>
        <ThemeProvider theme={login}>
          <Typography variant="h1">{loginScreenText.title}</Typography>
          <Typography variant="h5">{loginScreenText.subtitle_01}</Typography>
        </ThemeProvider>
        <Formik
          initialValues={{ ...initialValues }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            console.log(values);
            handleSubmit();
          }}
        >
          <S.LoginForm>
            <Form>
              <TextField name="email" label="Email"/>
              <TextField name="password" label="Password" type="password"/>
              <S.RestorePassword>
                <Typography fontSize="14px" fontFamily="Lato, sans-serif">{loginScreenText.subtitle_05}</Typography>
              </S.RestorePassword>
              <ButtonsContainer>
                <ButtonWrapper type="submit">{loginScreenText.title}</ButtonWrapper>
              </ButtonsContainer>
            </Form>
            <ThemeProvider theme={login}>
              <S.AdditionalTextWithLines>
                {loginScreenText.subtitle_02}
              </S.AdditionalTextWithLines>
            </ThemeProvider>
            <ButtonsContainer>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21.7448" cy="21.7448" r="21.7448" fill="white"/>
                <circle cx="21.7448" cy="21.7448" r="21.2448" stroke="#8E7AB5" strokeOpacity="0.85"/>
                <g clipPath="url(#clip0_101_2)">
                  <path
                    d="M35.6468 22.0051C35.6468 20.8647 35.5521 20.0326 35.3472 19.1697H22.022V24.3165H29.8436C29.686 25.5956 28.8344 27.5218 26.942 28.8162L26.9155 28.9885L31.1287 32.1779L31.4206 32.2064C34.1013 29.787 35.6468 26.2273 35.6468 22.0051Z"
                    fill="#4285F4"/>
                  <path
                    d="M22.022 35.5658C25.8539 35.5658 29.0708 34.333 31.4206 32.2065L26.942 28.8163C25.7436 29.633 24.1351 30.2031 22.022 30.2031C18.2689 30.2031 15.0835 27.7839 13.948 24.4399L13.7816 24.4538L9.40068 27.7669L9.34338 27.9225C11.6772 32.453 16.4711 35.5658 22.022 35.5658Z"
                    fill="#34A853"/>
                  <path
                    d="M13.9481 24.4399C13.6484 23.5769 13.475 22.6523 13.475 21.6969C13.475 20.7414 13.6484 19.8169 13.9323 18.9539L13.9244 18.7702L9.48855 15.4038L9.34341 15.4713C8.38152 17.3513 7.82959 19.4625 7.82959 21.6969C7.82959 23.9313 8.38152 26.0424 9.34341 27.9224L13.9481 24.4399Z"
                    fill="#FBBC05"/>
                  <path
                    d="M22.022 13.1907C24.687 13.1907 26.4847 14.3156 27.5097 15.2557L31.5151 11.434C29.0552 9.19961 25.8539 7.82812 22.022 7.82812C16.4711 7.82812 11.6772 10.9409 9.34338 15.4713L13.9323 18.954C15.0835 15.6101 18.2689 13.1907 22.022 13.1907Z"
                    fill="#EB4335"/>
                </g>
                <defs>
                  <clipPath id="clip0_101_2">
                    <rect width="27.8333" height="27.8333" fill="white" transform="translate(7.82812 7.82812)"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.5" cy="21.7448" r="21.7448" fill="white"/>
                <circle cx="22.5" cy="21.7448" r="21.2448" stroke="#8E7AB5" strokeOpacity="0.85"/>
                <g clipPath="url(#clip0_101_3)">
                  <path
                    d="M22.5 35.6615C30.186 35.6615 36.4167 29.4308 36.4167 21.7448C36.4167 14.0588 30.186 7.82812 22.5 7.82812C14.8141 7.82812 8.58337 14.0588 8.58337 21.7448C8.58337 29.4308 14.8141 35.6615 22.5 35.6615Z"
                    fill="#0177B5"/>
                  <path
                    d="M28.5886 14.7864H16.4115C16.1809 14.7864 15.9596 14.878 15.7965 15.0411C15.6334 15.2043 15.5417 15.4255 15.5417 15.6562V27.8333C15.5417 28.0639 15.6334 28.2852 15.7965 28.4483C15.9596 28.6114 16.1809 28.703 16.4115 28.703H28.5886C28.8193 28.703 29.0405 28.6114 29.2037 28.4483C29.3668 28.2852 29.4584 28.0639 29.4584 27.8333V15.6562C29.4584 15.4255 29.3668 15.2043 29.2037 15.0411C29.0405 14.878 28.8193 14.7864 28.5886 14.7864ZM19.8907 26.5286H17.7162V20.0051H19.8907V26.5286ZM18.8035 19.1353C18.5454 19.1353 18.2932 19.0588 18.0786 18.9155C17.8641 18.7721 17.6968 18.5683 17.5981 18.3299C17.4993 18.0915 17.4735 17.8292 17.5238 17.5761C17.5742 17.323 17.6984 17.0906 17.8809 16.9081C18.0634 16.7256 18.2959 16.6014 18.5489 16.551C18.802 16.5007 19.0643 16.5265 19.3027 16.6253C19.5411 16.724 19.7449 16.8912 19.8883 17.1058C20.0316 17.3204 20.1082 17.5726 20.1082 17.8306C20.1082 18.1767 19.9707 18.5085 19.726 18.7532C19.4813 18.9979 19.1495 19.1353 18.8035 19.1353ZM27.2839 26.5286H25.1095V22.1796C25.1095 21.8186 24.6224 21.5273 24.0222 21.5273C23.1524 21.5273 22.935 22.6884 22.935 23.0494V26.5286H20.7605V20.0051H22.935V21.5273C22.935 20.44 23.9091 20.0051 25.1095 20.0051C25.6862 20.0051 26.2393 20.2342 26.647 20.642C27.0548 21.0498 27.2839 21.6029 27.2839 22.1796V26.5286Z"
                    fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_101_3">
                    <rect width="27.8333" height="27.8333" fill="white" transform="translate(8.58337 7.82812)"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.2552" cy="21.7448" r="21.7448" fill="white"/>
                <circle cx="22.2552" cy="21.7448" r="21.2448" stroke="#8E7AB5" strokeOpacity="0.85"/>
                <path
                  d="M27.2836 9.34289C27.9298 8.66076 28.4225 7.86844 28.7334 7.01142C29.0444 6.1544 29.1674 5.24956 29.0954 4.34888C27.1116 4.49555 25.2701 5.35012 23.9676 6.72847C23.3439 7.38908 22.8712 8.1576 22.5776 8.98852C22.284 9.81945 22.1755 10.6959 22.2583 11.5659C23.226 11.5733 24.1826 11.3767 25.054 10.9912C25.9254 10.6057 26.6883 10.0417 27.2836 9.34289ZM31.591 20.9904C31.6024 19.7908 31.9474 18.6136 32.5934 17.57C33.2394 16.5264 34.165 15.6508 35.283 15.0257C34.5775 14.0946 33.6447 13.3269 32.5588 12.7834C31.4729 12.2399 30.2637 11.9356 29.0271 11.8947C26.3606 11.6442 23.8992 13.3193 22.4805 13.3193C21.0618 13.3193 19.062 11.926 16.8399 11.9573C15.3873 12.0011 13.9718 12.389 12.7316 13.0832C11.4914 13.7774 10.4688 14.7541 9.76354 15.9181C6.75522 20.7086 8.99437 27.8317 12.0027 31.6985C13.3701 33.5928 15.0794 35.7376 17.3356 35.6593C19.5919 35.581 20.3269 34.3756 22.942 34.3756C25.5572 34.3756 26.3606 35.6593 28.5827 35.6123C30.8047 35.5654 32.3772 33.6711 33.813 31.7768C34.8301 30.4015 35.6246 28.8987 36.1718 27.3151C34.8172 26.7859 33.6615 25.905 32.8474 24.781C32.0333 23.657 31.5965 22.3392 31.591 20.9904Z"
                  fill="black"/>
              </svg>
            </ButtonsContainer>
            <S.AdditionalText>
              {loginScreenText.subtitle_03}<SignUpLink> {loginScreenText.subtitle_04}</SignUpLink>
            </S.AdditionalText>
          </S.LoginForm>
        </Formik>
      </S.LoginContainer>
    </Background>
  );
}

export default Login;