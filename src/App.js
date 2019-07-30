import React, { Component } from 'react';
import Nav from "./components/Nav";
import Burst from "./components/Burst";
import Text from "./components/Text";
import Next from "./components/Next";
import "./styles/background.css";


class App extends Component {
  state = {
    
    text:[
        ["Artist",
        `Flying Lotus 
        ,aka Steven Ellison`,
        `Nephew of Alice Coltrane: 
        jazz harpist
        band leader
        composer`,
        "Son of songwriter Marilyn McCleod"],
        
        ["Cover Art",
        `Ellison once misheard an Ashram lecture,
        the words “cosmic drama” becoming “cosmogramma”
        in his mind`,
        `the artwork is taken from Codex Tor,
        a series of illustrations by Leigh McCloskey
        created based on inspiration, without
        intellectual justification`],
      
        ["The Music Itself",
        "Robbie Coltrane appears throughout on the saxophone",
        "Thundercat provides some vocals and basslines mostly on the track ‘MmmHmm’",
        `Thom Yorke of RadioHead can be heard on
        ‘...And The World Laughs With You’`,
        "They live together with Ellison in this album's strange world.",
        "It uses diverse musical styles in explosive, exploratory ways.", 
        "The mishmashing of esoteric audio samples buries it in your imagination.",
        `I don't think it's Flying Lotus's most coherent 
        or satisfying album,
        but I think it's the most interesting`]
    ], 
    
    
    style:[
      //clickables
      {id:0,
      idName: 'artist',
      color:{backgroundColor:"#000"},
      diameter: 90,
      x: 15,
      y: 70},
      
      {id:1,
      idName: 'coverArt',
      color:{backgroundColor:"#000"},
      diameter: 50,
      x: 20,
      y: 40},
      
      {id:2,
      idName: 'music',
      color:{backgroundColor:"#000"},
      diameter: 80,
      x: 40,
      y: 70},
      
      //non-clickable
      
      {id:4,
      color:{backgroundColor:"#fff"},
      diameter: 15,
      x: 30,
      y: 55},
        
      {id:5,
      color:{backgroundColor:"#fff"},
      diameter: 40,
      x: 35,
      y: 50},
        
      {id:6,
      color:{backgroundColor:"#fff"},
      diameter: 80,
      x: 30,
      y: 60},
    
    ],

    burst:{
        lines: 200,
        thickness: 1,
        radius: 100,
        length: 1000,
    }
  }
  turnNavColor = (id) => {
      this.setState({ style: this.state.style.map((nav) =>{
        if(nav.id === id){
          if(nav.color.backgroundColor === "#000") {
            nav.color = {backgroundColor:"#fff"};
          } else if(nav.color.backgroundColor === "#fff") {
            nav.color = {backgroundColor:"#000"};
          }  
        }
        return nav;
      }) });
    }

  displayText = (artist) => { 
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      console.log(this.state.currentText);
      if(i > artist.length - 1){
        clearInterval(interval)
      }
      this.setState({currentText: artist[i]});
    },1000)
  }
  
  navNext = (id, display) => {
    console.log(display); 
    if(display === "none"){
      return "block";
     }else if(display === "block"){
       return "none";
     }
  }  
  
  navDisplayText = (id) => {
     
    console.log(this.state.text[0][id]);
    
    return this.state.text[0][id];
 }  
 
  
  
   
  
   
 
  render() {
   return(
    <div id='yes'>
      <Text text={this.navDisplayText}/>
      <Nav mouseEnter={this.turnNavColor}
          mouseOut={this.turnNavColor}
          style={this.state.style}
          click={this.turnNavColor}
           />     
      <Burst radiate={this.state.burst} />
      <Next value={this.next} appear={this.navNext()} />
    </div>
   );
  }
} 

export default App;
