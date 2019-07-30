import React, { Component } from 'react';
import PropTypes from 'prop-types';




class Nav extends Component {
    
    


    render() {
        

          
        const dots = 
          { 
              position: "absolute",
              borderRadius: "50%",
              marginLeft: "2px",
              zIndex: "5",
          }
          
    return this.props.style.map((nav) => (
                
                <div 
                key={nav.id}
                style={{...dots,
                        ...nav.color,
                        ...{marginLeft: `${nav.x}vw`},
                        ...{marginTop: `${nav.y}vh`},
                        ...{width: `${nav.diameter}px`},
                        ...{height: `${nav.diameter}px`}}}
                onMouseEnter={this.props.mouseEnter.bind(this, nav.id)}
                onMouseOut={this.props.mouseOut.bind(this, nav.id)}
                onClick={this.props.click.bind(this, nav.id)}
               ></div>
              
        ))
  }
}


Nav.propTypes = {
  style: PropTypes.array.isRequired
} 



 
 



 export default Nav;