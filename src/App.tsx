import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding/Onboarding.tsx';
import TipsCalculator from './pages/TipsCalculator/TipsCalculator.tsx';
import React from 'react';
import PageNotFound from './components/PageNotFound/PageNotFound.tsx';
import Login from './pages/Login/Login.tsx';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Onboarding/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="tips-calculator" element={<TipsCalculator/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
