import React from 'react';
import PropTypes from 'prop-types';


const BlockInfo = ({ block }) => {
  if (!block) return null;
  console.log(block);
  return (
    <div>
      <p>Block Number: {block.block_num}</p>
      <p>Producer: {block.producer}</p>
    </div>
  );
}

BlockInfo.propTypes = {
  block: PropTypes.object,
};

export default BlockInfo;
