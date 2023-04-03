import * as types from "./machineadmin.action.type";
import {
  getMachineAPI,
  updateMachineAPI,
  deleteMachineAPI,
  postMachineAPI,
  getMachineDataAPI,
  updateAdminMachineDataAPI,
  deleteAdminMachineDataAPI,
  postAdminMachineDataAPI,
  getUsersMachineDataAPI,
} from "./machineadmin.api";

export const getMachine = () => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await getMachineAPI();

    console.log("Machine", data.data);
    dispatch({ type: types.GET_MACHINE_SUCCESS, payload: data });
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};

export const updateMachine = (prod) => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await updateMachineAPI(prod);

    dispatch({ type: types.UPDATE_MACHINE_SUCCESS });
    dispatch(getMachine());
    // console.log(data)
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};

export const deleteMachine = (id) => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await deleteMachineAPI(id);

    dispatch({ type: types.DELETE_MACHINE_SUCCESS });
    dispatch(getMachine());
    // console.log(data)
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};

export const postMachine = (prod) => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await postMachineAPI(prod);

    dispatch({ type: types.POST_MACHINE_SUCCESS });
    dispatch(getMachine());
    // console.log(data);
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};

export const getAdminMachineData = (role) => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await getMachineDataAPI(role);
    // console.log(data);
    dispatch({ type: types.GET_ADMINS_MACHINE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};

export const updateAdminMachineData = (admin) => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await updateAdminMachineDataAPI(admin);
    // console.log("data", data);
    // dispatch({type:types.GET_ADMINS_SUCCESS,payload:data})
    dispatch(getAdminMachineData("admin"));
  } catch (err) {
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};

export const deleteAdminMachineData = (id) => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await deleteAdminMachineDataAPI(id);
    // console.log("data", data);
    // dispatch({type:types.GET_ADMINS_SUCCESS,payload:data})
    dispatch(getAdminMachineData("admin"));
  } catch (err) {
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};

export const postAdminData = (adminObj) => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await postAdminMachineDataAPI(adminObj);
    // console.log("data", data);
    // dispatch({type:types.GET_ADMINS_SUCCESS,payload:data})
    dispatch(getAdminMachineData("admin"));
  } catch (err) {
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};

export const getUsersData = (role) => async (dispatch) => {
  dispatch({ type: types.GET_MACHINE_LOADING });

  try {
    let data = await getUsersMachineDataAPI(role);
    // console.log(data);
    dispatch({ type: types.GET_USERS_MACHINE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: types.GET_MACHINE_ERROR });
  }
};
