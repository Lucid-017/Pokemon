import { useState } from "react"

const SearchBar = ()=>{
    const[text, setText]=useState('')
    const[images,setImages] =useState([])

    const client_id = 'wHTEno_q9i-Es6YnB7TqZEaoqFcuMx2hft38SHuq2FM'
    const secretKey = 'pOwx8Lt-isgHptk5gb4i4Q1mB_XzLoz_yerV8f8IP4Q'
    const search=(input)=>{
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${input}`,{
            headers:{
                Authorization :`Client-ID ${client_id}`
            }
        })
        .then(res=>res.json())
        .then(data=> {
            setImages(data.results)
            console.log(images)
        })
        .catch(err=> console.log(err.message))
    }
    // handle change element
    const handleChange =(e)=>{
        setText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        search(text)
    }
    return(
        <div className="container"> 
            <form>
              <input type="text" placeholder="search todo" onChange={handleChange} alt="search bar"/>
              <button onClick={handleSubmit}> search</button>
            </form>
        
            <div className="grid">
                {images.map(image=>{
                    return(
                        <div  key={image.id}>
                            <div className="img-container">
                            <img className="img" src={image.urls.small} alt={image.alt_description}/>
                            </div>
                            <p >{image.description}</p> 
                            <p>{image.likes}</p>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}

export default SearchBar