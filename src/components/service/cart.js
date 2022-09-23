import {baseUrl} from './utils';
import axios from 'axios';

export const getCartProducts = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/cartProducts/${id}`);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

export const addToCart = async (productId,userId) => {
    try {
      const res = await axios.post(`${baseUrl}/cartProducts/add`, {productId,userId});
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };