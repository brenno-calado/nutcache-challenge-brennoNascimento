import axios from 'axios';

export default {
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
  delete: async (id) => {
    try {
      const response = await axios({
        method: 'DELETE',
        url: `https://crudcrud.com/nutemployee/${id}`,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
  edit: async (data) => {
    try {
      const response = await axios({
        method: 'PUT',
        url: `https://crudcrud.com/nutemployee/${data.id}`,
        data,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
};
