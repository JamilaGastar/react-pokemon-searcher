import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isImgFlipped: false,
    }
  }

  flipCard = () => {
    this.setState ({
      isImgFlipped: !this.state.isImgFlipped,
    })
  }

  render() {
    let imgUrl;
    if (this.state.isImgFlipped) {
      imgUrl = this.props.pokemon.sprites.back;
    } else {
      imgUrl = this.props.pokemon.sprites.front;
    }
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img src={imgUrl} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
