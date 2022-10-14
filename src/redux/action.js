import { GET_FURNITURE, GET_LOADING, GET_ERROR } from "./actionTypes";
import axios from "axios";
export const getFurniture = (data) => ({
  type: GET_FURNITURE,
  payload: data,
});

export const getLoading = () => ({
  type: GET_LOADING,
});

export const getError = () => ({
  type: GET_ERROR,
});

export const getFurnitureData = () => async (dispatch) => {
  dispatch(getLoading());
  return axios
    .get("https://overstock-clone-akash.herokuapp.com/products")
    .then((response) => {
      dispatch(getFurniture(response.data));
    })
    .catch((err) => {
      dispatch(getError());
    });
};

export const getFurnitureDataWithParams = ({ _sort, _order }) => {
  return axios.get(`https://overstock-clone-akash.herokuapp.com/products`, {
    params: {
      _sort,
      _order,
    },
  });
};
