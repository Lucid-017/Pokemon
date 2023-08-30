import { useEffect, useState } from "react"
import Card from "./Card"
import { getPokemoDescription } from "../APi/api"

const Select =({pokemons})=>{
    const [pokenmonIndex,setPokemonIndex]=useState('1')
    const [description,setDescription]=useState('')

    const getPokemonDesc = async ()=>{
        const desc = await getPokemoDescription(pokenmonIndex)
        console.log('desc',desc)
        setDescription(desc)
      } 
    // we click options from our select and store the index
    const handleclick =(e)=>{
        setPokemonIndex(e.target.value)
        console.log('index',pokenmonIndex)
        // and also get our description
        getPokemonDesc()
    }
    // when the page loads get us the description of the first pokemon
    useEffect(()=>{
        getPokemonDesc(pokenmonIndex)
    },[pokenmonIndex])//change description when the value of our index changes

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
            <Card pokenmonIndex={pokenmonIndex} pokemonDescription={description}/>
        </div>
    )
}

export default Select