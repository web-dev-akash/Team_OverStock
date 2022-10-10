import { Heading, Text } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Box,Button,Link } from "@chakra-ui/react"
const Login=()=>{
    return <>
    <Box  width="40%">
    
      <Heading fontSize="xl"  mt="12%" ml="-30%">Sign In</Heading>
      <Text mt="12%"  ml="-39%">Email Address*</Text>
      <Input mt="3%" width='322px' placeholder='Email' />
      <Text mt="3%" ml="-45%">Password*</Text>
      <Input mt="3%"  width='322px' placeholder='Paasword' />
      <hr width="23px"></hr>
      <Button mt="7%" width='322px' colorScheme='green'>Sign In</Button>
      <br></br>
      <Link mt="8%" color="blue">Forgot your password?</Link>
    </Box>
    </>
}

export default Login