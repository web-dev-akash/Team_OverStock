import { GET_TODO, GET_TODO_ERROR, GET_TODO_LOADING } from "./actionTypes";

export const getTodo = (data) => ({
  type: GET_TODO,
  payload: data,
});
export const getLoading = () => ({
  type: GET_TODO_LOADING,
});
export const getError = () => ({
  type: GET_TODO_ERROR,
});
