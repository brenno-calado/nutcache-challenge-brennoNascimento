import React, { Component } from 'react';
import axios from 'axios';
import GridItem from './GridItem/GridItem';
import './Grid.css';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      list: null, mockList: [
        {
          name: 'Brenn Edwards',
          email: 'brenn.edwards@gmail.com',
          startDate: '2021-09-14',
          team: 'UX'
        },
        {
          name: 'Brenn Edwards',
          email: 'brenn.edwards@gmail.com',
          startDate: '2021-09-14',
          team: 'UX'
        },
      ]
    };

    this.getEmployees = this.getEmployees.bind(this);
  }

  async getEmployees() {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://crudcrud.com/nutemployees',
        headers: {
          'Access-Control-Allow-Origin': 'https://crudcrud.com',
        }
      });
      console.log(response);
      this.setState({ list: this.state.mockList });
    } catch (error) {
      console.log(error);
      this.setState({ list: this.state.mockList });
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
