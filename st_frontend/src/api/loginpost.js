import axios from 'axios';
// import { API_URL } from "@env";

export const loginpost = axios.create({
  method: 'post',
  baseURL: 'http://127.0.0.1:8000/api-token-auth/',
});

export default loginpost;
