// fetch 150 pokemon and return an array of objects
//each object represnts a pokemon

export const getPokemonList = async()=>{
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(res=>res.json())
    return data.results
}
// getpokemon()
// short description of the pokemon
export const getPokemoDescription = async(index)=>{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`)
    .then(res=>res.json())
    return data.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g,'')
}
// getPokemoDescription()

// return url of pokemon sprite (image)
export function getPokenmonSpriteUrl(index){
    return `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/back/${index}.png`
}

