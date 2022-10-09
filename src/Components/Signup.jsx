import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input,HStack, Checkbox, CheckboxGroup,Heading} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
const Signup = () => {
  return <>
    
    <Box>
    <Heading fontSize="xl">Create Account</Heading>
      <Text>Email Address*</Text>
      <Input  width='322px' placeholder='Email' />
    </Box>

    <HStack spacing={8}>
      <Text>Create Password*</Text>
      <Text>Confirm Password*</Text>
    </HStack>
    <HStack>
    <Input  width='170px' placeholder='Paasword' />
    <Input  width='170px' placeholder='Confirm Password' />
    </HStack>
    {/* <Box w='322px' h='60px' bg='gray.100'> */}
    {/* <Checkbox mr="180px" defaultChecked>
      
    </Checkbox>
    <Text>Sign up today for exclusive offers from Overstock.com delivered right to your inbox**</Text>
  </Box> */}
  <Button  width='322px' colorScheme='blue'>Create Account</Button>
 <hr width="23px"></hr>
  <Button  width='322px' colorScheme='gray'>Continue as Guest</Button>
  <Text>By creating an account or continuing as a Guest, you</Text>
    
    <Text> agree to our Terms & Conditions and Privacy Policy.</Text>

<Text>Terms & Conditions | Privacy Policy.

**You can unsubscribe at any time</Text>
  </>
};
// bg="tomato"
export default Signup;
