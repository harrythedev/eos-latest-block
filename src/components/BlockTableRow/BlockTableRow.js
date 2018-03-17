import React from 'react';
import PropTypes from 'prop-types';

const BlockTableRow = ({ label, value }) => (
  <React.Fragment>
    <div className="label-column">
      <p>{label}</p>
    </div>
    <div className="value-column">
      <p>{value}</p>
    </div>
  </React.Fragment>
);

BlockTableRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default BlockTableRow;
