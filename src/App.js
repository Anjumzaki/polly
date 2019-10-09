import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './Components/MyNav'
import Header from './Components/Header'
import About from './Components/About'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Footer from './Components/Footer'




function App() {

  return (
    <div className="App">
      <MyNav/>
     <Header/>
     <About/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Footer/>
    </div>
  );
}

export default App;
