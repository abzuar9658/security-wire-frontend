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
import {
  publicProgramsReducer,
  invitedProgramsReducer,
  submittedProgramsReducer,
  enrolledProgramsReducer,
} from "./researcherReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  createdPrograms: createdProgramsReducer,
  createProgram: createProgramReducer,
  updateProgram: updateProgramReducer,
  deleteProgram: deleteProgramReducer,
  inviteResearchers: inviteResearchersReducer,
  getResearchers: getResearchersReducer,
  publicPrograms: publicProgramsReducer,
  invitedPrograms: invitedProgramsReducer,
  enrolledPrograms: enrolledProgramsReducer,
  submittedPrograms: submittedProgramsReducer,
});

export default rootReducer;
