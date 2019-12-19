import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
    )

  );
    // map over pets
    // send over to pet.js
    // pet.js will handle individual pet

    return
    <div className="ui cards">
      // <Pet onAdoptPet={this.props.onAdoptPet}  />
      {petCards}
    </div>
  }
}

export default PetBrowser
