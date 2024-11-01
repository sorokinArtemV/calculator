import { createTheme } from "@mui/material";

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    textPurple?: PaletteOptions['primary'];
    purpleContrast?: PaletteOptions['primary'];
    primaryGray?: PaletteOptions['primary'];
  }

  interface Palette {
    textPurple: Palette['primary'];
    purpleContrast: Palette['primary'];
    primaryGray: Palette['primary'];
  }
}

export const onboarding = createTheme({
  palette: {
    textPurple: {
      main: '#6948AA',
    },
    purpleContrast: {
      main: '#694C9F',
    },
    primaryGray: {
      main: '#3E3B3B',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      fontFamily: 'Lato, sans-serif',
      marginTop: '12px',
      marginBottom: '35px',
      letterSpacing: '-0.32px',
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 400,
      fontFamily: 'Lato, sans-serif',
      letterSpacing: '-0.32px',
      alignSelf: 'flex-end',
    },
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 400,
      fontFamily: 'Lato, sans-serif',
      letterSpacing: '-0.32px',
      maxWidth: '300px',
      textAlign: 'center',
    },
  },
});

export const login = createTheme({
  typography: {
    h1: {
      marginTop: '100px',
      fontSize: '32px',
      fontFamily: 'Lato, sans-serif',
      fontWeight: '600',
      color: 'var(--primary-gray)',
    },
    h5: {
      marginTop: '15px',
      fontSize: '18px',
      fontFamily: 'Lato, sans-serif',
      fontWeight: '500',
      color: 'var(--accent-gray)',
    },
  }
});

export const loginScreen = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '600',
          borderRadius: '8px',
          backgroundColor: '#8E7AB5',
          '&:hover': {
            backgroundColor: '#6C5A9A',
          },
        },
      },
    },
  },
});