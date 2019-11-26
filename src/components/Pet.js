import React from 'react'

class Pet extends React.Component {

  renderSymbol = (gender) => {
    if  (gender === 'male') {
      return '\u2642'
    } else if (gender === 'female') {
      return '\u2640'
    }
  }

  renderButton = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">         
            {this.renderSymbol(this.props.pet.gender)}
            <br></br>
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
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
