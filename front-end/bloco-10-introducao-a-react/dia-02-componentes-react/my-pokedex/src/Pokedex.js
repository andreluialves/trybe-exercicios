import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      pokemons.map((element) => <Pokemon key={element.id} pokemons={element} />)
    )
  }
}

export default Pokedex;
