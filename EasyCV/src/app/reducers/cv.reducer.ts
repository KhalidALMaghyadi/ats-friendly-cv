import { createReducer , on  } from "@ngrx/store";
import { clearCVData ,setCVData } from './../state/cv.actions';

export interface CVState {
    cvData: any;
  }
  
  const initialState: CVState = {
    cvData: null
  };
  
  export const cvReducer = createReducer(
    initialState,
    on(setCVData, (state, { cvData }) => ({ ...state, cvData })),
    on(clearCVData, () => ({ cvData: null }))
  );

  
