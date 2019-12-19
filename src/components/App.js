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

  // findPets (){
  //   const url = ""
  //   if(this.state.filters.type == "all"){
  //     url = "http://localhost:3000/api/pets"
  //   } else {
  //     url = "http://localhost:3000/api/pets" + "?type=" + this.state.filters.type
      
  //   }

  //   fetch(url)
  //   .then(resp => resp.json())
  // }

  filtering(event){
    this.setState({
      filters: {
        type: event.target.value
      }
    })
    console.log(this.state)
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
              <Filters onChangeType={this.filtering}/>
            </div>
            <div className="twelve wide column">
              {/* <PetBrowser /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
