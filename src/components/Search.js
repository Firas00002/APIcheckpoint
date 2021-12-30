import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies'

const Search = () => {
    const [movie, setMovie] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(true)

    const onchange=(e)=>{
        setInput(e.target.value)
    }
   const onsubmit =(e)=>{
       e.preventDefault();
       
       const data= async()=>{
        try {
            var options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/auto-complete',
                params: {q: `${input}`},
                headers: {
                  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                  'x-rapidapi-key': '16858d5aeamsh1d3d29e56ab31f0p1ba675jsn1e21d1617b6f'
                }
              };
            const res = await axios.request(options)
            console.log(res)
            setMovie(res.data.d)
            
        } catch (error) {
            console.error(error)
        }
    }
    data();
    setLoading(false)
   }
  
    return (
        <div>
            <form onSubmit={onsubmit} >
                <label > Movies</label>
                <input type='text' value={input} onChange={onchange} placeholder='Search for Movies ....' />
            </form>
            <Movies input={input} movie={movie} loading={loading} />
        </div>
    )
    
}

export default Search
