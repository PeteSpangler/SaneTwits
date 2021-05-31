import axios from 'axios';
import Cookies from 'js-cookie';

const getToken = localStorage.getItem('token');
// const csrftoken = Cookies.get('csrftoken');
const token = `Token ` + JSON.parse(getToken);

const headers = {
  Authorization: token,
  // 'XSRF-TOKEN': csrftoken,
};

const TwitPost = axios.create({
  method: 'post',
  baseURL: 'http://127.0.0.1:8000/',
  headers: headers,
});

export default TwitPost;
