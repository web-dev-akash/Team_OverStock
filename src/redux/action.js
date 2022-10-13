import { GET_FURNITURE, GET_LOADING,GET_ERROR } from "./actionTypes";
import axios from "axios";
export const getFurniture = (data) => ({
  type: GET_FURNITURE,
  payload: data,
});

export const getLoading = (data) => ({
  type: GET_LOADING,
  payload: data,
});

export const getError = (data) => ({
  type: GET_ERROR,
  payload: data,
});


export const getFurnitureData = (payload) => async (dispatch) => {
  return axios
    .post("https://overstock-clone-akash.herokuapp.com/products", payload)
    .then((response) => {
      // dispatch(getFurniture(response));
      console.log(response);
    })
    .catch((err) => {
      console.log(err + "something went wrong");
    });
};
