import axios from 'axios';

const baseURL = 'https://reqres.in/api/';

export default {
  getUsers: (page, perPage) => axios.get(`${baseURL}users?page=${page}&per_page=${perPage}`),
};
