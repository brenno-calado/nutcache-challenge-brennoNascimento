import React, { Component } from 'react';
import Grid from '../components/Grid/Grid';
import Header from '../components/Header/Header';

const list = [
  {
    name: 'Brenn Edwards',
    email: 'brenn.edwards@gmail.com',
    startDate: '2021-09-14',
    team: 'UX'
  },
  {},
];

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Grid list={ list }/>
      </>
    );
  }
}

export default Main;
