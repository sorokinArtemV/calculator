import React from 'react';
import styles from './Background.module.scss';

interface IBackgroundProps {
  children: React.ReactNode;
}

function Background({ children }: IBackgroundProps) {
  return (
    <main className={styles.main}>
      <img className={styles.main__imageTop}
           src="../../../src/assets/Onboarding/Top-Cloud.png"
           alt=""
           width="540" loading="lazy"
      />
      <div className={styles.content}>
        {children}
      </div>
      <img className={styles.main__imageBot}
           src="../../../src/assets/Onboarding/Bottom-cloud.png"
           alt=""
           width="540" loading="lazy"
      />
    </main>
  );
}

export default Background;