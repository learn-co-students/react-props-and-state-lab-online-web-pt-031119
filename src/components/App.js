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
    let url = '/api/pets'

    if(this.state.filters.type != 'all') {
      url += `?type=${this.state.filters.type}`
    }
      return fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({ pets : responseJson })
      }).catch(error => {
        console.log(error)
      })
  }

  onAdoptPet = (id) => {
    this.setState({pets: this.state.pets.map(pet => {
        if(pet.id === id) {
          return {...pet,
            isAdopted: true
            }
        } else {
          return pet
        }
      })
    })
  }

  onChangeType = () => {
    console.log("On Change Type")
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
