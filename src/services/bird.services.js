import axios from 'axios';

const BASE_URL = 'https://aves.ninjas.cl/api/birds';

function getName(name) {
  return axios.get(`${BASE_URL}/pokemon/${name}`).then((result) => {
    return result.data;
  });
}

export {getDetails };
