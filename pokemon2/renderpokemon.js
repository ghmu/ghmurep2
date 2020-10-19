import React from 'react'
import  './pokemon.css'
function RenderPokemon(props){
    console.log(props)
    return(
        <>
         {props.filteredData.map((item,id)=>(
                  <div key={id} className="main">
                  <div> Id:{item.id}</div>
                  <div>Name:{item.name}</div>                  
                  <div> Type:{item.type}</div>
                  <div> Type:{item.weaknesses}</div>
                  </div>
              ))}
        </>
    )
}
export default RenderPokemon