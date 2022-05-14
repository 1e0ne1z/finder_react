const formattedResponse = require('./helpers/formattedResponse');
const axios = require('axios');
require('dotenv').config();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const headers = {
    Authorization: `Bearer ${body.token}`,
  };
  // console.log(headers);
  try {
    const res = await axios.get('http://localhost:5000/users/me', {headers: headers});
    const data = res.data;

    return formattedResponse(200, data);
  } catch (err) {
      console.error(err);
      return formattedResponse(500, { err: 'Something went wrong' });
  }
};