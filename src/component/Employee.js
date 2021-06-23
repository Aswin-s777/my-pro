import React from 'react';

const Employee=(props) =>{
    const pro={
        color:"skyblue",
        fontFamily: "'Staatliches', cursive"

    };
    const tab={
        border: "1px solid black",
       textalign:"center",
       bordercollapse:" collapse",
       padding: "15px",
       position:"center",
       marginleft: "auto",
       marginright: "auto"
    };
    console.log("props data:",props)
    return(
    <div>
        <table style={tab}>
    <p style={pro}><tr><td style={tab}>Employee Name:</td><td style={tab}>{props.employeename}</td></tr>
    <tr><td style={tab}>Rollno:</td> <td style={tab}>{props.rollno}</td></tr>
   <tr><td style={tab}>Companyname:</td> <td style={tab}>{props.companyname}</td> </tr>
    <tr><td style={tab}>Desination:</td><td style={tab}>{props.desination}</td> </tr>
   <tr><td style={tab}>Rating:</td><td style={tab}>{props.rating}</td></tr>  </p>
        </table>

    </div>
    )
    }

export default Employee;