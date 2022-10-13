import { Heading, HStack , Select } from "@chakra-ui/react";

export default function SortDropdown() {
    return (
        <HStack justifyContent="flex-end" m={3}>
            <Heading fontSize={22} fontWeight="normal" marginRight={2}>Sort By: </Heading>
            <Select placeholder='Select option' w={200} >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </HStack >
    )
}