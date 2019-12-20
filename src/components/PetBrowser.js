import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  showPets = () => {
  return this.props.pets.map(p => {
      return <Pet pet={p} onAdoptPet={this.props.onAdoptPet}/>
    })
  }
  render() {
  return <div className="ui cards">{this.showPets()}</div>
  }
}

export default PetBrowser
