import {baseUrl} from './utils';
import axios from 'axios';

export const userRegisteraion = async(firstName, lastName, userName, email, password)=>{
    try {
        return axios.post(`${baseUrl}/auth/registration`,{ firstName, lastName, userName, email, password })
      } catch (error) {
        console.log(error);
      }

}

export const userLogin = async(email,password)=>{
  try {
    return axios.post(`${baseUrl}/auth/login`,{ email, password })
  } catch (error) {
    console.log(error);
  }

}

