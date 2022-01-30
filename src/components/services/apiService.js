import axios from 'axios';

const baseUrl = 'http://ongapi.alkemy.org/api/';

export const registerService = async (name, email, password) => {
  const response = await axios({
    method: 'POST',
    url: baseUrl + 'register',
    data: {
      name: name,
      email: email,
      password: password,
    },
  }).then(res => res.data);
  return response.data.user;
};
