import React from 'react'

class Pet extends React.Component {
  
  sex = (sex) => {
    if (sex==="male") {
      return '\u2642'
    } else {
      return '\u2640'
    }
  }
  
 updateAdoption = () => {
   this.props.onAdoptPet(this.props.pet.id)
 }

  renderButton = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button" >Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.updateAdoption}>Adopt pet</button>
    }
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.sex(this.props.pet.gender)}
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
