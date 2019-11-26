import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() { 
    const petArr = this.props.pets.map(pet => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
    })
    return (
      <div className="ui cards">
       {petArr} 
      </div>
    )
  }
}

export default PetBrowser
