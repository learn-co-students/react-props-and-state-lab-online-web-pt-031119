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

  findPets = () => {
    let url = ""
    if(this.state.filters.type === "all"){
      url = "/api/pets"
    } else {
      url = "/api/pets" + "?type=" + this.state.filters.type
    }

    fetch(url)
    .then(resp => resp.json())
    .then(json => this.setState({
      pets: json
    }))
  }

  filtering = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
    console.log(this.state)
  }

  adoption = (id) => {
    this.state.pets.map(pet => {if(pet.id === id){
      pet.isAdopted = true
    }})
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
              <Filters onChangeType={this.filtering} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoption} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
