import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://my-togo-yupi-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;