import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Modal.css';

export const Modal = (props) => {
  const { type, toggle } = props;

  const crud = {
    create: async (data) => {
      try {
        const response = await axios({
          method: 'POST',
          url: 'https://crudcrud.com/nutemployee',
          data,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    delete: async () => {
      console.log(type);
    },
    edit: async () => {
      console.log(type);
    },
  };

  const submit = (evt) => {
    evt.preventDefault();
    const { name, birthday, gender, cpf, email, startDate, team } = evt.target;
    const data = {
      name: name['value'],
      birthday: birthday['value'],
      gender: gender['value'],
      cpf: cpf['value'],
      email: email['value'],
      startDate: startDate['value'],
      team: team['value'],
    };
    crud[type](data);
  };

  return (
    <>
      <aside onClick={() => toggle()} />
      <form onSubmit={(evt) => submit(evt)}>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" name="name"  minLength="6" autoFocus />
        </label>
          BirthDay:
        <label htmlFor="birthday">
          <input id="birthday" type="date" name="date" />
        </label>
        <label htmlFor="gender">
          Gender
          <select id="gender" name="gender" defaultValue="male">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label htmlFor="cpf">
          CPF
          <input id="cpf" type="text" name="cpf" maxLength="11" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" type="email" name="email" />
        </label>
        <label htmlFor="startDate">
          Start Date
          <input id="startDate" type="date" name="startDate" />
        </label>
        <label htmlFor="team">
          Team
          <input id="team" type="text" name="team" />
        </label>
        <button>{type}</button>
      </form>
    </>
  );
};

Modal.propTypes = {
  type: PropTypes.string,
  toggle: PropTypes.func,
};
