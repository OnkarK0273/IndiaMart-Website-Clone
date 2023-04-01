import axios from "axios";
import { baseURL } from "../../utils/variables";

export const getMachineAPI = async () => {
  let res = await axios.get(`${baseURL}/machines`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI0N2E2YjQyYjJmYmQwOTIyMTc3ODMiLCJyb2xlIjoidXNlciIsImlhdCI6MTY4MDM2OTI4MH0.HLvP_o9KZJkVzOJzb2ySqj8UQJS2c80UbcJNBzHbfw0",
    },
  });
  console.log("machine", res.data.data);
  return res?.data;
};

export const updateMachineAPI = async (prod) => {
  // console.log(prod)
  let res = await axios.patch(`${baseURL}/machines/update/${prod._id}`, prod, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data;
};

export const deleteMachineAPI = async (id) => {
  let res = await axios.delete(`${baseURL}/machines/delete/${id}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data;
};

export const postMachineAPI = async (prod) => {
  let res = await axios.post(`${baseURL}/machines/add/`, prod, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res.data;
};

// get admin data

export const getMachineDataAPI = async (role) => {
  let res = await axios.get(`${baseURL}/admin/admindata?role=${role}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data?.users;
};

export const getAdminMachineDataAPI = async (id) => {
  let res = await axios.get(`${baseURL}/admin/${id}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });

  return res?.data?.users;
};

export const updateAdminMachineDataAPI = async (admin) => {
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

export const deleteAdminMachineDataAPI = async (id) => {
  //    console.log(admin)
  let res = await axios.delete(`${baseURL}/admin/deleteAdmin/${id}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });

  return res?.data;
};

export const postAdminMachineDataAPI = async (adminObj) => {
  let res = await axios.post(`${baseURL}/users/register`, adminObj, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  return res?.data;
};

export const getUsersMachineDataAPI = async (role) => {
  let res = await axios.get(`${baseURL}/admin/${role}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });

  return res?.data?.users;
};
