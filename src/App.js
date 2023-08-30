import Select from "./components/Select";
import './index.css'
// import api functions
import {getPokemonList} from './APi/api'
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [pokemons, setPokemons]= useState([])
 
  const getInfo = async ()=>{
    const list = await getPokemonList()
    console.log('list',list)
    setPokemons(list)
  } 
  useEffect(()=>{getInfo()},[])

  return (
    <div className="App">
      <header className="App-header">
        <a>search bar</a>
        <Select pokemons={pokemons}/>
     
      </header>
    </div>
  );
}

export default App;
