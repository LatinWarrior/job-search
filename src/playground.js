const axios = require('axios');

const url = 'http://localhost:3000/jobs';

const fetchJobsV1 = () => {
  axios.get(url).then((response) => {
    console.log(response.data);
  });
};

const fetchJobsV2 = async () => {
  const response = axios.get(url);

};

fetchJobsV1();