import React, { Component } from 'react';
import Counterhooks from '../componenthooks/counterhooks';
import Forms from './Forms';
import Cls from './cls';

class Increment extends Component{

    
    constructor(){
        super();
        this.state={
            count: "hello"
            
        }
    
    }
    increment(){
        this.setState({
            count :<Forms />
        })
    }
    decrement(){
        this.setState({
            count : <Counterhooks />
        })
    }
    reset=()=>{
        this.setState({
            count :<Cls />
        })
    }
    
    render(){

        const sub={
            
            textAlign:"center"
        };
        const but={
            backgroundColor: "DodgerBlue"
        };

        
        return( 
            <div style={sub}>
                
           {this.state.count}
            
            <button style={but} onClick={()=>this.increment()}>INCREMENT</button><br></br>
            <button style={but} onClick={()=>this.decrement()}>DECREMENT</button><br></br>
            <button style={but} onClick={this.reset}>RESET</button>
        
        </div>
        )
        }
}

export default Increment;