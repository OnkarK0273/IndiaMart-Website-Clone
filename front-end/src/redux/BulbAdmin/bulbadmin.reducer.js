import * as types from "./bulbadmin.action.type";

const initalState = {
  isLoading: false,
  isError: true,
  bulbs: [],
  users: [],
};

export const bulbReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.GET_BULB_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GET_BULB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        bulbs: payload,
      };
    case types.DELETE_BULB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.POST_BULB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.UPDATE_BULB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.GET_BULB_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default: {
      return state;
    }
  }
};
