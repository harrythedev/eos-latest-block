import React from 'react';
import PropTypes from 'prop-types';
import { BlockTableRow } from 'components';
import './BlockInfo.css';


const BlockInfo = ({ block }) => {
  if (!block) return null;
  // TODO: format block number and date
  // TODO: Add mount transition
  return (
    <div className="block-table-container">
      <BlockTableRow label="Block Number" value={block.block_num.toString()} />
      <BlockTableRow label="Producer" value={block.producer} />
      <BlockTableRow label="Timestamp" value={block.timestamp} />
      <BlockTableRow label="Block ID" value={block.id} />
      <BlockTableRow label="Prior Block ID" value={block.previous} />
      <BlockTableRow label="Reference Block Header" value={block.ref_block_prefix.toString()} />
      <BlockTableRow label="Tx Merkel Root" value={block.transaction_merkle_root} />
      <BlockTableRow label="Producer Signature" value={block.producer_signature} />
    </div>
  );
}

BlockInfo.propTypes = {
  block: PropTypes.object,
};

export default BlockInfo;
