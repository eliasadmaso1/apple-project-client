import axios from "axios";

const getAllProducts = async () => {
  try {
    const res = await axios.get(`http://localhost:5000/product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5000/product/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (id, update) => {
  try {
    const res = await axios.put(`http://localhost:5000/product/${id}`, update);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (body) => {
  try {
    const res = await axios.post(`http://localhost:5000/product`, body);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};




export { getAllProducts, addProduct, deleteProduct, updateProduct };
