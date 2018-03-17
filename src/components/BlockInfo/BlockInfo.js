import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { BlockTableRow, CopyToClipboard } from 'components';
import './BlockInfo.css';


const formatBlockTime = (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a [(UTC)]');

const BlockInfo = ({ block, loading }) => (
  <div className={`block-table-container ${!block || loading ? 'inactive' : 'active'}`}>
    <section>
      <div className="block-table">
        {block &&
          <React.Fragment>
            <BlockTableRow label="Block Number" value={block.block_num.toLocaleString()} />
            <BlockTableRow label="Producer" value={block.producer} />
            <BlockTableRow label="Timestamp" value={formatBlockTime(block.timestamp)} />
            <BlockTableRow label="Block ID" value={block.id} />
            <BlockTableRow label="Prior Block ID" value={block.previous} />
            <BlockTableRow label="Reference Block Header" value={block.ref_block_prefix.toString()} />
            <BlockTableRow label="Tx Merkel Root" value={block.transaction_merkle_root} />
            <BlockTableRow label="Producer Signature" value={block.producer_signature} />
          </React.Fragment>
        }
      </div>
    </section>
    <CopyToClipboard block={block} />
  </div>
);

BlockInfo.propTypes = {
  block: PropTypes.object,
};

export default BlockInfo;
