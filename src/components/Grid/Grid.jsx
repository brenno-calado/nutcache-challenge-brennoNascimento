import React, { Component } from 'react';
import GridItem from './GridItem/GridItem';
import './Grid.css';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {

  }

  render() {
    const { list } = this.state;
    return(
      !list ? <span>Loading...</span> : (
        <ul className="grid">
          {list.map((employee, index) => (
            <GridItem key={ index } employee={ employee } />
          ))}
        </ul>
      )
    );
  }
}

export default Grid;
