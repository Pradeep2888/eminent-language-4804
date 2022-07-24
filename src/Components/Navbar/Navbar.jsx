import React from 'react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Image,Input,InputGroup,InputLeftElement,IconButton } from '@chakra-ui/react'

function Navbar() {
  return (
    // <div>
     <Box border='1px' borderColor="red"  w='100%' h="60px" p={0} >
    <Grid display="flex" gap={6}>

        <Box border='1px' borderColor="red">
        
        </Box>

        <Box border='1px' borderColor="red"  h="40px" w="6%">
        <Image  h="30px" w="100%"  src='https://static.toiimg.com/thumb/msid-73980157,imgsize-64943,width-400,resizemode-4/73980157.jpg' alt='Dan Abramov' />
        </Box>

        <Box border='1px' borderColor="red" w="40%">
                <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<Image src="https://cdn-icons.flaticon.com/png/128/2811/premium/2811806.png?token=exp=1658412857~hmac=8b17712daa59a1ed5832ecd65891e909"/>}
                />
                <Input borderRadius="20px" borderColor="grey" type='tel' placeholder='Search Artists, Songs, Albums' />
                </InputGroup>
        </Box>

        <Box border='2px'  borderColor="red" borderRadius="20px" width="10%" h="30px" color="red"  textAlign="center" >Go Add Free</Box>

        <Box border='2px'  borderColor="red" borderRadius="20px" width="10%" h="30px" color="red"  textAlign="center" >Get Gaana Plus</Box>

        <Box border='1px' borderRadius="30px" borderColor="black"  h="40px" w="4%" >
        <Image  h="40px" w="100%" borderRadius="30px" src='https://a10.gaanacdn.com/images/users/724/crop_110x110_212161724.jpg'/>
        </Box>

        <Box border='1px' borderColor="red" >
        
        </Box>

    </Grid>
    </Box>
    // </div>
  )
}

export default Navbar