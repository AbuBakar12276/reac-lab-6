import React from 'react';
import './App.css';
import Profilecard from './Components/profilecard';
import Productcard from './Components/productcard';

function App() {
  return (
    <div className="App">
  
      <Profilecard name= "Abu Bakar" age= {19} occupation= "Student" location= "Karachi" />
      <Productcard image src= '81lMScOZ8zL.jpg' title= "Wireless Headphones" description= "Noise-cancelling, over-ear headphones" price= {60000}PKR />
    </div>
  );
}

export default App;
