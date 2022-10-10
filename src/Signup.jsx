import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Input,
  HStack,
  Checkbox,
  CheckboxGroup,
  Heading,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Divider, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <Box width="40%" ml="10%">
        <Box>
          <Heading fontSize="xl" mt="12%" ml="-30%">
            Create Account
          </Heading>
          <Text mt="12%" ml="-39%">
            Email Address*
          </Text>
          <Input width="322px" mt="3%" placeholder="Email" />
        </Box>

        <Box ml="20%">
          <HStack mt="3%" spacing={14}>
            <Text>Create Password*</Text>
            <Text>Confirm Password*</Text>
          </HStack>
          <HStack mt="3%">
            <Input width="160px" placeholder="Paasword" />
            <Input width="160px" placeholder="Confirm Password" />
          </HStack>
        </Box>
        <Button width="322px" mt="3%" colorScheme="blue">
          Create Account
        </Button>
        <hr width="23px"></hr>
        <Button width="322px" mt="5%" colorScheme="gray">
          Continue as Guest
        </Button>
        <Text mt="4%">
          By creating an account or continuing as a Guest, you
        </Text>
        <Text>agree to our Terms & Conditions and Privacy Policy.</Text>

        <Text mt="3%">Terms & Conditions | Privacy Policy.</Text>
        <Text>**You can unsubscribe at any time</Text>
      </Box>
      <Stack direction="row" h="600px" p={4}>
        <Divider orientation="vertical" />
      </Stack>
    </>
  );
};
// bg="tomato"
export default Signup;
