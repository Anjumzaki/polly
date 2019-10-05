import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './Components/MyNav'
import Header from './Components/Header'
import About from './Components/About'
import Section1 from './Components/Section1'


function App() {

  return (
    <div className="App">
      <MyNav/>
     <Header/>
     <About/>
     <Section1/>
    </div>
  );
}

export default App;
