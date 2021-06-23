import React, { Component } from 'react';

class Cls extends Component{
    render(){
        
            const mystyle = {
              color: "blue",
              
              padding: "10px",
              fontFamily: "Times new roman"
            };
        return(
        <div>
        <h1 style={mystyle}>class based component</h1>
        <h5 style={mystyle}>ASWIN REACT</h5>
        </div>
        );
    }
}
export default Cls;