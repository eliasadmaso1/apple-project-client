import {baseUrl} from './utils';
import axios from 'axios';

export const getOrders = async () => {
    try {
      const res = await axios.get(`${baseUrl}/cartProducts`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };


export const getCartProducts = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/cartProducts/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

export const addToCart = async (productId,userId) => {
    try {
      const res = await axios.post(`${baseUrl}/cartProducts/add`, {productId,userId});
      return res;
    } catch (error) {
      console.log(error);
    }
  };

// export const decrementProduct = async(productId,userId)=>{
//     try {
//         const res = await axios.delete(`${baseUrl}/cartProducts/decrement`, {productId,userId});
//         return res;
//       } catch (error) {
//         console.log(`error - ${error}`);
//       }

// };


export const decrementProduct = async(productId,userId)=>{
    const options = {
        method: "DELETE",
        body: JSON.stringify({ productId, userId }),
        headers: { "Content-Type": "application/json" },
      };
      try {
        return fetch(`${baseUrl}/cartProducts/decrement`, options);
      } catch (error) {
        console.log(error);
      }

};




// export const deleteProduct = async(productId,userId)=>{
//     try {
//         const res = await axios.delete(`${baseUrl}/cartProducts/remove`, {productId,userId});
//         return res;
//       } catch (error) {
//         console.log(error);
//       }

// };

export const deleteProduct = async(productId,userId)=>{
    const options = {
        method: "DELETE",
        body: JSON.stringify({ productId, userId }),
        headers: { "Content-Type": "application/json" },
      };
      try {
        return fetch(`${baseUrl}/cartProducts/remove`, options);
      } catch (error) {
        console.log(error);
      }

};