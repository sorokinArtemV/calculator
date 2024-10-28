interface IOnboardingScreenTextInterface {
  title: string;
  subtitle: string;
  buttonText?: string;
}

export const onboardingScreenText: IOnboardingScreenTextInterface[] = [
  {
    title: 'Effortless Tipping',
    subtitle: 'Calculate tips quickly and accurately with just a few taps',
    buttonText: 'Get Started',
  },
  {
    title: 'Money Management',
    subtitle: 'Manage your money and reach your goals with ease.',
  },
  {
    title: 'Cool and Engaging',
    subtitle: 'Discover new features, and enhance your experience with every tap',
  },
];
