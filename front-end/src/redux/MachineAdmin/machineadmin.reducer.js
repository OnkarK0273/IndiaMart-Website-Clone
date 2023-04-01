import * as types from "./machineadmin.action.type";

const initalState = {
  isLoading: false,
  isError: true,
  machins: [],
  users: [],
  admins: [],
};

export const machineReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.GET_MACHINE_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GET_MACHINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        machins: payload,
      };
    case types.DELETE_MACHINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.POST_MACHINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.UPDATE_MACHINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.GET_MACHINE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_ADMINS_MACHINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        admins: payload,
      };
    case types.GET_USERS_MACHINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: payload,
      };

    default: {
      return state;
    }
  }
};
