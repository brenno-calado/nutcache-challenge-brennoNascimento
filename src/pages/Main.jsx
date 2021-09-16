import React, { Component } from 'react';
import Grid from '../components/Grid/Grid';
import Header from '../components/Header/Header';
import { Modal } from '../components/Modal/Modal';

class Main extends Component {
  constructor() {
    super();
    this.state = { createModal: false };
  }

  render() {
    const { createModal } = this.state;
    return (
      <>
        <Header />
        <main>
          <Grid />
          <button className="create" onClick={() => this.setState({ createModal: !createModal })}>+</button>
          {!createModal ? null : <Modal type="create" toggle={() => this.setState({ createModal: false })} />}
        </main>
      </>
    );
  }
}

export default Main;
