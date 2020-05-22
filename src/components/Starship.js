import React from 'react'
import './Starship.css'

const Starship = (props) => {
    return (
        <div className='ship'>
            {props.shipData.name}
        </div>
    )
}

export default Starship