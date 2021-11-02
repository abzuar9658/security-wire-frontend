import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {
  createdProgramsReducer,
  createProgramReducer,
  updateProgramReducer,
  deleteProgramReducer,
  inviteResearchersReducer,
  getResearchersReducer,
} from "./customerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  createdPrograms: createdProgramsReducer,
  createProgram: createProgramReducer,
  updateProgram: updateProgramReducer,
  deleteProgram: deleteProgramReducer,
  inviteResearchers: inviteResearchersReducer,
  getResearchers: getResearchersReducer,
});

export default rootReducer;
