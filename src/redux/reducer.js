import {
  GET_FURNITURE,
  GET_ERROR,
  GET_LOADING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  furnitures: [],
  cart: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_LOADING: {
      return {
        loading: true,
        error: false,
        furnitures: [],
        cart: [],
      };
    }
    case GET_FURNITURE: {
      return {
        loading: false,
        error: false,
        furnitures: payload,
        cart: state.cart,
      };
    }
    case GET_ERROR: {
      return {
        loading: false,
        error: true,
        furnitures: [],
        cart: [],
      };
    }
    case ADD_TO_CART: {
      return {
        loading: false,
        error: false,
        furnitures: state.furnitures,
        cart: payload,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        loading: false,
        error: false,
        furnitures: state.furnitures,
        cart: payload,
      };
    }
    default: {
      return state;
    }
  }
};
