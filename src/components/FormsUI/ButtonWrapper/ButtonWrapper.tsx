import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { IButtonWrapperProps, IConfigButtonProps } from './ButtonWrapper.interface.ts';
import { loginScreen } from '../../../themes/Themes.tsx';

function ButtonWrapper({ children, ...otherProps }: IButtonWrapperProps) {
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
    <Button {...configButton} onClick={handleSubmit}>
      {children}
    </Button>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={loginScreen}>
      <ButtonWrapper>
        Submit
      </ButtonWrapper>
    </ThemeProvider>
  );
}