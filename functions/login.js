const formattedResponse = require('./helpers/formattedResponse');
const axios = require('axios');
require('dotenv').config();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const user = {
    'email' : body.email,
    'password' : body.password
  };
  // console.log(user);
  try {
    const res = await axios.post('http://localhost:5000/users/login', user);
    const data = res.data;

    return formattedResponse(200, data);
  } catch (err) {
      console.error(err);
      return formattedResponse(500, { err: 'Something went wrong' });
  }
};