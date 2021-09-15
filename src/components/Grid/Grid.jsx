import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem/GridItem';
import './Grid.css';

class Grid extends Component {
  render() {
    const { list } = this.props;
    return(
      <ul className="grid">
        {list.map((employee, index) => (
          <GridItem key={ index } employee={ employee } />
        ))}
      </ul>
    );
  }
}

Grid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Grid;
