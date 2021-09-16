import React, { useState } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import { Modal } from '../../Modal/Modal';
import './GridItem.css';

const GridItem = ({ employee }) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <li className="employee" id={ employee.id }>
        <section>
          <button aria-label="edit" className="edit" onClick={() => setEditModal( !editModal )}>
            <img alt="edit" aria-label="edit" src="/edit.png" width="30px" />
          </button>
          <button aria-label="delete" className="delete" onClick={() => setDeleteModal( !deleteModal )}>
            <img alt="delete" aria-label="delete" src="/delete.png" width="30px" />
          </button>
          <img
            className="portrait"
            alt={` portrait of ${employee.name}`}
            aria-label={` portrait of ${employee.name}`}
            src="/person.jpeg"
            width="80px"
          />
        </section>
        <p>{ employee.name }</p>
        <p>{ employee.email}</p>
        <time>{employee.startDate}</time>
        <p>{ employee.team }</p>
      </li>
      {!editModal ?
        null
        : <Modal type="edit" toggle={() => setEditModal(false)} employee={ employee } />
      }
      {
        !deleteModal ?
          null
          : <Modal type="delete" toggle={() => setDeleteModal(false)} employee={ employee } />
      }
    </>
  );
};

GridItem.defaultProps = {
  employee: undefined,
};

GridItem.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    startDate: PropTypes.string,
    team: PropTypes.string,
  }).isRequired,
};

export default GridItem;
