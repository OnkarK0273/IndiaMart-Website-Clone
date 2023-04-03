import axios from "axios";
import { baseURL } from "../../utils/variables";

export const getBulbAPI = async () => {
  let res = await axios.get(`${baseURL}bulbs`, {
    headers: {
      "Content-Type": "application/json",
      token:sessionStorage.getItem('token')  
     },
  });
  console.log("bulb", res?.data);
  return res?.data;
};

export const updateBulbAPI = async (prod) => {
  // console.log(prod)
  let res = await axios.patch(`${baseURL}bulbs/update/${prod._id}`, prod, {
    headers: {
      "Content-Type": "application/json",
      token: sessionStorage.getItem('token')  ,
    },
  });
  return res.data;
};

export const deleteBulbAPI = async (id) => {
  let res = await axios.delete(`${baseURL}bulbs/delete/${id}`, {
    headers: {
      "Content-Type": "application/json",
      token:sessionStorage.getItem('token')  ,
    },
  });
  return res.data;
};

export const postBulbAPI = async (prod) => {
  let res = await axios.post(`${baseURL}bulbs/add/`, prod, {
    headers: {
      "Content-Type": "application/json",
      token: sessionStorage.getItem('token')  ,
    },
  });
  return res.data;
};
