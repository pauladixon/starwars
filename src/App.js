import React from 'react'
import './App.css'
import getAllStarships from './services/sw-api'
import Starship from './components/Starship'

class App extends React.Component {
  state = {
    allStarships: null
  }

  async componentDidMount() {
    const foundStarships = await getAllStarships()
    this.setState({
      allStarships: foundStarships
    })
  }

  render() {
    const starshipComponents = this.state.allStarships ? this.state.allStarships.map((ship)=>{
      return <Starship shipData={ship}/>
    }) : null

    return (
      <div>
          {starshipComponents}
      </div>
    )
  }
}

export default App