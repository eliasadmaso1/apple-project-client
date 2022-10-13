import axios from "axios";
import {baseUrl} from './utils';


const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/users`);
    return res.data;

  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async(id) => {
  try {
    const res = await axios.delete(`${baseUrl}/users/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async(id,update) => {
  try {
    const res = await axios.put(`${baseUrl}/users/${id}`,update);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, deleteUser, updateUser };
