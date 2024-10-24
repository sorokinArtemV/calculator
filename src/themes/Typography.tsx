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

export const heading = createTheme({
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


