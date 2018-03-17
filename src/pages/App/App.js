import React, { Component } from 'react';
import Eos from 'eosjs';
import { BlockInfo, Button, Header } from 'components';
import './App.css';


class App extends Component {
  state = {
    block: undefined,
  };

  eos = Eos.Testnet({ httpEndpoint: 'http://t1readonly.eos.io' });

  getBlockDetails = async () => {
    try {
      const chainInfo = await this.eos.getInfo({});
      const block = await this.eos.getBlock(chainInfo.head_block_num);
      this.setState({ block });
    } catch (e) {
      console.log(e);
      // TODO: Display error message to user
    }
  }

  render() {
    const { block } = this.state;
    return (
      <div className="App">
        <Header />
        <section>
          <Button onClick={this.getBlockDetails}>See Latest Block</Button>
        </section>
        <section>
          <BlockInfo block={block} />
        </section>
      </div>
    );
  }
}

export default App;
