export interface IButtonWrapperProps {
  children: React.ReactNode;

  [key: string]: any;
}

export interface IConfigButtonProps {
  variant: 'contained' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'info' | 'warning' | 'error' | 'success';
  fullWidth: boolean;
  onClick: ({ children, ...otherProps }: IButtonWrapperProps) => void;
}