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

 updateFilters = (pet) => {
  this.setState({
     filters: {
       type: pet.target.value
     }
   })
 }

findPetsClick = (pet) => {
  if (this.state.filters.type == "all") {
    fetch(`/api/pets`)
    .then(response => response.json())
    .then(data => this.setState({pets: data}))
  } else {
    fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(response => response.json())
    .then(data => this.setState({pets: data}))
  } 
 
}

adoptThePet = (id) =>{
  for (let petElement of this.state.pets) {
    if (petElement.id === id) {
      petElement.isAdopted = true
    }
  }
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
              <Filters  onChangeType={this.updateFilters} onFindPetsClick={this.findPetsClick}     />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptThePet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
