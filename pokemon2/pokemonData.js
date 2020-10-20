import React,{ useState ,useEffect} from "react"
import DataPassed from './datapassed'
function DataCopy(){
    const [data ,setData]=useState([])
    
    const [select,setSelect]=useState("")
    const [id,setId]=useState("")
    
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
        .then(res=>res.json())
        .then(json=>setData(json.pokemon))
        
       
    },[])

    
 
    const handleChange=(e)=>{
        setSelect(e.target.value)
        console.log(e.target.value)
       var Id = e.target.id
       setId(Id)
       console.log(id)
       
    }


    const filteredType=data.filter(pokemon=>{
        return pokemon.type.includes(select)
   })
   const filterweak= data.filter(pokemon=>{
    return pokemon.weaknesses.includes(select)
   })
     
    return(
        <div>
           <label>Type:</label>
            <select className="select"  id="type"value={select} onChange={(e)=>handleChange(e)}>
              <option value="Grass">Grass</option>
              <option value="Poison">Poison</option>
              <option value="Fire">Fire</option>
              <option value="Bug">Bug</option>
              <option value="Normal">Normal</option>
              <option value="Flying">Flying</option>
              <option value="Psychic">Psychic</option>
              </select>  
              <label>Weakness: </label>
              <select  className="select" id="weakness"value={select} onChange={(e)=>handleChange(e)}>
                  <option value="Fire">Fire</option>
                  <option value="Ice">Ice</option>
                  <option value= "Flying"> Flying</option>
                  <option value="Psychic">Psychic</option>
                  <option value="Ground">Ground</option>
                  <option value="Water">Water</option>
              </select>
              {
                  (id==="type")?<DataPassed  data={filteredType}/>:<DataPassed  data={filterweak}/>
               
               
                 
               
               }
              
             

        </div>
    )
}
export default DataCopy