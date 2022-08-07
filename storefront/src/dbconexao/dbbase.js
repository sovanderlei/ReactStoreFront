import axios from 'axios'
import { cookieGet } from '../components/Useful';
//import config from './config/config'  


const API_REQUEST_URL = 'http://localhost:8089';//config.config.request.apiServiceUrl; 
const API_REQUEST_COOKIEBEARER = cookieGet();

console.log(API_REQUEST_URL)

export default axios.create({
  baseURL: API_REQUEST_URL,
  headers: {
    "Content-type": "application/json",
    'Authorization': API_REQUEST_COOKIEBEARER
  }
});




