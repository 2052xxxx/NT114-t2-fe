import './App.css';
import Header from './components/header/header.jsx';
import SubContent from './components/subContent/subContent';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubContent/>
      <Router>
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
