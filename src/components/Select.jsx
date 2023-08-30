import { useState } from "react"
import Card from "./Card"
import { getPokemoDescription } from "../APi/api"

const Select =({pokemons})=>{
    const [pokenmonIndex,setPokemonIndex]=useState('1')
    const [pokemonDescription,setPokemonDescription]=useState('')
    // for each pokemon we click on we want to get the details
    // const description= getPokemoDescription(pokenmonIndex)
    const handleclick =(e)=>{
        setPokemonIndex(e.target.value)
        // setPokemonDescription(description)
        console.log(pokenmonIndex)
    }
    return(
        <div>
            <select name="Select pokemon" onChange={handleclick}>
                {
                    // we're creating an index system to be able to work with identifying these pokemon apis
                    pokemons.map((pokemon,idx)=>{
                        return(
                            <option key={idx} 
                            value={idx + 1} //represnt the index, starting from 1
                            >
                                {pokemon.name}
                            </option>
                        )
                    })
                }
            </select>
            <Card pokenmonIndex={pokenmonIndex} pokemonDescription={pokemonDescription}/>
        </div>
    )
}

export default Select