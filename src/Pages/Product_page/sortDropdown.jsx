import { Heading, HStack, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFurniture,
  getFurnitureData,
  getFurnitureDataWithParams,
  getLoading,
} from "../../redux/action";

export default function SortDropdown() {
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (order !== "") {
      dispatch(getLoading());
      getFurnitureDataWithParams({ _sort: "price", _order: order }).then(
        (res) => {
          dispatch(getFurniture(res.data));
        }
      );
    } else {
      getFurnitureData();
    }
  }, [order]);

  const handleSort = (e) => {
    setOrder(e.target.value);
  };
  //   console.log(order);
  return (
    <HStack justifyContent="flex-end" m={3}>
      <Heading fontSize={22} fontWeight="normal" marginRight={2}>
        Sort By:{" "}
      </Heading>
      <Select placeholder="Select option" w={200} onChange={handleSort}>
        <option value="desc">Price : High to Low</option>
        <option value="asc">Price : Low to High</option>
      </Select>
    </HStack>
  );
}
