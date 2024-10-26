import React from 'react';
import styles from '../../pages/Onboarding/Onboarding.module.scss';

interface IBackgroundProps {
  children: React.ReactNode;
}

function Background({ children }: IBackgroundProps) {
  return (
    <main>
      <img className={styles.header__imageTop}
           src="../../../src/assets/Onboarding/Top-Cloud.png"
           alt=""
           width="540" loading="lazy"
      />
      {children}
      <img className={styles.header__imageBot}
           src="../../../src/assets/Onboarding/Bottom-cloud.png"
           alt=""
           width="540" loading="lazy"
      />
    </main>
  );
}

export default Background;