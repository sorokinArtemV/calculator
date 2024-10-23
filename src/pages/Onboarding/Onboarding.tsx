import React from 'react';
import styles from './Onboarding.module.scss';
import { ThemeProvider, Typography } from '@mui/material';
import { heading } from '../../themes/Typography.tsx';

function Onboarding() {
  return (

    <header className={styles.header}>
      <img className={styles.header__imageTop}
           src="../../../src/assets/Onboarding/Top-Cloud.png"
           alt=""
           width="412" loading="lazy"
      />
      <ThemeProvider theme={heading}>
        <Typography variant="h5" color="textPurple" className={styles.header__btn}>Skip</Typography>
        <img className={styles.header__splash}
             src="../../../src/assets/Onboarding/Splash-1.png"
             alt=""
             width="" height="" loading="lazy"
        />
        <Typography variant="h1" color="purpleContrast">
          Effortless Tipping
        </Typography>

        <Typography variant="subtitle1" color="primaryGray">
          Calculate tips quickly and accurately With just a few taps
        </Typography>
      </ThemeProvider>
      <img className={styles.header__imageBot}
           src="../../../src/assets/Onboarding/Bottom-cloud.png"
           alt=""
           width="587" loading="lazy"
      />
    </header>
  );
}

export default Onboarding;