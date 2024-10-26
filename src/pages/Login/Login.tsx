import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>Onboarding</div>
  );
}

export default Login;