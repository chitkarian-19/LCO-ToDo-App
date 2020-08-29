import React from 'react';
import logo from './LCO-logo-white.png';
import "./App.css";


class App extends React.Component{
  
  constructor(props){
       super(props);
       this.state={
         newItem:"",
         list : []
       }
  }
   
  addItem(todoValue){
    if(todoValue !== ""){
      //create a new item with unique ID
      const newItem ={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };
      const list = [...this.state.list]; //... make sure that list previous properties are saved
      list.push(newItem);
       //final updation
      this.setState({
        list,
        newItem:""
      })
    }
  }

  deleteItem(id){
    const list =[...this.state.list];//current copy
    const updatedList =list.filter(item => item.id !== id);
    this.setState({list:updatedList});
  }

  updateInput(input){
    this.setState({newItem:input});
  }
  render(){
    return(
       <div>
         <img src={logo} alt="not there" width="100" height="100" className="logo"/>
         <h1 className="app-title">LCO ToDo App</h1>
         <div class="container">
          Add an item....
          <br/>
          <input type="text"
           className="input-text" 
          placeholder ="write a todo"
          required
          value={this.state.newitem}
          onChange ={ e => this.updateInput(e.target.value)}
           />
           <button  
           className="add-btn"
           onClick = {()=>this.addItem(this.state.newItem)}
           disabled={!this.state.newItem.length}
           >Add ToDo
             
           </button>
           <div className="list">
             <ul>
               {this.state.list.map(item =>{
                 return (
                  <li key={item.id}>
                    <input 
                     type="checkbox"
                     name="idDone"
                     checked={item.isDone}
                     onChange = {()=>{}}
                    />
                    {item.value}
                    <button
                     className="btn"
                     onClick={()=> this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                 );
               })}
               <li>
                 <input type="checkbox" name="" id="" />
                   Record youtbe videos
                   <button className="btn">Delete</button>
                   
               </li>
             </ul>
           </div>
         </div>
       </div>
    );
  }
}

export default App;