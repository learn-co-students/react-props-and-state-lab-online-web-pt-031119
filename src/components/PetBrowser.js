import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  

  render() {
  
    const petData = this.props.pets.map((pet,index) => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
    })
    return <div className="ui cards"> 
      {petData}
      </div>
    
    
  }
}

export default PetBrowser
