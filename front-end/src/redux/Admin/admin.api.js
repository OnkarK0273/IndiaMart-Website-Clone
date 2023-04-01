import axios from "axios";
import { baseURL } from "../../utils/variables";

export const getPlywoodAPI = async () => {
  let res = await axios.get(`${baseURL}/plywood`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data?.data;
};

export const getSinglePlywoodAPI = async (id) => {
  let res = await axios.get(`${baseURL}/plywood/${id}`);
};

export const updateProductAPI = async (prod) => {
  // console.log(prod)
  let res = await axios.patch(`${baseURL}/plywood/update/${prod._id}`, prod, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data;
};

export const deleteProductAPI = async (id) => {
  let res = await axios.delete(`${baseURL}/plywood/delete/${id}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data;
};

export const postProductAPI = async (prod) => {
  let res = await axios.post(`${baseURL}/plywood/add/`, prod, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data;
};

// get admin data

export const getAdminsDataAPI = async (role) => {
  let res = await axios.get(`${baseURL}/admin/admindata?role=${role}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data?.users;
};

export const getAdminDataAPI = async (id) => {
  let res = await axios.get(`${baseURL}/admin/${id}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });

  return res?.data?.users;
};

export const updateAdminDataAPI = async (admin) => {
  //    console.log(admin)
  let res = await axios.patch(
    `${baseURL}/admin/updateAdmin/${admin._id}`,
    admin,
    {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    }
  );

  return res?.data;
};
export const deleteAdminDataAPI = async (id) => {
  //    console.log(admin)
  let res = await axios.delete(`${baseURL}/admin/deleteAdmin/${id}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });

  return res?.data;
};

export const postAdminDataAPI = async (adminObj) => {
  let res = await axios.post(`${baseURL}/users/register`, adminObj, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data;
};

export const getUsersDataAPI = async (role) => {
  let res = await axios.get(`${baseURL}/admin/usersdata?${role}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });

  return res?.data?.users;
};
