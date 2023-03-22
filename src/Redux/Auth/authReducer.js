import * as types from "./authActionTypes";

const initialState = {
  isAuth: false,
  isError: false,
  isLoading: false,
  token: "",
  errorMsg: "",
  userData: []
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isAuth: false, isError: false, isLoading: true };
    }

    case types.LOGIN_SUCCESS: {
        return {...state, isAuth: true, isError: false, isLoading: false, token: payload.token};
    }

    case types.LOGIN_FAIL: {
        return {...state, isAuth: false, isError: true, isLoading: false, errorMsg: payload }
    }

    case types.REGISTER_REQUEST: {
        return {...state, isError: false, isLoading: true}
    }

    case types.REGISTER_SUCCESS: {
        return {...state, isError: false, isLoading: false, userData: payload}
    }

    case types.REGISTER_FAIL: {
        return {...state, isError: true, isLoading: false}
    }

    default:
      return state;
  }
};
