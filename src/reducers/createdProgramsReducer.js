import * as actionTypes from "../actions/types";
const initial_state = {
  data: [],
  isLoading: null,
  isSuccess: null,
  isError: null,
  errorMessage: null,
};

export const createdProgramsReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOADING_CREATED_PROGRAMS:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOAD_CREATED_PROGRAMS_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isSuccess: true,
        isLoading: false,
        isError: false,
      };
    case actionTypes.LOAD_CREATED_PROGRAMS_FAIL:
      return {
        ...state,
        data: null,
        isSuccess: false,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };

    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        isError: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};
