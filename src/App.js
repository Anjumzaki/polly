import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './Components/MyNav'
import Header from './Components/Header'
import About from './Components/About'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Section5 from './Components/Section5'
import Section6 from './Components/Section6'



import Footer from './Components/Footer'




function App() {

  return (
    <div className="App">
      <MyNav/>
     <Header/>
     <About/>
     <Section1/>
     <Section5/>

     <Section4/>
     <Section6/>
     <Section2/>
     <Section3/>
     <Footer/>
    </div>
  );
}

export default App;
