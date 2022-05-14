const formattedResponse = require('./helpers/formattedResponse');
const axios = require('axios');
require('dotenv').config();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const user = {
    'firstName' : body.name,
    'lastName' : body.lastName,
    'enterpriseName' : body.enterpriseName,
    'email' : body.email,
    'password' : body.password,
    'isEnterprise' : body.isEnterprise,
  };
  // console.log(user);
  try {
    const res = await axios.post('http://localhost:5000/users/', user);
    const data = res.data;

    if(data.parent){
      throw new Error(data.parent.detail);
    } else if(data.errors){
      throw new Error(data.errors[0].message);
    }

    return formattedResponse(200, data);
  } catch (err) {
      console.log((err + ""));
      return formattedResponse(500, { error: err + "" });
  }
};