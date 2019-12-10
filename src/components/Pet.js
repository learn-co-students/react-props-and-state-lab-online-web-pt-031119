import React from 'react'

class Pet extends React.Component {

  checkGender = (pet) => {
    if(pet.gender === 'male'){
      return('♂')
    }else if(pet.gender === 'female'){
      return('♀')
    }
  }

  checkAdopted = (item) => {
    if(item.pet.isAdopted === true){
      return(
        <button className="ui disabled button">Already adopted</button>
      )
    }else if(item.pet.isAdopted === false){
      return(
        <button onClick={() => item.onAdoptPet(item.pet.id)} className="ui primary button">Adopt pet</button>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.checkGender(this.props.pet)}
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
          {this.checkAdopted(this.props)}
        </div>
      </div>
    )
  }
}

export default Pet