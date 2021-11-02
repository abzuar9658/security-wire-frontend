import * as actionTypes from "./types";
import axios from "axios";
import API from "./api";
const programsLoading = () => {
  return {
    type: actionTypes.LOADING_CREATED_PROGRAMS,
  };
};

export const loadCreatedPrograms = () => async (dispatch) => {
  dispatch(programsLoading());
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await axios.get(`${API}/programs/`, config);
    dispatch({
      type: actionTypes.LOAD_CREATED_PROGRAMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_CREATED_PROGRAMS_FAIL,
      payload: error.message,
    });
  }
};

const createProgramLoading = () => {
  return {
    type: actionTypes.CREATE_NEW_PROGRAM_LOADING,
  };
};
export const createNewProgram = (body) => async (dispatch) => {
  dispatch(createProgramLoading());
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await axios.post(`${API}/programs/create`, body, config);
    dispatch({
      type: actionTypes.CREATE_NEW_PROGRAM_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_NEW_PROGRAM_FAIL,
      payload: error.message,
    });
  }
};

export const clearSuccess = () => {
  return {
    type: actionTypes.CLEAR_CREATE_PROGRAM_SUCCESS,
  };
};

const updateProgramLoading = () => {
  return {
    type: actionTypes.UPDATE_PROGRAM_LOADING,
  };
};

export const updateProgram = (program) => async (dispatch) => {
  console.log("PROGRAM UPDATE: ", program);
  dispatch(updateProgramLoading());
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await axios.patch(
      `${API}/programs/${program._id}`,
      program,
      config
    );
    dispatch(loadCreatedPrograms());
    dispatch({
      type: actionTypes.UPDATE_PROGRAM_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PROGRAM_FAIL,
      payload: error.message,
    });
  }
};

const deleteProgramLoading = () => {
  return {
    type: actionTypes.DELETE_PROGRAM_LOADING,
  };
};
export const clearDeletedProgram = () => {
  return {
    type: actionTypes.CLEAR_DELETE_PROGRAM_SUCCESS,
  };
};
export const deleteProgram = (id) => async (dispatch) => {
  dispatch(deleteProgramLoading());
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await axios.delete(`${API}/programs/${id}`, config);
    dispatch({
      type: actionTypes.DELETE_PROGRAM_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_PROGRAM_FAIL,
      payload: error.message,
    });
  }
};

const inviteResearchersLoading = () => {
  return {
    type: actionTypes.INVITE_RESEARCHERS_LOADING,
  };
};

export const inviteResearchers = (body, programId) => async (dispatch) => {
  dispatch(inviteResearchersLoading());
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await axios.patch(
      `${API}/programs/${programId}/invites`,
      body,
      config
    );
    dispatch({
      type: actionTypes.INVITE_RESEARCHERS_SUCCESS,
      payload: res.data,
    });
    dispatch(loadCreatedPrograms());
  } catch (error) {
    dispatch({
      type: actionTypes.INVITE_RESEARCHERS_FAIL,
      payload: error.message,
    });
  }
};

export const getSecurityResearchers = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_RESEARCHERS_LOADING });
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    let res = await axios.get(`${API}/users/securityResearchers`, config);
    res = res.data;
    if (res !== null) {
      dispatch({
        type: actionTypes.GET_RESEARCHERS_SUCCESS,
        payload: res,
      });
      return res.data;
    }
    throw new Error("something went wrong!");
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: actionTypes.GET_RESEARCHERS_FAIL,
      payload: error.message,
    });
    return error;
  }
};
