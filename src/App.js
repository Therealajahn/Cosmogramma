import React, { Component } from 'react';
// import NavBar from "./components/NavBar"
import Nav from "./components/Nav";
import "./styles/background.css";


class App extends Component {
  state = {
    
    style:[
      
      {id:1,
      color:{backgroundColor:"#000"}},
      {id:2,
      color:{backgroundColor:"#000"}},
      {id:3,
      color:{backgroundColor:"#000"}},
      
      
    ]
  }
  turnWhite = (id) => {
      this.setState({ style: this.state.style.map((nav) =>{
        if(nav.id === id){
          nav.color= {backgroundColor:"#fff"}; 
        }
        return nav;
      }) });
    }
   
  turnBlack = (id) => {
    this.setState( {style: this.state.style.map((nav)=>{
        if(nav.id === id){
          nav.color = {backgroundColor: "#000"}; 
        }
        return nav;
    }) })
  }
   
 
  render() {
   return(
    <Nav mouseEnter={this.turnWhite}
         mouseOut={this.turnBlack}
         style={this.state.style} />     

   );
  }
}

export default App;
