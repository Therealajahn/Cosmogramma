import React, { Component } from 'react';

// import PropTypes from 'prop-types';







class Next extends Component {
    
    

       
    
    render() {
      
        
        let display = this.props.appear;
       
       
        const right = {
            position: "absolute",
            top: "47vh",
            left: "33vw",
            zIndex: "5",
            borderTop: "25px solid transparent",
            borderBottom: "25px solid transparent",
            borderRight: "50px solid red",
            display: `${display}`,   
       }
       const left = {
            position: "absolute",
            top: "47vh",
            left: "62vw",
            zIndex: "5",
            borderTop: "25px solid transparent",
            borderBottom: "25px solid transparent",
            borderLeft: "50px solid red",
            display: `${display}`,
   }
        
       return(
         <div>
             <div style={left}></div>
             <div style={right}></div>
         </div>
       ) 
    }
  

}
// Nav.propTypes = {
//   style: PropTypes.array.isRequired
// } 

export default Next;