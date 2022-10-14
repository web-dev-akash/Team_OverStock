import { Heading, HStack, Select } from "@chakra-ui/react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  getFurniture,
  getFurnitureData,
  getFurnitureDataWithParams,
  getLoading,
} from "../../redux/action";

let order_new;

export default function SortDropdown({order_set,changeOrder}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  useEffect(() => {
    if (order !="") {
      dispatch(getLoading());
      getFurnitureDataWithParams({ _sort: "price", _order: order }).then(
        (res) => {
          dispatch(getFurniture(res.data));
        }
      );
    }
    else {
      dispatch(getLoading());
      dispatch(getFurnitureData());
    }
  }, [order]);

  useEffect(() =>{
    setSort("price");
    const obj = {
      sort,
      order
    }
    if(order !="")  setSearchParams(obj)
    else setSearchParams("");
    
    changeOrder(order);
  },[order])

  const handleSort = (e) => {
    console.log(e.target.value);
    setOrder(e.target.value);
  };
  return (
    <HStack justifyContent="flex-end" m={3}>
      <Heading fontSize={22} fontWeight="normal" marginRight={2}>
        Sort By:{" "}
      </Heading>
      <Select w={200} onChange={handleSort}>
        <option value="">Select option</option>
        <option value="desc">Price : High to Low</option>
        <option value="asc">Price : Low to High</option>
      </Select>
    </HStack>
  );
}



