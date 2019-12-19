import React from 'react'


class Pet extends React.Component {

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     type: this.props.type,
  //     age: this.props.type,
  //     weight: this.props.weight,
  //     name: this.props.id,
  //     gender: this.props.gender
  //   }
  // }

  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
            this.props.name
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
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
