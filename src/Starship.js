import React, { Component } from 'react'
import getAllStarships from './services/sw-api'

class Starship extends Component {
    state = {
        name: 'death star',
        model: 'ds-1 orbital battle station',
    }

    componentDidMount() {
        this.newStarship()
    }

    newStarship = async () => {
        const s = await getAllStarships()
        this.setState((prevState) => ({
            name: `${s.name}`,
            model: `${s.model}`
        }))
    }

    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.model}</div>
            </div>
        )
    }
}

export default Starship