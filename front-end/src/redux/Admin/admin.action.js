import * as types from "./admin.action.type";
import {
  deleteProductAPI,
  getPlywoodAPI,
  postProductAPI,
  updateProductAPI,
} from "./admin.api";

export const getPlywoodProducts = () => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_LOADING });

  try {
    let data = await getPlywoodAPI();

    dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: data });
    // console.log(data)
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_PRODUCT_ERROR });
  }
};
export const updatePlywoodProducts = (prod) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_LOADING });

  try {
    let data = await updateProductAPI(prod);

    dispatch({ type: types.UPDATE_PRODUCT_SUCCESS });
    dispatch(getPlywoodProducts());
    // console.log(data)
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_PRODUCT_ERROR });
  }
};

export const deleteProductProduct = (id) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_LOADING });

  try {
    let data = await deleteProductAPI(id);

    dispatch({ type: types.DELETE_PRODUCT_SUCCESS });
    dispatch(getPlywoodProducts());
    // console.log(data)
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_PRODUCT_ERROR });
  }
};

export const postProduct = (prod) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_LOADING });

  try {
    let data = await postProductAPI(prod);

    dispatch({ type: types.POST_PRODUCT_SUCCESS });
    dispatch(getPlywoodProducts());
    console.log(data);
  } catch (err) {
    // console.log(err)
    dispatch({ type: types.GET_PRODUCT_ERROR });
  }
};
