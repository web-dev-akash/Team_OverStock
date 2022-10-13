import { Heading, HStack , Select } from "@chakra-ui/react";

export default function SortDropdown() {
    return (
        <HStack justifyContent="flex-end" m={3}>
            <Heading fontSize={22} fontWeight="normal" marginRight={2}>Sort By: </Heading>
            <Select placeholder='Select option' w={200} >
                <option value='htl'>High to Low</option>
                <option value='lth'>Low to High</option>
                <option value=''>Reset Data</option>
            </Select>
        </HStack >
    )
}