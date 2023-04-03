import * as types from "./bulbadmin.action.type";
import {
  deleteBulbAPI,
  getBulbAPI,
  postBulbAPI,
  updateBulbAPI,
} from "./bulbadmin.api";

export const getBulb = () => async (dispatch) => {
  dispatch({ type: types.GET_BULB_LOADING });

  try {
    let data = await getBulbAPI();

    console.log("bulb", data);
    dispatch({ type: types.GET_BULB_SUCCESS, payload: data?.data });
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_BULB_ERROR });
  }
};
export const updateBulb = (prod) => async (dispatch) => {
  dispatch({ type: types.GET_BULB_LOADING });

  try {
    let data = await updateBulbAPI(prod);

    dispatch({ type: types.UPDATE_BULB_SUCCESS });
    dispatch(getBulb());
    // console.log(data)
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_BULB_ERROR });
  }
};

export const deleteBulb = (id) => async (dispatch) => {
  dispatch({ type: types.GET_BULB_LOADING });

  try {
    let data = await deleteBulbAPI(id);

    dispatch({ type: types.DELETE_BULB_SUCCESS });
    dispatch(getBulb());
    // console.log(data)
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_BULB_ERROR });
  }
};

export const postBulb = (prod) => async (dispatch) => {
  dispatch({ type: types.GET_BULB_LOADING });

  try {
    let data = await postBulbAPI(prod);

    dispatch({ type: types.POST_BULB_SUCCESS });
    dispatch(getBulb());
    console.log(data);
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_BULB_ERROR });
  }
};
