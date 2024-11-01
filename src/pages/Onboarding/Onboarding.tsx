import React, { ReactElement, useEffect, useState } from 'react';
import styles from './Onboarding.module.scss';
import { ThemeProvider, Typography } from '@mui/material';
import { onboarding } from '../../themes/Themes.tsx';
import { navigation } from '../../constants/navigation.ts';
import { useNavigate, Link } from 'react-router-dom';
import { onboardingScreenText } from '../../../data/onboardingData.ts';
import { imageUrls } from './helpers/onboardingConstants.ts';

function Onboarding() {

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const navigate = useNavigate();
  const isLastImage = activeIndex === imageUrls.length - 1;

  function handleShowNextImage() {
    if (activeIndex < imageUrls.length - 1) {
      setActiveIndex(index => index + 1);
      setProgress(0);
    } else {
      localStorage.setItem('onboardingComplete', 'true');
      navigate(navigation.login);
    }

  }

  function handleSetActiveImage(index: number) {
    setActiveIndex(index);
    setProgress(0);
  }

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          if (activeIndex < imageUrls.length - 1) {
            setActiveIndex((index) => index + 1);
            return 0;
          }

          const timeout = setTimeout(() => {
            navigate(navigation.login);
          }, 100);
          return prevProgress;
        }

        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeIndex, navigate]);


  return (
    <header className={styles.header}>
      <progress className={styles.header__progress} id="file" max="100" value={progress}></progress>
      <img className={styles.header__imageTop}
           src="../../../src/assets/Onboarding/Top-Cloud.png"
           alt=""
           width="540" loading="lazy"
      />
      <ThemeProvider theme={onboarding}>
        <Link
          to={navigation.login}
          className={styles.header__link}
          onClick={() => localStorage.setItem('onboardingComplete', 'true')}>Skip</Link>
        <div className={styles.imageContainer}>
          {imageUrls.map((url: string) =>
            <img className={styles.imageContainer__splash}
                 key={url} src={url} alt="Onboarding image"
                 width="370" height="250" loading="lazy"
                 style={{ translate: `${-100 * activeIndex}%` }}
            />)}
        </div>
        <Typography variant="h1" color="purpleContrast">
          {onboardingScreenText.at(activeIndex)?.title}
        </Typography>

        <Typography variant="subtitle1" color="primaryGray">
          {onboardingScreenText.at(activeIndex)?.subtitle}
        </Typography>
      </ThemeProvider>
      <div className={styles.dotContainer}>
        {imageUrls.map((_, index: number): ReactElement => (
          <div key={index}
               className={`${styles.dot} ${activeIndex === index ? styles.dotActive : ''}`}
               onClick={() => handleSetActiveImage(index)}
          ></div>
        ))}
        {!isLastImage && (
          <button className={styles.dotContainer__btnArrow} type="button" onClick={handleShowNextImage}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M18.9925 38C29.49 38 38 29.4934 38 19C38 8.50659 29.49 0 18.9925 0C8.75052 0 0.400553 8.09738 0 18.2371H22.8263L13.3042 11.7009C12.9002 11.4137 12.6767 11.029 12.6818 10.6297C12.6868 10.2304 12.92 9.84841 13.3312 9.56605C13.7423 9.2837 14.2985 9.12354 14.8799 9.12007C15.4614 9.1166 16.0215 9.27009 16.4398 9.5475L29.745 18.6848C29.9507 18.8259 30.1135 18.9936 30.224 19.1783C30.3393 19.3641 30.397 19.562 30.397 19.76V19.7661C30.397 19.9648 30.3398 20.1616 30.2286 20.345C30.1175 20.5285 29.9547 20.6951 29.7495 20.8352L16.4442 29.9725C16.026 30.2499 15.4658 30.4034 14.8844 30.4C14.3029 30.3965 13.7468 30.2363 13.3356 29.954C12.9245 29.6716 12.6912 29.2897 12.6862 28.8904C12.6811 28.4911 12.9047 28.1064 13.3086 27.8192L22.8263 21.2829H0.120753C1.24887 30.6999 9.26783 38 18.9925 38Z"
                    fill="#8E7AB5"/>
            </svg>
          </button>)}
        {isLastImage && (
          <button className={styles.dotContainer__btnText} type="button" onClick={handleShowNextImage}>
            {onboardingScreenText.at(0)?.buttonText}
          </button>
        )}
      </div>
      <img className={styles.header__imageBot}
           src="../../../src/assets/Onboarding/Bottom-cloud.png"
           alt=""
           width="540" loading="lazy"
      />
    </header>
  );
}

export default Onboarding;

// <button className={styles.dotContainer__btn} type="button" onClick={handleShowNextImage}
//         style={{ fontSize: '14px' }}>
//   {onboardingScreenText.at(0)?.buttonText}
// </button>