import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Modal.css';

const teams = ['Mobile', 'Frontend', 'Backend'];

export const Modal = (props) => {
  const {
    type,
    toggle,
    employee = {
      name: '',
      birthday: '',
      gender: '',
      cpf: '',
      email: '',
      startDate: '',
      team: '',
    } } = props;

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
    edit: async (data) => {
      try {
        const response = await axios({
          method: 'POST',
          url: `https://crudcrud.com/nutemployee/${employee.id}`,
          data,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
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
      <form
        onSubmit={(evt) => submit(evt)}
        style={{
          bottom: `${type === 'create' && '3rem'}`,
          right: `${type === 'create' && '3rem'}`,
        }}
      >
        <label htmlFor="name">
          Name
          <input id="name" type="text" name="name" defaultValue={ employee.name } minLength="6" autoFocus />
        </label>
        <label htmlFor="birthday">
          Birthday
          <input id="birthday" type="date" name="birthday" defaultValue={ employee.birthday } />
        </label>
        <label htmlFor="gender">
          Gender
          <select id="gender" name="gender" defaultValue={ employee.gender }>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label htmlFor="cpf">
          CPF
          <input id="cpf" type="text" name="cpf" maxLength="11" defaultValue={ employee.cpf } />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" type="email" name="email" defaultValue={ employee.email } />
        </label>
        <label htmlFor="startDate">
          Start Date
          <input id="startDate" type="date" name="startDate" defaultValue={ employee.startDate } />
        </label>
        <label htmlFor="team">
          Team
          <select id="team" defaultValue={ employee.team}>
            <option>None</option>
            {teams.map((team, index) => (
              <option key={`team-${team}-${index}`} value={team}>{team}</option>
            ))}
          </select>
        </label>
        <button>{type}</button>
      </form>
    </>
  );
};

Modal.propTypes = {
  type: PropTypes.string,
  toggle: PropTypes.func,
  employee: PropTypes.shape(),
};
