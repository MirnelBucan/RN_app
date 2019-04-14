import axios from 'axios';

export default axios.create({
  baseURL: `https://warm-ridge-58717.herokuapp.com/api/v1/`
});