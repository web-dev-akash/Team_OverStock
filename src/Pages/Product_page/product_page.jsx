import { Badge, Box, Image, Icon, Container, Center } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons"
import { Grid, GridItem } from '@chakra-ui/react'
import { useState } from 'react';

function AirbnbCard() {
    const [isHovered, setIsHovered] = useState(false);
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW='sm' borderWidth='1px' overflow='hidden' onMouseEnter={() => {
            setIsHovered(true);
          }}  onMouseLeave={() => {
            setIsHovered(false);
          }}>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6' pl={1}>
                <Box
                    fontWeight='semibold'
                    as='h3'
                    lineHeight='tight'
                    noOfLines={1}
                    textAlign="left"
                >
                    {property.title}
                </Box>

                <Box display='flex' mt='2' alignItems='center' style={{display: isHovered ? "none" : "flex"}}>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < property.rating ? 'yellow.500' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {property.reviewCount}
                    </Box>

                </Box>
                <Box fontSize='sm' noOfLines={1} textAlign="left" mt={2}>
                    {property.title}
                </Box>
            </Box>
        </Box>
    )
}
const t= [1,2,3,4,5,6,7,8,9,10,11,12]
export const Products = () => {
    return (
        <Center key={Math.random()}>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {
              t.map(()=> <AirbnbCard key={Math.random()}/>)  
            }
        </Grid>
        </Center>
    )
}