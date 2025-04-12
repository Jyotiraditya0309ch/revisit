import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://revisit-hcnv.onrender.com/api/',
});

export default axiosInstance;
