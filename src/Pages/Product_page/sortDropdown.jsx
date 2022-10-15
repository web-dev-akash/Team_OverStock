import { Heading, HStack, Select } from "@chakra-ui/react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  getFurniture,
  getFurnitureData,
  getFurnitureDataFilter,
  getFurnitureDataWithParams,
  getLoading,
} from "../../redux/action";


export default function SortDropdown({order_set,changeOrder}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [category, setCategory] = useState(searchParams.getAll("category") || []);
  const [brands, setBrands] = useState(searchParams.getAll("brands") || []);

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

  useEffect(()=>{
    dispatch(getLoading())
    if(brands.length && category.length){
        if(order_set !="") {
            getFurnitureDataFilter(category,brands,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
        }else {
            getFurnitureDataFilter(category,brands,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
        }
    }
    else if(brands.length==0)
        if(order_set !="") {
            getFurnitureDataFilter(category,undefined,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
        }else {
            getFurnitureDataFilter(category,undefined,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
        }
    else if(category.length==0) {
        if(order_set !="") {
            getFurnitureDataFilter(undefined,brands,"price",order_set).then((res)=> dispatch(getFurniture(res.data))) 
        }else {
            getFurnitureDataFilter(undefined,brands,undefined,undefined).then((res)=> dispatch(getFurniture(res.data)))
        }
    }else {
      dispatch(getFurnitureData());
    }
},[category,brands])

  useEffect(() =>{
    setSort("price");
    console.log(category,brands);
    const obj = {
      sort,
      order
    }
    if(brands.length > 0) {
      obj.brands = brands;
    }
    if(category.length > 0) {
      obj.category = category;
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



