import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { IButtonWrapperProps, IConfigButtonProps } from './ButtonWrapper.interface.ts';
import { loginScreen } from '../../../themes/Themes.tsx';

export function ButtonWrapper({ children, ...otherProps }: IButtonWrapperProps) {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton: IConfigButtonProps = {
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <ThemeProvider theme={loginScreen}>
      <Button {...configButton} onClick={handleSubmit}>
        {children}
      </Button>
    </ThemeProvider>
  );
}
