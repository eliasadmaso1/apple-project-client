import { getServerBaseUrl } from "./utils";
import axios from "axios";

const getAllUsers = async () => {
  try {
    const res = await axios.get(`${getServerBaseUrl}/users`);
    console.log(res);
    return res;

  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async(id) => {
  try {
    const res = await axios.delete(`${getServerBaseUrl}/users/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async(id) => {
  try {
    const res = await axios.put(`${getServerBaseUrl}/users/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, deleteUser, updateUser };
