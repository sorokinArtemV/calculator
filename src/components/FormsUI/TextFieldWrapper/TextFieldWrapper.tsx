import { TextField } from '@mui/material';
import { useField } from 'formik';
import { IConfigTextField, ITextFieldWrapperProps } from './TextFieldWrapper.interface.ts';
import styles from './TextFieldWrapper.module.scss';


const TextFieldWrapper = ({ name, placeholder, ...otherProps }: ITextFieldWrapperProps) => {

  const [field, meta] = useField(name);
  const configTextField: IConfigTextField = {
    ...field,
    ...otherProps,
    placeholder: placeholder,
    fullWidth: true,
    variant: 'outlined',
    color: 'secondary',
    size: 'small',
    sx: {
      '& .MuiOutlinedInput-root': {
        // borderRadius: '8px',
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--primary-color)',
        },
        '& .MuiInputBase-input': {
          // padding: '10px',
        },
      },
    },
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }


  return (
    <div className={styles.textFieldWrapper}>
      <TextField  {...configTextField}/>
    </div>
  );
};

export default TextFieldWrapper;

