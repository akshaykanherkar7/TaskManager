import * as types from "./authActionTypes";
import axios from "axios";

export const loginAPI = (loginData) => (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST});
    return axios.post("http://localhost:8080/user-manager/api/user/login", loginData)
    .then((res) => {
        dispatch({type: types.LOGIN_SUCCESS, payload: res.data})
        return types.LOGIN_SUCCESS;
    })
    .catch((err) => {
        dispatch({type: types.LOGIN_FAIL, payload: err.message})
    })
}

export const registerAPI = (data) => (dispatch) => {
    dispatch({type: types.REGISTER_REQUEST});
    return axios.post("http://localhost:8080/user-manager/api/user/register", data)
    .then((res) => {
        dispatch({type: types.REGISTER_SUCCESS, payload: res.data})
        return types.REGISTER_SUCCESS
    })
    .catch((err) => {
        dispatch({type: types.REGISTER_FAIL, payload: err.message})
    })
}