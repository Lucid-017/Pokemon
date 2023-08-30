import { useEffect } from "react"
import { getPokemoDescription, getPokenmonSpriteUrl } from "../APi/api"

const Card =({pokenmonIndex,pokemonDescription})=>{
   
    useEffect(()=>{
        getPokenmonSpriteUrl()
        getPokemoDescription(pokenmonIndex)
   
    },[])
    return(
        <div>
            <div>
                <img src={getPokenmonSpriteUrl(pokenmonIndex)}/>
            </div>
            <div>{getPokemoDescription(pokenmonIndex)}</div>
        </div>
    )
}

export default Card