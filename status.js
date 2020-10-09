import React,{Component} from 'react'
import './style.css'
class Status extends Component{
    state={data:[{ id:1,title:"abc",status:"active"},
    {id:2,title:"xyz",status:"active"},
    { id:3,title:"happy",status:"completed"},
    { id:4,title:"jolly",status:"completed"}],
    storeData:[],
   title:"",status:""
    }
    handleInput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
   handleStatus=(e)=>{
       console.log(e.target.value)
       
    if(e.target.value==="All"){
       
       this.state.storeData=this.state.data 
        console.log(this.state.storeData)
    }
    else{
        this.state.storeData=this.state.data.filter(item=>item.status===e.target.value)
        
    }
    this.setState({storeData:this.state.storeData})
}
handleAdd=(e)=>{    
    
    this.setState({data:[...this.state.data,{id:this.state.id+1,title:this.state.title,status:this.state.status}],title:"",status:""})
}
 render(){
    
     return(
         <div className="divclass">
         <input type="text"name="title" 
         value={this.state.data.title} placeholder="title"
         onChange={this.handleInput}/>
         <input type="text"name="status" 
         placeholder="status"
         value={this.state.data.status} onChange={this.handleInput}/>
         
         <button value="All" onClick={this.handleStatus}>All</button>
         <button value="active" onClick={this.handleStatus}>Active</button>
         <button value="completed" onClick={this.handleStatus}>Completed</button>
         <button onClick={this.handleAdd}>Add</button>
         {this.state.storeData.map((item,id)=>{
             return <h3 key={id}>{item.title} {item.status}</h3>
         })}
         
         </div>
     )
 }
}
export default Status
