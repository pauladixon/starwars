import React from 'react'

const Starship = (props) => {
    return (
        <>
            {props.shipData.name}
            {props.shipData.model}
        </>
    )
}

export default Starship