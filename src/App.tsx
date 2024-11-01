import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding/Onboarding.tsx';
import TipsCalculator from './pages/TipsCalculator/TipsCalculator.tsx';
import React from 'react';
import PageNotFound from './components/PageNotFound/PageNotFound.tsx';
import Login from './pages/Login/Login.tsx';

function App() {

  const isOnboardingComplete = localStorage.getItem('onboardingComplete') === 'true';
  const isLoginComplete = localStorage.getItem('loginComplete') === 'true';

  console.log('Onboarding Complete:', isOnboardingComplete);
  console.log('Login Complete:', isLoginComplete);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route index element={isOnboardingComplete && isLoginComplete ? <TipsCalculator/> : <Onboarding/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="tips-calculator" element={<TipsCalculator/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
