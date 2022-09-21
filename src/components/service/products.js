import axios from "axios";
import {baseUrl} from './utils';

const getAllProducts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/product/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (id, update) => {
  try {
    const res = await axios.put(`${baseUrl}/product/${id}`, update);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/product`, body);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};




export { getAllProducts, addProduct, deleteProduct, updateProduct };
