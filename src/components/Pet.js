import React from 'react'

class Pet extends React.Component {

  renderButton = () => {
    const petId = this.props.pet.id
    if (!this.props.pet.isAdopted) {
      return(
       <div className="extra content">
         <button className="ui primary button" onClick={event => this.props.onAdoptPet(petId)}>Adopt pet</button>
       </div>
      )
    } else {
      return(
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        {this.renderButton()}
      </div>
    )
  }
}

export default Pet
