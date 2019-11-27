import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

import { urls } from '../data/urls'

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

  onChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }
    

  onFindPetsClick = () => {
    const url = urls[this.state.filters.type]
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pets: json
        })
      })
      .catch(error => console.log(error.message))
  }

  onAdoptPet = (id) => {
    const pets = [...this.state.pets]
    const pet = pets.find(pet => pet.id === id)
    const index = pets.indexOf(pet)
    pets[index].isAdopted = !pets[index].isAdopted
    this.updatePets(pets)
  }

  updatePets = (pets) => {
    this.setState({
      pets: pets
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
