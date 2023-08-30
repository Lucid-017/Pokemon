import { useEffect } from "react"
import { getPokenmonSpriteUrl } from "../APi/api"

const Card =({pokenmonIndex,pokemonDescription})=>{
  
    useEffect(()=>{
        getPokenmonSpriteUrl() 
    },[])
    return(
        <div>
            <div>
                <img src={getPokenmonSpriteUrl(pokenmonIndex)}/>
            </div>
            <p>
              {pokemonDescription}
            </p>
        </div>
    )
}

export default Card