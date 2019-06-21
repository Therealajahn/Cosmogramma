import React, { Component } from 'react';
import "./nav.css";
import PropTypes from 'prop-types';




class Nav extends Component {
    
    


    render() {
  
          
        const circle = 
          { 
              width: "50px",
              height: "50px",
              borderRadius: "50%",
          }
          
    return this.props.style.map((nav) => (
            
            <div 
            key={nav.id}
            style={{...circle, ...nav.color}}
            onMouseEnter={this.props.mouseEnter.bind(this, nav.id)}
            onMouseOut={this.props.mouseOut.bind(this, nav.id)}></div>
            
    ));
     
   
    
  }
}

Nav.propTypes = {
  style: PropTypes.array.isRequired
} 



 
 



 export default Nav;