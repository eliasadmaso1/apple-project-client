import axios from "axios";

// MacBooks Manage //////////////////////////////////////////////////////

const getAllMacs = async () => {
  try {
    const res = await axios.get(`http://localhost:5000/macs`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteMac = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5000/macs/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const updateMac = async (id, update) => {
  try {
    const res = await axios.put(`http://localhost:5000/macs/${id}`, update);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const addMac = async (body) => {
  try {
    const res = await axios.post(`http://localhost:5000/macs`, body);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// iPads Manage /////////////////////////////////////////////////////////////////

const getAllIPads = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/iPads`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteIPad = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/iPads/${id}`);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const updateIPad = async (id, update) => {
    try {
      const res = await axios.put(`http://localhost:5000/iPads/${id}`, update);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  
  const addIPad = async (body) => {
    try {
      const res = await axios.post(`http://localhost:5000/iPads`, body);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

// iPhones Manage ///////////////////////////////////////////////////////////////////

const getAllIPhones = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/iPhones`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteIPhone = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/iPhones/${id}`);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const updateIPhone = async (id, update) => {
    try {
      const res = await axios.put(`http://localhost:5000/iPhones/${id}`, update);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  
  const addIPhone = async (body) => {
    try {
      const res = await axios.post(`http://localhost:5000/iPhones`, body);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

// AirPods Manage /////////////////////////////////////////////////////////////////////////////

const getAllAirPods = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/airPods`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAirPods = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/airPods/${id}`);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const updateAirPods = async (id, update) => {
    try {
      const res = await axios.put(`http://localhost:5000/airPods/${id}`, update);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  
  const addAirPods = async (body) => {
    try {
      const res = await axios.post(`http://localhost:5000/airPods`, body);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    const macs = await getAllMacs();
    const iPads = await getAllIPads();
    const iPhones = await getAllIPhones();
    const AirPods = await getAllAirPods();
  
    return [...macs, ...AirPods,...iPads,...iPhones];
  };


export { getAllMacs, getAllIPhones, getAllIPads, getAllAirPods, addMac, addIPhone, addIPad, addAirPods, deleteMac, deleteIPhone, deleteIPad, deleteAirPods, updateMac, updateIPhone, updateIPad, updateAirPods, getAllProducts };
