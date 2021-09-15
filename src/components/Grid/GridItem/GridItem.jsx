import React from 'react';
import PropTypes from 'prop-types';
import './GridItem.css';

const GridItem = ({ employee }) => (
  <li className="employee">
    <p>{ employee.name }</p>
    <p>{ employee.email}</p>
    <time>{employee.startDate}</time>
    <p>{ employee.team }</p>
    <button>Edit</button>
    <button>Delete</button>
  </li>
);

GridItem.propTypes = {
  employee: PropTypes.shape(PropTypes.string).isRequired,
};

export default GridItem;
