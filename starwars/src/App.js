import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js"
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [namesState, setName]= useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
    axios.get("https://swapi.co/api/people/")
     .then(res => {
         console.log("the data",res.data);
          setName(res.data.results);
          })
       .catch(error => console.log(error))
   }, [])

  return (
    <div className="App">

      <h1 className="Header">React Wars</h1>

      <section className="card-container">

        {namesState.map(character=><CharacterCard info={character}/>)}
     
     </section>
    </div>
  );
}

export default App;
