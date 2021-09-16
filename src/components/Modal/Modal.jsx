import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export const Modal = (props) => {
  const { toggle } = props;
  return (
    <>
      <aside onClick={() => toggle()} />
      <form onSubmit={(evt) => evt.preventDefault() }>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" minLength="6" required autoFocus />
        </label>
          BirthDay:
        <label htmlFor="date">
          <input type="date" id="date" required />
        </label>
        <label htmlFor="gender">
          Gender
          <select id="gender" defaultValue="male">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label htmlFor="cpf">
          CPF
          <input id="cpf" type="text" maxLength="11" required />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" required />
        </label>
        <label htmlFor="startDate">
          Start Date
          <input id="startDate" type="date" required />
        </label>
        <label htmlFor="team">
          Team
          <input id="team" type="text" />
        </label>
        <button>Create</button>
      </form>
    </>
  );
};

Modal.propTypes = {
  toggle: PropTypes.func,
};
