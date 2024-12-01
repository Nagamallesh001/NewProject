import React, { useState } from 'react'
import MainPage from './components/Main_Page/MainPage'
import Login from './components/registerForm/loginPage'
import './App.css'

const App = () => {const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div>
      {isLoggedIn ? <MainPage /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
    };

export default App