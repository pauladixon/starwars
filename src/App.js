import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { getAllStarships } from './services/sw-api';
import Starship from './components/Starship'
import StarshipPage from './pages/StarshipPage/StarshipPage';

class App extends Component {
  
  state = {
    starships: []
  };

  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const foundStarships = await getAllStarships()
    this.setState({
      starships: foundStarships
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS STARSHIPS</header>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => 
              <section>
                {this.state.starships.map((starship, idx) => 
                  <Link to={`/starships/${idx}`} key={starship.name}>
                    <div className="ship"><Starship shipData={starship}/></div>
                  </Link>
                )}
              </section>
            }/>
            <Route path='/starships/:idx' render={(props) => 
              <StarshipPage
                {...props}
                getStarship={this.getStarship}
              />
            }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
