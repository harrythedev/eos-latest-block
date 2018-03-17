import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import './CopyToClipboard.css';


export default class CopyToClipboard extends Component {
  static propTypes = {
    block: PropTypes.object,
  };

  state = {
    copying: false,
  };

  copyBlockToClipboard = () => {
    const { block } = this.props;
    const blockJSON = JSON.stringify(block);
    const success = copy(blockJSON);
    this.setState({ copying: success });
    setTimeout(() => this.setState({ copying: false }), 800);
    if (!success) console.error('Copy failed. :(');
  }

  render() {
    const { copying } = this.state;
    const { block } = this.props;
    if (!block) return null;
    return (
      <section id="copy-to-clipboard">
        <div className="container" onClick={this.copyBlockToClipboard}>
          <button className={`copy${copying ? ' is-active' : ''}`}>
            <div className="top" />
            <div className="bottom" />
          </button>
          <span>COPY</span>
        </div>
      </section>
    );
  }
}
