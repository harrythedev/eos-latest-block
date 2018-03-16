import React, { Component } from 'react';
import Eos from 'eosjs';
import { BlockInfo, Button, Header } from 'components';
import './App.css';


class App extends Component {
  state = {
    block: null,
  };

  eos = Eos.Testnet({ httpEndpoint: 'http://t1readonly.eos.io' });

  getBlockDetails = () => {
    this.eos
      .getInfo({})
      .then(chainInfo => this.eos.getBlock(chainInfo.head_block_num))
      .then(block => this.setState({ block }))
      .catch(error => console.error(error));
  }

  render() {
    const { block } = this.state;
    return (
      <div className="App">
        <Header />
        <section>
          <Button onClick={this.getBlockDetails}>See Latest Block</Button>
        </section>
        <BlockInfo block={block} />
      </div>
    );
  }
}

export default App;
