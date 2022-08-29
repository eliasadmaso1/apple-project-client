import axios from "axios";

const getAllUsers = async () => {
  try {
    const res = await axios.get(`http://localhost:5000/users`);
    return res.data;

  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async(id) => {
  try {
    const res = await axios.delete(`http://localhost:5000/users/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async(id,update) => {
  try {
    const res = await axios.put(`http://localhost:5000/users/${id}`,update);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, deleteUser, updateUser };
