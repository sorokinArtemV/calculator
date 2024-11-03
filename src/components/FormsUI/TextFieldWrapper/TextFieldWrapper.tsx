import { useField } from 'formik';
import { IAction, IConfigTextField, IState, ITextFieldWrapperProps } from './TextFieldWrapper.interface.ts';
import styles from './TextFieldWrapper.module.scss';
import { TextField } from '@mui/material';
import EyeIcon from '../../Icons/EyeIcon/EyeIcon.tsx';
import { useReducer } from 'react';


const initialState: IState = {
  isHeld: false,
};

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'hold':
      return { ...state, isHeld: true, };
    case 'release':
      return { ...state, isHeld: false, };
    default:
      throw new Error("Unrecognized action type: " + action.type);
  }
}

const TextFieldWrapper = ({ name, placeholder, type, ...otherProps }: ITextFieldWrapperProps) => {

  const [field, meta] = useField(name);
  const configTextField: IConfigTextField = {
    ...field,
    ...otherProps,
    type: type || 'text',
    placeholder: placeholder,
    fullWidth: true,
    variant: 'outlined',
    color: 'secondary',
    size: 'small',
    position: 'relative',
  };

  const [{ isHeld }, dispatch] = useReducer(reducer, initialState);

  const isPassword = type === 'password';

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <div className={styles.textFieldWrapper}>
      <TextField  {...configTextField} type={type}/>
      {isPassword && <EyeIcon isHeld={} onMouseDown={} onMouseUp={}/>}
    </div>
  );
};

export default TextFieldWrapper;

