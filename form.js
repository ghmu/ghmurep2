import React ,{Component}from 'react'
class Form extends Component{
    state={
          inp:""
    }
    handleInput=(e)=>{
        this.setState({
           inp:e.target.value 
        })
    }
    
    handleSubmit=(e)=>{
        alert(`${this.state.inp}`)
        
    }
render(){
    return(
        <form onSubmit={this.handleSubmit}>
     <label>Name</label>
    <input type="text" value={this.state.inp} onChange={(e)=>this.handleInput(e)}/>
    <button type="submit" >submit</button>
    
        </form>
    )
}
}
export default Form