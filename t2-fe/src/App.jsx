import './App.css';
import Header from './components/header/header.jsx';
import SubContent from './components/subContent/subContent';
import React from 'react';
import Login from './components/screen/Login/Login';
import Signup from './components/screen/Signup/Signup'
import SignupWE from './components/screen/SignupWE/SignupWE'
import Page from './MainAfterSignin/Page/Page';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubContent/>
    </div>
  );
}

export default App;
