import React, { Component } from 'react';

// import PropTypes from 'prop-types';







class Text extends Component {
    
    

       
    
    render() {
      let write = this.props.text();
        
       return(
         <div id="text">{write}</div>
       ) 
    }
  

}
// Nav.propTypes = {
//   style: PropTypes.array.isRequired
// } 

export default Text;