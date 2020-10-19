import React, { useEffect, useState } from 'react'
import axios from "axios"
import RenderPokemon from './renderpokemon'
import './pokemon.css'
function PokemonData(){
   
     const [type,setType]=useState([ ])
     const [data,setData]=useState([])
     const[weakness,setWeakness]=useState([])
   

    useEffect(()=>{
    async function getdata(){
        const res= await axios.get(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
        //console.log(res.data.pokemon[0].name)
        //setId(res.data.pokemon.id)
        //setName(res.data.pokemon.name)
        setData(res.data.pokemon)
        console.log(res.data.pokemon)
    
    }
    getdata()
    
    },[])
    const filteredType=data.filter(pokemon=>{
         return pokemon.type.includes(type)
    })
    
        
    return(
        <>
        <h3 >Selected Type: {type}</h3>
        <div className="selectdiv">
              <label>Type:</label>
          <select className="select" value={type} onChange={(e)=>setType(e.target.value)}>
              <option value="Grass">Grass</option>
              <option value="Poison">Poison</option>
              <option value="Fire">Fire</option>
              <option value="Bug">Bug</option>
              <option value="Normal">Normal</option>
              <option value="Flying">Flying</option>
              <option value="Psychic">Psychic</option>
              </select>  
              </div>
             
             <RenderPokemon filteredData={filteredType}/>
          
        </>
    )
}
export default PokemonData