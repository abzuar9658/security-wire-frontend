import * as actionTypes from "./types";
import axios from "axios";
import API from "./api";

const loginLoading = () => {
  return {
    type: actionTypes.LOGIN_LOADING,
  };
};

export const login = (body) => async (dispatch) => {
  const { email, password } = body;
  dispatch(loginLoading());
  try {
    const res = await axios.post(`${API}/users/login`, { email, password });
    dispatch({
      type: actionTypes.LOGIN_LOAD_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_LOAD_FAIL,
      payload: error.message,
    });
  }
};

const registerLoading = () => {
  return {
    type: actionTypes.REGISTER_LOADING,
  };
};

export const register = (body) => async (dispatch) => {
  const { email, password, username, passwordConfirmation, role } = body;
  dispatch(registerLoading());
  try {
    const res = await axios.post(`${API}/users/signup`, {
      email,
      userName: username,
      password,
      passwordConfirm: passwordConfirmation,
      role,
    });
    dispatch({
      type: actionTypes.REGISTER_LOAD_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_LOAD_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS,
  };
};
