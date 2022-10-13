import { GET_FURNITURE,GET_ERROR,GET_LOADING } from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  furnitures: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_LOADING: {
      return {
        loading: true,
        error: false,
        furnitures: [],
      };
    }
    case GET_FURNITURE: {
      return {
        loading: false,
        error: false,
        furnitures: payload,
      };
    }
    case GET_ERROR: {
      return {
        loading: false,
        error: true,
        furnitures: [],
      };
    }
    default: {
      return state;
    }
  }
};
