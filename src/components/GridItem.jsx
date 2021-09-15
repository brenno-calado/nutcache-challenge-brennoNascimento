import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({ employee }) => (
  <li>
    <p>{ employee.name }</p>
    <p>{ employee.email}</p>
    <time>{employee.startDate}</time>
    <p>{ employee.team }</p>
  </li>
);

GridItem.propTypes = {
  employee: PropTypes.shape(PropTypes.string).isRequired,
};

export default GridItem;
