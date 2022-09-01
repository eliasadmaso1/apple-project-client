import axios from "axios";

const getAllProducts = async () => {
  try {
    const res = await axios.get(`https://apple-project-server.herokuapp.com/product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`https://apple-project-server.herokuapp.com/product/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (id, update) => {
  try {
    const res = await axios.put(`https://apple-project-server.herokuapp.com/product/${id}`, update);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (body) => {
  try {
    const res = await axios.post(`https://apple-project-server.herokuapp.com/product`, body);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};




export { getAllProducts, addProduct, deleteProduct, updateProduct };
