import React, { Component } from 'react';
import axios from 'axios';
import GridItem from './GridItem/GridItem';
import './Grid.css';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };

    this.getEmployees = this.getEmployees.bind(this);
  }

  async getEmployees() {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://crudcrud.com/nutemployees',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Header': 'Authorization',
          responseType: 'json',
        }
      });
      console.log(response);
      this.setState({ list: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getEmployees();
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
