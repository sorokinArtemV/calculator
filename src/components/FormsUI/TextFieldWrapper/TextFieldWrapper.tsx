import { useField } from 'formik';
import { IConfigTextField, ITextFieldWrapperProps } from './helpers/TextFieldWrapper.interface.ts';
import styles from './TextFieldWrapper.module.scss';
import { TextField } from '@mui/material';
import EyeIcon from '../../Icons/EyeIcon/EyeIcon.tsx';
import React, { useReducer } from 'react';
import { initialState, reducer } from './helpers/textfieldReducer.ts';
import { TextFieldConstants } from './helpers/TextFieldConstants.ts';

const TextFieldWrapper = ({ name, placeholder, type, ...otherProps }: ITextFieldWrapperProps) => {
  const [field, meta] = useField(name);
  const configTextField: IConfigTextField = {
    ...field,
    ...otherProps,
    placeholder,
    fullWidth: true,
    variant: 'outlined',
    color: 'secondary',
    size: 'small',
    position: 'relative',
  };

  const [{ isHeld }, dispatch] = useReducer(reducer, initialState);

  function handleMouseDown(event: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) {
    event.preventDefault();
    dispatch({ type: 'hold' });
  }

  function handleMouseUp(event: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) {
    event.preventDefault();
    dispatch({ type: 'release' });
  }

  const isPassword = type === TextFieldConstants.Password;

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <div className={styles.textFieldWrapper}>
      <TextField {...configTextField} type={isPassword && isHeld ? TextFieldConstants.Text : type}/>
      {isPassword && (
        <EyeIcon
          isHeld={isHeld}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}

        />
      )}
    </div>
  );
};

export default TextFieldWrapper;
