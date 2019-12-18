import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  componentDidMount() {
    this.onFindPetsClick();
  }



  onFindPetsClick = () => {
      return fetch('/api/pets')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ data : responseJson })
      }).catch(error => {
        console.log(error)
      })
  }


  onChangeType = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: this.state.type
      }
    })
  }

  render() {
    return (

    // <Router>
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChange={this.onChangeType} />

            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    // </Router>
    )
  }
}

export default App
