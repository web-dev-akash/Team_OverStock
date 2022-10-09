import { Heading, Text } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Box,Button,Link } from "@chakra-ui/react"
const Login=()=>{
    return <>
    <Box>
    
      <Heading fontSize="xl">Sign In</Heading>
      <Text>Email Address*</Text>
      <Input  width='322px' placeholder='Email' />
      <Text>Password*</Text>
      <Input  width='322px' placeholder='Paasword' />
      <hr width="23px"></hr>
      <Button  width='322px' colorScheme='green'>Sign In</Button>
      <br></br>
      <Link>Forgot your password?</Link>
    </Box>
    </>
}

export default Login