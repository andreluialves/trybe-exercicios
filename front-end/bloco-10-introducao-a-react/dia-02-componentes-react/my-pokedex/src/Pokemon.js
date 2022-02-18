import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemons: { name, type, averageWeight, image } } = this.props;

    return (
      <div className='card'>
        <div className='description'>
          <h2>{name}</h2>
          <h3>{type}</h3>
          <p>{`averageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <div className='image'>
          <img src={image} alt={`${name} image`}></img>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
