import React, { Component } from 'react';

// import PropTypes from 'prop-types';




class Burst extends Component {
    
    createAngles = () => {
        let children = []
        const { length, thickness, radius, lines } = this.props.radiate;
        
    
        const tri = 
        {
            position: "absolute",   
            borderBottom: `${length}px solid #000`,
            borderLeft: `${thickness}px solid transparent`,
            borderRight: `${thickness}px solid transparent`,
        }
    
        const line = 
        {
            position: "absolute",
            width: `${thickness * 2}px`,
            left: "50%",
            transformOrigin: "bottom center",
            top:`${(460 - length) - radius}px`,
            height: `${length + radius}px`,
        }
        
        
        for(let i = 1; i <= lines; i++){
            let angle = i * (360/lines);
            let transform = {transform: `rotate(${angle}deg)`,}
            
            children.push(
            
                <div  key={i} style={{...line, ...transform}}>
                        
                    <div style={tri}></div> 
                    
                </div>
            )
        }

        return children
    }

    
    
    render() {
    
        return (
        
        <div>
            {this.createAngles()}
        </div> 
       
            
        )  
   
    }
  }


// Nav.propTypes = {
//   style: PropTypes.array.isRequired
// } 

export default Burst;