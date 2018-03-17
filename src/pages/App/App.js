import React, { Component } from 'react';
import Eos from 'eosjs';
import copy from 'clipboard-copy';
import { BlockInfo, Button, CopyToClipboard, Header } from 'components';
import './App.css';


export default class App extends Component {
  state = {
    block: null,
  };

  eos = Eos.Testnet({ httpEndpoint: 'http://t1readonly.eos.io' }); // TODO: Move to .env

  getBlockDetails = async () => {
    try {
      const chainInfo = await this.eos.getInfo({});
      const block = await this.eos.getBlock(chainInfo.head_block_num);
      this.setState({ block });
      copy(JSON.stringify(block));
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
        <CopyToClipboard block={block} />
      </div>
    );
  }
}
