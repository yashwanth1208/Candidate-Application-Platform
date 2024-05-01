// filterActions.js
import { SET_FILTERS } from '../actionTypes/filterActionTypes';

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters
});
