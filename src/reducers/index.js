import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { createdProgramsReducer } from "./createdProgramsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  createdPrograms: createdProgramsReducer,
});

export default rootReducer;
