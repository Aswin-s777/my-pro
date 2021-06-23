import React from 'react';

const ItemSearch=(props) =>{
    const pro={
        color:"white"

    }
    console.log("props data:",props)
    return(
    <div>
    <h1 style={pro}>Poduct name:{props.productname}and the price is {props.price}</h1>
    

    </div>
    )
    }

export default ItemSearch;