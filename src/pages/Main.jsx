import React, { Component } from 'react';
import Grid from '../components/Grid/Grid';
import Header from '../components/Header/Header';

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Grid />
          <button className="create">+</button>
        </main>
      </>
    );
  }
}

export default Main;
