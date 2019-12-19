import React from 'react'


class Pet extends React.Component {


  render() {
    console.log(this.props.pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀' }


            PET NAME
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} PET AGE</p>
            <p>Weight: {this.props.pet.weight} PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button onClick={(id) => this.props.onAdoptPet(id)} className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
