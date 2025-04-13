import axios from 'axios';

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:5000/api",
=======
  baseURL: 'https://revisit-hcnv.onrender.com/api/',
>>>>>>> 10e4ff89ce35a98458f909a9fcc06aff80d4c364
});

export default axiosInstance;
