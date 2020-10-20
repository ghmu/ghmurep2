import React from 'react'
import './pokemon.css'
function DataPassed(props){
    
    
    return(
        <div>
            
        {props.data.map((item,id)=>(
            <div className="main"  key={id} >
            <div> Id:{item.id}</div>
            <div>Name:{item.name}</div>
            
            <div> Type:{item.type}</div>
            <div> Weakness:{item.weaknesses}</div>
            <div><a href={item.img}>pokemonImage</a></div>
            </div>
        ))}
        </div>
    )
}
export default DataPassed