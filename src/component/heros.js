import React from 'react'

function Heros({detail}) {
    
    return (
        <div>
            
            <h1>{detail.id} {detail.Name}  {detail.age}  {detail.skill}</h1>
        </div>
    )
}

export default Heros