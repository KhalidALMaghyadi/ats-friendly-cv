import { createAction, props } from '@ngrx/store';

export const setCVData = createAction(
  '[CV] Set CV Data',
  props<{ cvData: any }>()
);

export const clearCVData = createAction('[CV] Clear CV Data');
