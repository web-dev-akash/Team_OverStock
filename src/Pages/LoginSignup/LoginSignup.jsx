import { Box, Center, Divider, Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Login from "./Login";
import Signup from "./Signup";

export const LoginSignup = () => {
  return (
    <Center>
      <Flex mt={"180px"} gap={"100px"}>
        <Box>
          <Signup />
        </Box>
        <Center height={"60vh"}>
          <Divider orientation="vertical" />
        </Center>
        <Box>
          <Login />
        </Box>
      </Flex>
    </Center>
  );
};
