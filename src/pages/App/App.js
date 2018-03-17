import React, { Component } from 'react';
import Eos from 'eosjs';
import copy from 'clipboard-copy';
import { BlockInfo, Button, CopyToClipboard, Header } from 'components';
import './App.css';


export default class App extends Component {
  state = {
    block: null,
    loading: false,
    error: false,
  };

  eos = Eos.Testnet({ httpEndpoint: process.env.REACT_APP_EOS_CHAIN_URL });

  getBlockDetails = () => {
    if (this.state.loading) return; // only one call at a time!

    // reset error to false and loading to true, and then get the block info
    this.setState({ error: false, loading: true }, async () => {
      try {
        const chainInfo = await this.eos.getInfo({});
        const block = await this.eos.getBlock(chainInfo.head_block_num);
        this.setState({ block, loading: false });
        copy(JSON.stringify(block));
      } catch (e) {
        console.error(e);
        this.setState({ error: true, loading: false });
      }
    });
  }

  render() {
    const { block, error, loading } = this.state;
    return (
      <div className="App">
        <Header />
        <section>
          <Button
            error={error}
            errorText="Oops! Try again."
            loading={loading}
            onClick={this.getBlockDetails}
          >
            See Latest Block
          </Button>
        </section>
        <section>
          <BlockInfo block={block} />
        </section>
        <CopyToClipboard block={block} />
      </div>
    );
  }
}
