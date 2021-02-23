import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Carousel from "./components/Slider/slider"
import Container from './components/Container/Container'
import Header1 from'./components/Header1/Header1'
import Footer from'./components/Footer/Footer'
import Chat from './components/Chat/Chat'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Container/>
      <Header1/>
      <Footer/>
      <Chat/>


    </div>
  );
}

export default App;
