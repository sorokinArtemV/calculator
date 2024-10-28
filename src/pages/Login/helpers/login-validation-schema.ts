import * as Yup from 'yup';
import { errorsText } from '../../../../data/loginData.ts';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(errorsText.invalidEmail)
    .required(errorsText.requiredEmail)
    .max(50),
  password: Yup.string().required(errorsText.invalidPassword),
});