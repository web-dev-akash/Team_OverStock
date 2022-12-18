import axios from "axios";

export const postToCartItem = (payload) => {
  return axios.post(
    "https://overstock-api-akash.onrender.com/AddToCartItems",
    payload
  );
};

export const getToCartItem = () => {
  return axios.get("https://overstock-api-akash.onrender.com/AddToCartItems");
};
