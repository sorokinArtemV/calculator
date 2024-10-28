import { TextFieldVariants } from '@mui/material';

export interface ITextFieldWrapperProps {
  name: string;
  label?: string;
  placeholder?: string;
  otherProps?: object;
}

export interface IConfigTextField {
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  placeholder?: string;
  variant?: TextFieldVariants;
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'error' | 'success';
  size?: 'medium' | 'small';
  sx?: object;
}