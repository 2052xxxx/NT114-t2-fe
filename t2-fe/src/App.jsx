import './App.css';
import Header from './components/header/header.jsx';
import SubContent from './components/subContent/subContent';
import React from 'react';
import Login from './components/screen/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubContent/>
      <Login/>
    </div>
  );
}

export default App;
