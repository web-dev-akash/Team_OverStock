import { GET_TODO, GET_TODO_ERROR, GET_TODO_LOADING } from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  todos: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING: {
      return {
        loading: true,
        error: false,
        todos: [],
      };
    }
    case GET_TODO: {
      return {
        loading: false,
        error: false,
        todos: payload,
      };
    }
    case GET_TODO_ERROR: {
      return {
        loading: false,
        error: true,
        todos: [],
      };
    }
    default: {
      return state;
    }
  }
};
