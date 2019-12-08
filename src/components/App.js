import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      data: null,
      filters: {
        type: 'all'
      }
    }
  }

 updateFilters = (pet) => {
   this.setState({
     filters: {
       type: pet
     }
   })
   console.log(this.state.filters.type)
 }

findPetsClick = (pet) => {
  fetch(`/api/pets?type=${this.state.filters.type}`)
  .then(response => response.json())
  .then(data => this.setState({data}))
}

componentDidMount() {
  fetch('/api/pets')
  .then(response => response.json())
  .then(data => this.setState({data}))
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
              <Filters  onChangeType={event=> this.updateFilters(event)} onFindPetsClick={event=> this.findPetsClick(event)}     />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
