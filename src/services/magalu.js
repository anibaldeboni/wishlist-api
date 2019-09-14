const axios = require('axios');

const API_URL = 'http://challenge-api.luizalabs.com/api/product';

const magalu = {
  getItem(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  getList(page) {
    return axios.get(`${API_URL}/?page=${page}`);
  },
};

module.exports = magalu;
